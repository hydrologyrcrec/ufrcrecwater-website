# Pins Terraform and AWS provider versions
# Tells Terraform which cloud and which region to operate in
# Prevents breaking changes
# Ensures reproducible infra across machines

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.region
}
