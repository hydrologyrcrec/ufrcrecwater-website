# Declares all configurable inputs (project name, DB creds, AZ)
# Avoids hardcoding
# Separates configuration from infrastructure logic
# Enables reuse and environment parity later

variable "project_name" {
  type        = string
  description = "Project identifier for naming"
}

variable "db_name" {
  type = string
}

variable "db_username" {
  type = string
}

variable "db_password" {
  type      = string
  sensitive = true
}

variable "az1" {
  type        = string
  description = "AZ 1 for deployment"
  default     = "us-east-1a"
}

variable "az2" {
  type        = string
  description = "AZ 2 for deployment"
  default     = "us-east-1b"
}