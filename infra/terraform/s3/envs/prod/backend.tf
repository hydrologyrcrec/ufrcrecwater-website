# Stores Terraform state in S3
# Enables shared, durable state
# Local state is fragile
# S3 backend enables collaboration and recovery
# Required for serious infrastructure work

terraform {
  backend "s3" {
    bucket         = "ufrcrecwater-terraform-state" # change if you use a different state bucket
    key            = "s3/prod/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}
