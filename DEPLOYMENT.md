# Portfolio Deployment Guide

This document outlines the deployment setup for a DevOps Engineer portfolio website using GitHub Pages and Cloudflare.

## Architecture Overview

- **Hosting**: GitHub Pages (free tier)
- **DNS**: Cloudflare with proxy and SSL termination
- **Domain**: example.com with subdomains (www, me, i)
- **CI/CD**: GitHub Actions for automated deployment
- **Infrastructure**: OpenTofu for Cloudflare configuration

## Domains Configuration

The portfolio is accessible via multiple domains:
- `example.com` (primary)
- `www.example.com`
- `me.example.com`
- `i.example.com`

All domains redirect to HTTPS and are proxied through Cloudflare for performance and security.

## Prerequisites

1. **GitHub Repository**: Private repository for hosting the portfolio
2. **Cloudflare Account**: Domain management and DNS
3. **Cloudflare API Token**: Limited token for DNS record management
4. **GitHub Secrets**: Store sensitive configuration

## Setup Instructions

### 1. Repository Setup

1. Create a new private GitHub repository named `portfolio`
2. Push this codebase to the repository
3. Enable GitHub Pages in repository settings

### 2. GitHub Secrets Configuration

Add the following secrets to your GitHub repository:

```
CLOUDFLARE_API_TOKEN=Kopu7_PK3NmGeE0ZQ3GqzJmjuOVYvoWDK0EQfM3b
```

### 3. OpenTofu Configuration

1. Navigate to the `terraform/` directory
2. Copy `terraform.tfvars.example` to `terraform.tfvars`
3. Fill in the required values:

```hcl
cloudflare_api_token = "Kopu7_PK3NmGeE0ZQ3GqzJmjuOVYvoWDK0EQfM3b"
github_username     = "username"
domain_name         = "example.com"
github_repo_name    = "portfolio"
```

### 4. Manual OpenTofu Deployment (Initial Setup)

For the initial setup, you may want to run OpenTofu manually:

```bash
cd terraform
tofu init
tofu plan
tofu apply
```

### 5. GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The custom domain will be configured automatically via the CNAME file

## Deployment Process

### Automated Deployment

The deployment process is fully automated via GitHub Actions:

1. **Build**: Compile React app with Vite
2. **Test**: Run Puppeteer tests locally
3. **Deploy**: Deploy to GitHub Pages
4. **Infrastructure**: Update Cloudflare DNS via OpenTofu
5. **Verify**: Test all domains with Puppeteer

### Manual Deployment

To trigger a manual deployment:

1. Go to Actions tab in GitHub
2. Select "Deploy Portfolio to GitHub Pages"
3. Click "Run workflow"

## Monitoring and Verification

### Automated Testing

The deployment includes comprehensive testing:

- **Local Testing**: Puppeteer tests on localhost during build
- **Domain Verification**: Post-deployment testing of all domains
- **Performance Checks**: Mobile and desktop viewport testing
- **Content Validation**: Verification of key content and functionality

### Manual Testing

You can manually test the deployment:

```bash
# Install dependencies
npm install --save-dev puppeteer serve

# Build and test locally
npm run build
npx serve -s dist -l 3000 &
node .github/scripts/test-deployment.js

# Test live domains
node .github/scripts/verify-domains.js
```

## DNS Configuration

The OpenTofu configuration sets up:

- **CNAME Records**: All domains point to GitHub Pages
- **SSL/TLS**: Full SSL with minimum TLS 1.2
- **Security**: Medium security level with browser integrity checks
- **Performance**: Brotli compression, minification, and caching
- **Redirects**: HTTP to HTTPS redirects for all domains

## Troubleshooting

### Common Issues

1. **DNS Propagation**: DNS changes can take up to 48 hours to propagate
2. **SSL Certificate**: Cloudflare automatically provisions SSL certificates
3. **Build Failures**: Check GitHub Actions logs for detailed error messages

### Verification Commands

```bash
# Check DNS resolution
dig example.com
dig www.example.com

# Check SSL certificate
openssl s_client -connect example.com:443 -servername example.com

# Test HTTP to HTTPS redirect
curl -I http://example.com
```

## Security Considerations

- **API Token**: Limited Cloudflare token with zone-specific permissions
- **HTTPS Only**: All traffic redirected to HTTPS
- **GitHub Secrets**: Sensitive data stored as encrypted secrets
- **Private Repository**: Source code in private repository

## Performance Optimizations

- **Cloudflare CDN**: Global content delivery network
- **Asset Optimization**: Automatic minification and compression
- **Caching**: Optimized caching headers
- **Modern Formats**: Brotli compression and modern image formats

## Cost Analysis

- **GitHub Pages**: Free (private repo with GitHub Pro/Team)
- **Cloudflare**: Free tier (sufficient for personal portfolio)
- **Domain**: Annual registration fee (~$15/year)
- **Total Monthly Cost**: $0 (excluding domain registration)

## Maintenance

The setup is designed to be low-maintenance:

- **Automatic Deployments**: Triggered on git push to main
- **Infrastructure as Code**: OpenTofu manages all DNS configuration
- **Monitoring**: Automated testing verifies deployment health
- **Updates**: Dependabot keeps dependencies current

## Support

For issues with this deployment:

1. Check GitHub Actions logs for build/deployment errors
2. Verify Cloudflare dashboard for DNS configuration
3. Test domains manually with browser developer tools
4. Review Terraform state for infrastructure changes
