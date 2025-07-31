terraform {
  required_version = ">= 1.6"
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

# Configure the Cloudflare Provider
provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# Get the zone ID for pedrofarinha.me
data "cloudflare_zone" "main" {
  name = "pedrofarinha.me"
}

# Root domain CNAME to GitHub Pages (allow overwrite if exists)
resource "cloudflare_record" "root" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "CNAME"
  content         = "${var.github_username}.github.io"
  proxied         = true
  ttl             = 1
  comment         = "Root domain pointing to GitHub Pages"
  allow_overwrite = true
}

# www subdomain CNAME to GitHub Pages (allow overwrite if exists)
resource "cloudflare_record" "www" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "www"
  type            = "CNAME"
  content         = "${var.github_username}.github.io"
  proxied         = true
  ttl             = 1
  comment         = "WWW subdomain pointing to GitHub Pages"
  allow_overwrite = true
}

# me subdomain CNAME to GitHub Pages
resource "cloudflare_record" "me" {
  zone_id = data.cloudflare_zone.main.id
  name    = "me"
  type    = "CNAME"
  content = "${var.github_username}.github.io"
  proxied = true
  ttl     = 1
  comment = "Me subdomain pointing to GitHub Pages"
}

# i subdomain CNAME to GitHub Pages
resource "cloudflare_record" "i" {
  zone_id = data.cloudflare_zone.main.id
  name    = "i"
  type    = "CNAME"
  content = "${var.github_username}.github.io"
  proxied = true
  ttl     = 1
  comment = "I subdomain pointing to GitHub Pages"
}

# Note: Page rules and zone settings require higher permission levels
# These settings should be configured manually in the Cloudflare dashboard:
# - Always Use HTTPS: ON
# - SSL/TLS mode: Full
# - Minimum TLS Version: 1.2
# - Security Level: Medium
# - Brotli compression: ON
# - Auto Minify: CSS, JS, HTML
# - Rocket Loader: ON