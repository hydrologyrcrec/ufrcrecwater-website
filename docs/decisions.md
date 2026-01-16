# Architecture & Technical Decisions

This document records key technical decisions made during the project.
Each entry is short, dated, and explains *why* a choice was made.

---

## 2026-01-05 — Next.js App Router

**Decision:**  
Use Next.js App Router instead of the Pages Router.

**Why:**
- Native support for Server Components
- Better layout composition
- Long-term direction of the framework

**Implications:**
- Routing lives under `src/app`
- Layouts and loading states are file-based

---

## 2026-01-05 — Tailwind CSS for Styling

**Decision:**  
Use Tailwind CSS as the primary styling solution.

**Why:**
- Enforces consistent design patterns
- Eliminates ad-hoc CSS growth
- Fast iteration without context switching

**Implications:**
- Minimal custom CSS
- Shared UI primitives preferred over bespoke styles

---

## 2026-01-05 — PostgreSQL as Primary Database

**Decision:**  
Use PostgreSQL for all structured data.

**Why:**
- Strong relational guarantees
- Well-suited for research metadata
- Excellent ecosystem and tooling

**Implications:**
- Schema changes require migrations
- No manual database edits in production

## 2026-01-06 — Page-Level SEO Metadata per Route

**Decision:**  
Define top level routes, and explicit metadata for each of them.

**Why:**
- Improves search relevance per page
- Prevents duplicate titles/descriptions
- Aligns with Next.js App Router best practices

**Implications:**
- Every new route except for login must include metadata for better SEO

## 2026-01-06 — Header built from PAGES config with rank ordering

**Decision:**  
Build header navigation dynamically from `PAGES`, filtering `rank >= 1` and sorting ascending by rank.

**Why:**
- Eliminates hardcoded nav items
- Keeps UI order controlled by config
- Makes future navigation changes safe and centralized

**Implications:**
- Adding/reordering pages requires only updating `PAGES`
- Header remains consistent across the site

## 2026-01-07 — Publications Page Architecture & Data Decisions

**Decisions:**
- Publications are represented using strongly typed domain models (`Publication`, `Author`) stored in `src/types/`.
- Initial content uses realistic mock data stored in `src/data/publications.ts`.
- PDFs are accessed via native browser behavior (view in new tab, optional download).
- Layout uses flex with container-centered alignment flex wrapping.
- Styling follows Tailwind-first conventions with ordered utility classes.

**Why:**
- Keeps UI components pure and focused on rendering.
- Enables easy transition from mock data to database/API.
- Improves maintainability, consistency, and SEO readiness.

**Implications:**
- Backend integration can replace mock data without refactoring UI.
- Patterns established here will be reused for other content-heavy pages.

## 2026-01-10 — Team Page Architecture & Data Decisions

**Decisions:**
- Added /team route with page-level metadata pulled from PAGES (page.tsx, navigation.ts).
- Team roster renders from typed Member domain model and centralized mock data (team.ts), including status icons and tenure formatting.
- UI uses reusable card primitives plus shared search and sort/filter controls for future interactivity (search.tsx, filter.tsx).

**Why:**
- Centralized config keeps navigation/SEO consistent and avoids hardcoded strings.
- Strong typing and mock data isolate UI from backend readiness and make future data sources easy to swap in.

**Implications:**
- Replacing mock data with API/DB results only needs wiring the Team component props
- Search/filter controls are present but need real handlers/data plumbing to become functional; styling assumes Tailwind utilities and the existing image assets under /public/team.

## 2026-01-12 — Primary Database Architecture (AWS RDS)

### Decisions
- Amazon RDS for PostgreSQL was selected as the primary database due to scale and simplicity.
- Two-AZ deployment was chosen with individual private subnets.
- The database is not publicly accessible and has no NAT gateway.
- Infrastructure is provisioned and managed using Terraform (IaC).

### Why
- The application workload is read-heavy with low to moderate traffic (<100k rows), making Aurora unnecessary.
- A private-only database minimizes attack surface and enforces network-level security.
- Terraform ensures reproducibility, auditability, and controlled evolution of infrastructure.

### Implications
- Amplify has no outbound internet access when VPC access is enabled by design.
- This architecture prioritizes cost efficiency and clarity over redundancy.

## 2026-01-15 — Database Schema Management with Prisma ORM

### Decisions
- Prisma ORM selected as the database access layer for PostgreSQL (AWS RDS).
- Database schema defined declaratively in schema.prisma.
- All schema changes applied via Prisma migrations.
- Local development uses a separate dev database.
- Production and staging databases use prisma migrate deploy.
- No manual schema changes allowed in RDS.
- Database connection configured via DATABASE_URL environment variable.
- Migrations and schema files are committed to version control.

### Why
- Ensures schema changes are reproducible, reviewable, and auditable.
- Prevents schema drift across environments.
- Keeps application code and database schema strongly typed and in sync.
- Separates development workflows from production-safe deployment workflows.

### Implications
- Schema evolution must always go through migrations.
- Production databases are never modified interactively.