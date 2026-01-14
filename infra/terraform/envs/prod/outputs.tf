# Exposes important values (VPC ID, RDS endpoint, SG IDs)
# Needed to wire Amplify VPC access
# Avoids manual console lookup
# Enables automation and clarity

output "rds_endpoint" {
  value = aws_db_instance.this.address
}

output "rds_security_group_id" {
  value = aws_security_group.rds.id
}

output "vpc_id" {
  value = aws_vpc.this.id
}