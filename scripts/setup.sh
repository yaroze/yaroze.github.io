#!/bin/bash

# Portfolio Deployment Setup Script
# This script helps set up the deployment infrastructure

set -e

echo "🚀 Setting up Pedro Farinha's Portfolio Deployment"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

# Check prerequisites
print_step "Checking prerequisites..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Check if opentofu is installed
if ! command -v tofu &> /dev/null; then
    print_warning "OpenTofu is not installed. Install it from https://opentofu.org"
    print_warning "OpenTofu is required for DNS configuration."
fi

print_status "Prerequisites check completed"

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "vite.config.ts" ]; then
    print_error "This script must be run from the project root directory"
    exit 1
fi

# Install dependencies
print_step "Installing project dependencies..."
npm install

# Install additional development dependencies for testing
print_step "Installing testing dependencies..."
npm install --save-dev puppeteer serve

print_status "Dependencies installed successfully"

# Build the project to verify everything works
print_step "Building project to verify setup..."
npm run build

if [ $? -eq 0 ]; then
    print_status "Build successful"
else
    print_error "Build failed. Please check the error messages above."
    exit 1
fi

# Set up Terraform configuration
print_step "Setting up Terraform configuration..."

if [ ! -f "terraform/terraform.tfvars" ]; then
    cp terraform/terraform.tfvars.example terraform/terraform.tfvars
    print_warning "Created terraform/terraform.tfvars from example"
    print_warning "Please edit terraform/terraform.tfvars with your actual values:"
    print_warning "  - cloudflare_api_token"
    print_warning "  - github_username"
else
    print_status "terraform.tfvars already exists"
fi

# Initialize OpenTofu
if command -v tofu &> /dev/null; then
    print_step "Initializing OpenTofu..."
    cd terraform
    tofu init
    cd ..
    print_status "OpenTofu initialized"
else
    print_warning "Skipping OpenTofu initialization (tofu not installed)"
fi

# Test the build locally
print_step "Testing local deployment..."
echo "Starting local server for testing..."

# Start local server in background
npx serve -s dist -l 3000 &
SERVER_PID=$!

# Wait for server to start
sleep 3

# Run tests
echo "Running Puppeteer tests..."
if node .github/scripts/test-deployment.js; then
    print_status "Local deployment test passed"
else
    print_warning "Local deployment test failed, but continuing setup"
fi

# Stop the server
kill $SERVER_PID 2>/dev/null || true

# Next steps
echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "==========="
echo ""
echo "1. Create a new private GitHub repository named 'portfolio'"
echo "   https://github.com/new"
echo ""
echo "2. Add the repository as a remote and push the code:"
echo "   git remote add origin https://github.com/pedrofarinha/portfolio.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Add GitHub repository secrets:"
echo "   Go to: Settings → Secrets and variables → Actions"
echo "   Add: CLOUDFLARE_API_TOKEN = Kopu7_PK3NmGeE0ZQ3GqzJmjuOVYvoWDK0EQfM3b"
echo ""
echo "4. Enable GitHub Pages:"
echo "   Go to: Settings → Pages"
echo "   Set Source to: GitHub Actions"
echo ""
echo "5. Configure OpenTofu variables:"
echo "   Edit terraform/terraform.tfvars with your actual values"
echo ""
echo "6. Run OpenTofu to set up DNS:"
echo "   cd terraform"
echo "   tofu plan"
echo "   tofu apply"
echo ""
echo "7. Trigger the GitHub Actions workflow:"
echo "   Push to main branch or manually trigger the workflow"
echo ""
echo "For detailed instructions, see DEPLOYMENT.md"
echo ""
print_status "Happy deploying! 🚀"