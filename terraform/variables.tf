variable "cloudflare_api_token" {
  description = "Cloudflare API token with Zone:Edit permissions for the domain"
  type        = string
  sensitive   = true
}

variable "github_username" {
  description = "GitHub username for GitHub Pages"
  type        = string
  default     = "yaroze"
}

variable "domain_name" {
  description = "Primary domain name"
  type        = string
  default     = "example.com"
}

variable "github_repo_name" {
  description = "GitHub repository name for the portfolio"
  type        = string
  default     = "yaroze.github.io"
}

