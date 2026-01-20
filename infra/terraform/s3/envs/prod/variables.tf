variable "project_name" {
  description = "Project name used for naming resources"
  type        = string
}

variable "env" {
  description = "Environment name (e.g., dev, prod)"
  type        = string
}

variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "amplify_role_arn" {
  description = "IAM role ARN that Amplify uses to access the bucket"
  type        = string
}

variable "force_destroy" {
  description = "Allow bucket deletion even if it contains objects (keep false for prod)"
  type        = bool
  default     = false
}
