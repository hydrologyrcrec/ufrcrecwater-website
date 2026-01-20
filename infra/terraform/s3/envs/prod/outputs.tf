output "app_bucket_name" {
  description = "Primary bucket for Amplify assets"
  value       = aws_s3_bucket.app.bucket
}

output "logs_bucket_name" {
  description = "Access logging bucket"
  value       = aws_s3_bucket.logs.bucket
}

output "kms_key_arn" {
  description = "KMS key used for bucket encryption"
  value       = aws_kms_key.s3.arn
}
