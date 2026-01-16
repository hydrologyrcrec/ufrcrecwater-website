# Database

This document shows how the database is designed, managed, and operated

---

## Overview

- Engine: PostgreSQL.
- Hosting: AWS RDS (Multi-AZ).
- Regions: us-east-1a, us-east-1b.
- Usage pattern: Read-heavy, low-to-moderate traffic.
- Primary consumers: Next.js server actions & API routes.

## Access Model

- Application accesses the database via Prisma ORM.
- Database is private, reachable only through:
  - VPC.
  - Security group–based access from Amplify.
- No public database access.

## Schema Management

- Schema is defined in prisma folder as schema.prisma.
- Prisma schema and migrations are the source of truth for the database.
- All schema changes are applied via Prisma migrations.
- Migrations are:
  - Versioned.
  - Committed to Git.
  - Append-only.

## Environments

- Local dev: dev RDS database.
- Production: Dedicated prod RDS database.
- Each environment uses its own DATABASE_URL.

## Data Inspection

- Prisma Studio is used for:
  - Local development.
  - Dev database inspection.
- Prisma Studio is never run in production.

## Backups & Reliability

- Automated RDS backups enabled.
- Multi-AZ deployment for reliabilty.



