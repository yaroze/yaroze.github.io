#!/bin/bash

# Script to delete all DNS records except email-related ones
# Uses Cloudflare API to clean up DNS records

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Configuration
API_TOKEN="Kopu7_PK3NmGeE0ZQ3GqzJmjuOVYvoWDK0EQfM3b"
ZONE_NAME="example.com"
ZONE_ID="60f735e49d6acb9f990493b5b5df47ad"

echo "🧹 Cleaning up DNS records for ${ZONE_NAME}"
echo "=============================================="

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    print_error "jq is required but not installed. Please install jq first:"
    print_error "  macOS: brew install jq"
    print_error "  Ubuntu/Debian: sudo apt-get install jq"
    exit 1
fi

# Function to make Cloudflare API calls
cf_api() {
    local method="$1"
    local endpoint="$2"
    local data="$3"
    
    if [ -n "$data" ]; then
        curl -s -X "$method" \
            "https://api.cloudflare.com/client/v4$endpoint" \
            -H "Authorization: Bearer $API_TOKEN" \
            -H "Content-Type: application/json" \
            --data "$data"
    else
        curl -s -X "$method" \
            "https://api.cloudflare.com/client/v4$endpoint" \
            -H "Authorization: Bearer $API_TOKEN" \
            -H "Content-Type: application/json"
    fi
}

print_step "Fetching all DNS records for zone ${ZONE_NAME}..."

# Get all DNS records
response=$(cf_api "GET" "/zones/$ZONE_ID/dns_records")

# Check if API call was successful
if ! echo "$response" | jq -e '.success' > /dev/null; then
    print_error "Failed to fetch DNS records:"
    echo "$response" | jq -r '.errors[]? | .message'
    exit 1
fi

# Extract records and save to temporary file
echo "$response" | jq -r '.result[]' > /tmp/dns_records.json

print_status "Found $(cat /tmp/dns_records.json | wc -l) DNS records"

# Define email-related patterns to preserve
EMAIL_PATTERNS=(
    "^mail\."
    "^smtp\."
    "^pop\."
    "^imap\."
    "^webmail\."
    "^autoconfig\."
    "^autodiscover\."
    "_dmarc\."
    "_domainkey\."
    "^@.*MX$"
    "^.*MX$"
    "^.*TXT.*spf"
    "^.*TXT.*dkim"
    "^.*TXT.*dmarc"
)

print_step "Identifying records to preserve (email-related)..."

# Create arrays to store records
declare -a preserve_records=()
declare -a delete_records=()

# Process each record
while IFS= read -r record; do
    if [ -z "$record" ]; then
        continue
    fi
    
    record_id=$(echo "$record" | jq -r '.id')
    record_name=$(echo "$record" | jq -r '.name')
    record_type=$(echo "$record" | jq -r '.type')
    record_content=$(echo "$record" | jq -r '.content // ""')
    
    # Check if this is an email-related record
    preserve=false
    
    # Check for MX records
    if [ "$record_type" = "MX" ]; then
        preserve=true
        print_status "Preserving MX record: $record_name -> $record_content"
    fi
    
    # Check for TXT records with email-related content
    if [ "$record_type" = "TXT" ]; then
        if echo "$record_content" | grep -iE "(spf|dkim|dmarc)" > /dev/null; then
            preserve=true
            print_status "Preserving email TXT record: $record_name"
        fi
    fi
    
    # Check for email-related subdomains
    for pattern in "${EMAIL_PATTERNS[@]}"; do
        if echo "$record_name" | grep -E "$pattern" > /dev/null; then
            preserve=true
            print_status "Preserving email-related record: $record_name ($record_type)"
            break
        fi
    done
    
    if [ "$preserve" = true ]; then
        preserve_records+=("$record_id:$record_name:$record_type")
    else
        delete_records+=("$record_id:$record_name:$record_type")
    fi
    
done < <(cat /tmp/dns_records.json)

echo ""
print_step "Summary:"
print_status "Records to preserve: ${#preserve_records[@]}"
print_warning "Records to delete: ${#delete_records[@]}"

if [ ${#delete_records[@]} -eq 0 ]; then
    print_status "No records to delete. All records appear to be email-related."
    exit 0
fi

echo ""
print_warning "Records that will be DELETED:"
for record in "${delete_records[@]}"; do
    IFS=':' read -r id name type <<< "$record"
    echo "  - $name ($type)"
done

echo ""
print_warning "Records that will be PRESERVED:"
for record in "${preserve_records[@]}"; do
    IFS=':' read -r id name type <<< "$record"
    echo "  + $name ($type)"
done

echo ""
read -p "Do you want to proceed with deleting ${#delete_records[@]} DNS records? [y/N]: " confirm

if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    print_status "Operation cancelled."
    exit 0
fi

print_step "Deleting non-email DNS records..."

deleted_count=0
failed_count=0

for record in "${delete_records[@]}"; do
    IFS=':' read -r record_id record_name record_type <<< "$record"
    
    print_status "Deleting: $record_name ($record_type)"
    
    delete_response=$(cf_api "DELETE" "/zones/$ZONE_ID/dns_records/$record_id")
    
    if echo "$delete_response" | jq -e '.success' > /dev/null; then
        ((deleted_count++))
        echo "  ✅ Deleted successfully"
    else
        ((failed_count++))
        print_error "  ❌ Failed to delete:"
        echo "$delete_response" | jq -r '.errors[]? | "    " + .message'
    fi
    
    # Small delay to avoid rate limiting
    sleep 0.5
done

echo ""
print_step "Cleanup Summary:"
print_status "Successfully deleted: $deleted_count records"
if [ $failed_count -gt 0 ]; then
    print_warning "Failed to delete: $failed_count records"
fi
print_status "Preserved: ${#preserve_records[@]} email-related records"

# Clean up temporary file
rm -f /tmp/dns_records.json

echo ""
print_status "DNS cleanup completed! 🎉"
print_status "Email functionality should remain intact."

# Verify remaining records
print_step "Remaining DNS records:"
remaining_response=$(cf_api "GET" "/zones/$ZONE_ID/dns_records")
if echo "$remaining_response" | jq -e '.success' > /dev/null; then
    echo "$remaining_response" | jq -r '.result[] | "  - " + .name + " (" + .type + ")"'
else
    print_warning "Could not fetch remaining records for verification"
fi
