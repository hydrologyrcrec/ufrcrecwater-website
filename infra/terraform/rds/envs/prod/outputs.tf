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

output "rds_port" {
  value = aws_db_instance.this.port
}

output "public_subnet_ids" {
  value = [
    aws_subnet.pub_a.id,
    aws_subnet.pub_b.id
  ]
}

output "public_subnet_a_id" {
  value = aws_subnet.pub_a.id
}

output "public_subnet_b_id" {
  value = aws_subnet.pub_b.id
}