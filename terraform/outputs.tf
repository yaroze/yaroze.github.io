output "zone_id" {
  description = "Cloudflare Zone ID"
  value       = data.cloudflare_zone.main.id
}

output "domain_name" {
  description = "Primary domain name"
  value       = var.domain_name
}

output "github_pages_url" {
  description = "GitHub Pages URL"
  value       = "https://${var.github_username}.github.io/${var.github_repo_name}"
}

output "custom_domains" {
  description = "Custom domains configured"
  value = [
    "https://${var.domain_name}",
    "https://www.${var.domain_name}",
    "https://me.${var.domain_name}",
    "https://i.${var.domain_name}"
  ]
}