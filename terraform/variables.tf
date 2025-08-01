variable "cloudflare_api_token" {
  description = "Cloudflare API token with Zone:Edit permissions for pedrofarinha.me"
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
  default     = "pedrofarinha.me"
}

variable "github_repo_name" {
  description = "GitHub repository name for the portfolio"
  type        = string
  default     = "yaroze.github.io"
}

