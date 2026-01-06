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