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

## Prisma Setup

**Goal:**
Setting up prisma ORM for db migrations

**Command used:**
```bash
# Initial Files Setup
npm install prisma @prisma/client
npx prisma init
```

```bash
# Creating migration first without applying it to the db
npx prisma migrate dev --create-only

# Once satisfied with the migration, apply it to the db
npx prisma migrate dev
```

```bash
# for direct dev migrations
npx prisma migrate dev --name <description>
```

```bash
# for Prod migrations
npx prisma migrate deploy
```

```bash
# Generate prisma client for prisma studio
npx prisma generate
```

```bash
# Accessing prisma studio
npx prisma studio
```

## Generating Pdf Thumbnails

**Goal:**
To generate pdf thumbnails, for preview

**Command Used:**
```bash
npx tsx lib/pdf-thumbnail/script.ts
```