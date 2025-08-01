# GitHub domain verification records
resource "cloudflare_record" "github_domain_verification" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "_github-pages-challenge-yaroze"
  type            = "TXT"
  content         = "a8f5f167c44f4964abdcd35d0340ee"
  ttl             = 1
  allow_overwrite = true
}

# GitHub domain verification for root domain
resource "cloudflare_record" "github_domain_verification_root" {
  zone_id         = data.cloudflare_zone.main.id
  name            = "@"
  type            = "TXT"
  content         = "github-domain-verification=yaroze"
  ttl             = 1
  allow_overwrite = true
}