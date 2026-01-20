terraform {
  backend "s3" {
    bucket         = "ufrcrecwater-terraform-state" # change if you use a different state bucket
    key            = "s3/prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "ufrcrecwater-terraform-locks" # optional if you use state locking
    encrypt        = true
  }
}
