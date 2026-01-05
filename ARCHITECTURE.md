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
- `src/app` — routing, layouts, pages, server actions
- `src/components` — reusable UI components
- `src/lib` — shared logic (db, auth, config)
- `migrations/` — database schema evolution
- `scripts/` — repeatable operational workflows
- `docs/` — documentation and decisions

---

## Environments
- `dev` — local development
- `staging` — pre-production validation
- `prod` — production deployment

Each environment uses isolated databases and resources.
