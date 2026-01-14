# Project Setup Guide

This document records one-time setup steps used to bootstrap the project.

---

## Initial Project Scaffolding

**Goal:**
Create a Next.js application using the App Router with TypeScript and a clean project structure.

**Command used:**
```bash
npx create-next-app@latest research-portal \
  --typescript \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

**Additional requirements:**

✔ Would you like to use React Compiler? … No / Yes -> Choose No

✔ Would you like to use Tailwind CSS? … No / Yes -> Choose Yes

## AWS RDS PostgreSQL setup

**Goal:**
Setting up AWS RDS PostgreSQL using Terraform IAC

**Command used:**
```bash
cd infra/terraform/envs/prod
```

```bash
terraform init
terraform plan
terraform apply
```