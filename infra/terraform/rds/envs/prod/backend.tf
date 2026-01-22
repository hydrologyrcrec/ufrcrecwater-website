# Stores Terraform state in S3
# Enables shared, durable state
# Local state is fragile
# S3 backend enables collaboration and recovery
# Required for serious infrastructure work

terraform {
  backend "s3" {
    bucket         = "ufrcrecwater-terraform-state"
    key            = "rds/prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "ufrcrecwater-terraform-locks" # optional if you use state locking
    encrypt        = true
  }
}