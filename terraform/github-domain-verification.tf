# GitHub domain verification record  
resource "cloudflare_record" "github_domain_verification" {
  zone_id = data.cloudflare_zone.main.id
  name    = "_github-pages-challenge-yaroze"
  type    = "TXT"
  content = "a8f5f167c44f4964abdcd35d0340ee"
  ttl     = 300
  comment = "GitHub Pages domain verification for yaroze"
}