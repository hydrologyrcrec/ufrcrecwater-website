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