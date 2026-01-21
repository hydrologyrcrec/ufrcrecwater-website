# Exposes important values (VPC ID, RDS endpoint, SG IDs)
# Needed to wire Amplify VPC access
# Avoids manual console lookup
# Enables automation and clarity

output "app_bucket_name" {
  description = "Primary bucket for Amplify assets"
  value       = aws_s3_bucket.app.bucket
}