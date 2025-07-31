#!/bin/bash

# Script to create GitHub repository and set up deployment
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

echo "🚀 Creating GitHub Repository for Portfolio Deployment"
echo "====================================================="

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    print_error "GitHub CLI (gh) is not installed."
    print_error "Please install it from: https://cli.github.com/"
    print_error "Or use brew: brew install gh"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    print_error "You are not authenticated with GitHub CLI."
    print_error "Please run: gh auth login"
    exit 1
fi

# Repository details
REPO_NAME="portfolio"
REPO_DESCRIPTION="Pedro Farinha's professional portfolio website - DevOps/Platform Engineer"

print_step "Creating private GitHub repository..."

# Create the repository
if gh repo create "$REPO_NAME" --private --description "$REPO_DESCRIPTION" --clone=false; then
    print_status "Repository created successfully: https://github.com/$(gh api user --jq .login)/${REPO_NAME}"
else
    print_error "Failed to create repository. It may already exist."
    print_warning "Continuing with existing repository setup..."
fi

# Add remote origin
print_step "Setting up git remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$(gh api user --jq .login)/${REPO_NAME}.git"

# Create main branch if it doesn't exist
if ! git rev-parse --verify main >/dev/null 2>&1; then
    print_step "Creating main branch..."
    git checkout -b main
fi

# Add GitHub secrets
print_step "Adding GitHub repository secrets..."

# Cloudflare API token
echo "Kopu7_PK3NmGeE0ZQ3GqzJmjuOVYvoWDK0EQfM3b" | gh secret set CLOUDFLARE_API_TOKEN

print_status "Repository secrets added successfully"

# Enable GitHub Pages
print_step "Configuring GitHub Pages..."
gh api --method PUT "/repos/$(gh api user --jq .login)/${REPO_NAME}/pages" \
  --field source='{"branch":"gh-pages","path":"/"}' \
  --field build_type="workflow" 2>/dev/null || print_warning "GitHub Pages configuration may need manual setup"

print_status "GitHub Pages configured"

# Commit and push initial code
print_step "Committing and pushing initial code..."

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    cat > .gitignore << EOF
# Dependencies
node_modules/
.pnp
.pnp.js

# Production build
/dist
/build

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Terraform
terraform/.terraform/
terraform/*.tfstate
terraform/*.tfstate.*
terraform/terraform.tfvars
terraform/.terraform.lock.hcl

# Testing
coverage/
.nyc_output/

# Misc
*.tgz
*.tar.gz
.cache/
EOF
fi

# Add all files
git add .

# Commit
git commit -m "Initial portfolio deployment setup

🚀 Generated with Claude Code (https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to main
git push -u origin main

print_status "Code pushed to repository"

# Trigger initial workflow
print_step "Triggering initial deployment workflow..."
sleep 2  # Wait a moment for GitHub to process the push

# Try to trigger the workflow
if gh workflow run deploy.yml 2>/dev/null; then
    print_status "Deployment workflow triggered"
else
    print_warning "Could not trigger workflow automatically. It will run on the next push."
fi

# Final instructions
echo ""
echo "🎉 Repository setup completed successfully!"
echo ""
echo "Repository URL: https://github.com/$(gh api user --jq .login)/${REPO_NAME}"
echo "Actions URL: https://github.com/$(gh api user --jq .login)/${REPO_NAME}/actions"
echo ""
echo "Next steps:"
echo "==========="
echo ""
echo "1. 📝 Edit terraform/terraform.tfvars with your configuration:"
echo "   cd terraform"
echo "   cp terraform.tfvars.example terraform.tfvars"
echo "   # Edit terraform.tfvars with your values"
echo ""
echo "2. 🚀 Deploy DNS configuration:"
echo "   tofu init"
echo "   tofu plan"
echo "   tofu apply"
echo ""
echo "3. 🌐 Monitor the deployment:"
echo "   - Check GitHub Actions: https://github.com/$(gh api user --jq .login)/${REPO_NAME}/actions"
echo "   - Wait for DNS propagation (up to 48 hours)"
echo "   - Test domains: npm run test:domains"
echo ""
echo "4. 📊 Your portfolio will be available at:"
echo "   - https://pedrofarinha.me"
echo "   - https://www.pedrofarinha.me"
echo "   - https://me.pedrofarinha.me"
echo "   - https://i.pedrofarinha.me"
echo ""
print_status "Happy deploying! 🚀"