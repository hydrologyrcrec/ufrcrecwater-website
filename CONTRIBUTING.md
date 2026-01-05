# Contributing Guide

This document defines how contributors work on this repository.

---

## Branching
- `main` is protected
- All work is done via feature branches
- Pull requests are required for merging

---

## Commits
- Use clear, descriptive commit messages
- One logical change per commit

---

## Database Rules
- No manual database edits
- All schema changes require migrations
- Migrations are immutable once merged

---

## Documentation Rules
- New setup steps → update `docs/setup.md`
- Architectural choices → update `docs/decisions.md`
- User-visible changes → update `CHANGELOG.md`

---

## Code Quality
- TypeScript is mandatory
- ESLint errors must be resolved before merge
- Prefer clarity over cleverness