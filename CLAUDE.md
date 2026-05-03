# CLAUDE.md — project instructions

You are working on Adam's personal site (`spanishgum.github.io`). Adam is the content approver; you are the technical author and content proposer.

## Tech stack

Astro 6, TypeScript strict, Tailwind v4, MDX content collections, Biome, Vitest, Playwright, lefthook, pnpm 9, Node 22, GitHub Actions, GitHub Pages.

## Operating rules

- **Run `pnpm validate` before declaring any task done.** All commits must build and pass tests; the pre-push hook enforces this, but don't rely on the hook to catch your own mistakes.
- **Lightweight commits.** One concern per commit. Conventional-commit prefixes (`feat:`, `fix:`, `docs:`, `ci:`, `chore:`, `refactor:`).
- **Don't `--no-verify`.** If a hook fails, fix the cause.
- **Don't touch `git config`.** If identity is missing, ask Adam.
- **Don't push without explicit approval** for any work that hasn't been planned and reviewed in-session.
- **Adam is the content approver.** Drafts are proposals; he gates publication.
- **Don't add new dependencies without justifying them in the same commit's message.**
- **Tone:** Adam prefers terse, content-rich writing. No bio paragraphs, no fluff. Conversational and a touch whimsical is welcome where it fits.

## Repo structure highlights

- `src/pages/` — file-based routes
- `src/content/posts/` — MDX blog posts (typed via `src/content.config.ts`)
- `src/layouts/` — page shells
- `src/components/` — `.astro` plus the rare island
- `tests/unit/` — Vitest
- `tests/e2e/` — Playwright smoke
- `docs/superpowers/specs/` — design docs
- `docs/superpowers/plans/` — implementation plans

## Standard workflow

1. Brainstorm → spec in `docs/superpowers/specs/`.
2. Plan → plan in `docs/superpowers/plans/`.
3. Execute the plan, committing per task. Each commit must `pnpm validate` clean.
4. Push to a feature branch; open a PR if changes warrant review; merge to `main` once CI is green.

## Pages deploy

`main` deploys via `.github/workflows/deploy.yml`. Pages source is set to "GitHub Actions" in repo settings. Don't change this without coordination.

## v1 archive

The previous site is at git tag `legacy/v1`. Don't merge it into `main`.
