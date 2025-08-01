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
  ttl             = 1
  allow_overwrite = true
}

resource "cloudflare_record" "root_a2" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "A"
  content         = "185.199.109.153"
  ttl             = 1
  allow_overwrite = true
}

resource "cloudflare_record" "root_a3" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "A"
  content         = "185.199.110.153"
  ttl             = 1
  allow_overwrite = true
}

resource "cloudflare_record" "root_a4" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "A"
  content         = "185.199.111.153"
  ttl             = 1
  allow_overwrite = true
}

# Root domain AAAA records for GitHub Pages (IPv6)
resource "cloudflare_record" "root_aaaa1" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "AAAA"
  content         = "2606:50c0:8000::153"
  ttl             = 1
  allow_overwrite = true
}

resource "cloudflare_record" "root_aaaa2" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "AAAA"
  content         = "2606:50c0:8001::153"
  ttl             = 1
  allow_overwrite = true
}

resource "cloudflare_record" "root_aaaa3" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "AAAA"
  content         = "2606:50c0:8002::153"
  ttl             = 1
  allow_overwrite = true
}

resource "cloudflare_record" "root_aaaa4" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "AAAA"
  content         = "2606:50c0:8003::153"
  ttl             = 1
  allow_overwrite = true
}

# www subdomain CNAME to pedrofarinha.me
resource "cloudflare_record" "www" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "www"
  type            = "CNAME"
  content         = "pedrofarinha.me"
  ttl             = 1
  allow_overwrite = true
}

# me subdomain CNAME to pedrofarinha.me
resource "cloudflare_record" "me" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "me"
  type            = "CNAME"
  content         = "pedrofarinha.me"
  ttl             = 1
  allow_overwrite = true
}

# i subdomain CNAME to pedrofarinha.me
resource "cloudflare_record" "i" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "i"
  type            = "CNAME"
  content         = "pedrofarinha.me"
  ttl             = 1
  allow_overwrite = true
}