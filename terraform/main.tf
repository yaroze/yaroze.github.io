terraform {
  required_version = ">= 1.0"
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

# Root domain CNAME to GitHub Pages
resource "cloudflare_record" "root" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "CNAME"
  content = "${var.github_username}.github.io"
  proxied = true
  ttl     = 1
  comment = "Root domain pointing to GitHub Pages"
}

# www subdomain CNAME to GitHub Pages
resource "cloudflare_record" "www" {
  zone_id = data.cloudflare_zone.main.id
  name    = "www"
  type    = "CNAME"
  content = "${var.github_username}.github.io"
  proxied = true
  ttl     = 1
  comment = "WWW subdomain pointing to GitHub Pages"
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

# Page rule to redirect all HTTP to HTTPS
resource "cloudflare_page_rule" "https_redirect" {
  zone_id  = data.cloudflare_zone.main.id
  target   = "*.pedrofarinha.me/*"
  priority = 1

  actions {
    always_use_https = true
  }
}

# SSL/TLS settings
resource "cloudflare_zone_settings_override" "ssl_settings" {
  zone_id = data.cloudflare_zone.main.id
  settings {
    ssl                      = "full"
    always_use_https         = "on"
    min_tls_version          = "1.2"
    opportunistic_encryption = "on"
    tls_1_3                  = "zrt"
    automatic_https_rewrites = "on"
    universal_ssl            = "on"
  }
}

# Security settings
resource "cloudflare_zone_settings_override" "security_settings" {
  zone_id = data.cloudflare_zone.main.id
  settings {
    security_level         = "medium"
    challenge_ttl          = 1800
    browser_integrity_check = "on"
    hotlink_protection     = "off"
    ip_geolocation         = "on"
  }
}

# Performance settings
resource "cloudflare_zone_settings_override" "performance_settings" {
  zone_id = data.cloudflare_zone.main.id
  settings {
    brotli               = "on"
    minify {
      css  = "on"
      js   = "on"
      html = "on"
    }
    rocket_loader        = "on"
    mirage              = "on"
    polish              = "lossless"
  }
}