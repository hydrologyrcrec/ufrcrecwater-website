# System Architecture

This document describes the high-level structure of the system.

---

## Technology Stack
- Frontend: Next.js (App Router, TypeScript)
- Database: PostgreSQL
- Hosting & DevOps: AWS Amplify, RDS, S3
- Styling: Tailwind CSS

---

## High-Level Flow
Client → Next.js App Router → Server Components / API Routes → PostgreSQL (RDS)  
Static assets and uploads are stored in S3.

---

## Folder Responsibilities
- `docs/` — documentation and decisions
- `infra/` - cloud resources setup
- `prisma/` - ORM setup for db migrations
- `scripts/` — repeatable operational workflows
- `ufrcrecwater-portal/src/app` — routing, layouts, pages, server actions
- `ufrcrecwater-portal/src/components` — reusable UI components
- `ufrcrecwater-portal/src/lib` — shared logic (db, auth, config)

---

## Environments
- `dev` — local development
- `prod` — production deployment

Each environment uses isolated databases and resources.
