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

# Root domain A records for GitHub Pages (IPv4)
resource "cloudflare_record" "root_a1" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "A"
  content         = "185.199.108.153"
  proxied         = false
  ttl             = 300
  comment         = "GitHub Pages A record 1"
  allow_overwrite = true
}

resource "cloudflare_record" "root_a2" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "A"
  content = "185.199.109.153"
  proxied = false
  ttl     = 300
  comment = "GitHub Pages A record 2"
}

resource "cloudflare_record" "root_a3" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "A"
  content = "185.199.110.153"
  proxied = false
  ttl     = 300
  comment = "GitHub Pages A record 3"
}

resource "cloudflare_record" "root_a4" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "A"
  content = "185.199.111.153"
  proxied = false
  ttl     = 300
  comment = "GitHub Pages A record 4"
}

# Root domain AAAA records for GitHub Pages (IPv6)
resource "cloudflare_record" "root_aaaa1" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "AAAA"
  content = "2606:50c0:8000::153"
  proxied = false
  ttl     = 300
  comment = "GitHub Pages AAAA record 1"
}

resource "cloudflare_record" "root_aaaa2" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "AAAA"
  content = "2606:50c0:8001::153"
  proxied = false
  ttl     = 300
  comment = "GitHub Pages AAAA record 2"
}

resource "cloudflare_record" "root_aaaa3" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "AAAA"
  content = "2606:50c0:8002::153"
  proxied = false
  ttl     = 300
  comment = "GitHub Pages AAAA record 3"
}

resource "cloudflare_record" "root_aaaa4" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "AAAA"
  content = "2606:50c0:8003::153"
  proxied = false
  ttl     = 300
  comment = "GitHub Pages AAAA record 4"
}

# www subdomain CNAME to pedrofarinha.me (allow overwrite if exists)
resource "cloudflare_record" "www" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "www"
  type            = "CNAME"
  content         = "pedrofarinha.me"
  proxied         = false
  ttl             = 300
  comment         = "WWW subdomain pointing to pedrofarinha.me"
  allow_overwrite = true
}

# me subdomain CNAME to pedrofarinha.me
resource "cloudflare_record" "me" {
  zone_id = data.cloudflare_zone.main.id
  name    = "me"
  type    = "CNAME"
  content = "pedrofarinha.me"
  proxied = false
  ttl     = 300
  comment = "Me subdomain pointing to pedrofarinha.me"
}

# i subdomain CNAME to pedrofarinha.me
resource "cloudflare_record" "i" {
  zone_id = data.cloudflare_zone.main.id
  name    = "i"
  type    = "CNAME"
  content = "pedrofarinha.me"
  proxied = false
  ttl     = 300
  comment = "I subdomain pointing to pedrofarinha.me"
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