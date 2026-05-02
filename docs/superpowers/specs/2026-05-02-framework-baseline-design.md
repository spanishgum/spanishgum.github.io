# spanishgum.github.io — v2 Framework Baseline

- **Date:** 2026-05-02
- **Status:** Approved (brainstorm)
- **Author:** Claude (technical owner)
- **Approver:** Adam (spanishgum)
- **Sub-project:** 1 of 3 (framework & dev workflow)

## Background

The current site is a react-static 7 + React 16 SPA from 2019–2021 with two blog posts, no bio/projects pages, manual `npm run deploy` to a `master` branch, no CI, and 18 stale dependabot PRs against `dev`. Adam has approved a full reset.

This spec covers **only sub-project 1**: the technical pipeline. Visual design, content migration, and the weekly content routine are explicit non-goals here and get their own brainstorm cycles.

## Goals

- Modern, content-first SSG that supports occasional interactive flourishes without bundle bloat.
- Frictionless dev loop: edit → see change → commit → push → deploy with zero manual steps.
- Hard guarantee that every commit on `main` builds and passes tests.
- Documented build / test / deploy / validate procedures so future-me (or a subagent) can pick up cold.
- Clean break from v1 history without losing recoverability.

## Non-goals (deferred)

- Visual identity, typography, color palette, illustrations, whimsy, landing photo. → Sub-project 2.
- Porting or archiving the two 2021 blog posts. → Sub-project 2.
- Real landing-page content beyond a placeholder. → Sub-project 2.
- Sunday content routine, scheduled task, mobile approval flow. → Sub-project 3.
- Analytics, SEO meta beyond Astro defaults, RSS feed. → Revisit in 2 or 3.

## Stack

| Concern | Choice | Rationale |
|---|---|---|
| SSG | Astro 6 (>=6.2.1) | Content-first, zero JS by default, islands for interactivity, MDX, view transitions, content collections, active in 2026. |
| Language | TypeScript (strict) | Type safety on content schemas + helpers. |
| Styles | Tailwind v4 (Vite plugin) | Industry-standard utility CSS, no PostCSS config needed in v4. |
| Content | MDX via `@astrojs/mdx` | Authored posts can embed components when needed. |
| Package mgr | pnpm 9 | Fast, deterministic lockfile, low-drama. |
| Runtime | Node 22 LTS | Pinned via `.nvmrc` and `engines` in `package.json`. |
| Lint + format | Biome | One config replaces ESLint + Prettier; Rust-fast. |
| Unit tests | Vitest | Native Vite integration; light footprint. |
| E2E smoke | Playwright (one test) | Verifies build + homepage 200 + no console errors. |
| Git hooks | lefthook | Single Go binary, no Node dep at hook time, fast. |
| CI/CD | GitHub Actions | Native, free for public repos, one-line Pages deploy. |
| Hosting | GitHub Pages (user site) | Already using `spanishgum.github.io`; no DNS. |

Astro `site = "https://spanishgum.github.io"`, `base = "/"` (user pages serve at root).

## Repo reset strategy

1. Tag current `dev` HEAD as `legacy/v1` and push the tag. Old code is permanently retrievable.
2. Create an orphan branch `main` (no parents). v2 lands as commit #1: `chore: v2 fresh start (Astro)`.
3. Stop touching `dev`; leave `master` (currently deployed) alone until v2 is live.
4. Cut over: change Pages source from `master` branch → "GitHub Actions" in repo settings. Workflow takes over.
5. After ~1 week of confirmed v2 deploys, delete `master` and `dev` branches. The 18 stale dependabot PRs auto-close when `dev` is deleted.

The orphan `main` keeps `git log` clean for v2; `legacy/v1` tag preserves the past without coupling.

## Repo layout

```
spanishgum.github.io/
├── .github/workflows/
│   ├── ci.yml              # lint, typecheck, test, build on PR + push to non-main
│   └── deploy.yml          # build + deploy to Pages (main only)
├── .vscode/                # workspace settings
├── public/                 # static assets served as-is (favicon, og images)
├── src/
│   ├── assets/             # imported assets (optimized at build)
│   ├── components/         # .astro + occasional island components
│   ├── content/
│   │   └── posts/          # MDX blog posts (typed via content collections)
│   ├── layouts/            # page shells
│   ├── pages/              # file-based routing
│   │   ├── index.astro     # landing (placeholder)
│   │   └── posts/          # blog index + dynamic [...slug].astro
│   ├── styles/             # global.css, tailwind layers
│   └── content.config.ts   # content collection schemas
├── tests/
│   ├── unit/               # vitest
│   └── e2e/                # playwright smoke
├── docs/
│   ├── DEVELOPMENT.md      # build / test / deploy / validate
│   └── superpowers/specs/  # design docs (this file lives here in v2)
├── astro.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── biome.json
├── lefthook.yml
├── playwright.config.ts
├── vitest.config.ts
├── package.json
├── pnpm-lock.yaml
├── .nvmrc                  # 22
├── .node-version           # 22
├── .gitignore
├── CLAUDE.md               # project-level instructions for Claude
└── README.md
```

## Development workflow

`package.json` scripts (the only commands needed):

| Command | What it does |
|---|---|
| `pnpm dev` | Astro dev server, HMR at `localhost:4321` |
| `pnpm build` | Production build to `./dist` |
| `pnpm preview` | Serve `./dist` locally to verify prod output |
| `pnpm check` | Astro's TS + content schema check |
| `pnpm lint` | Biome lint (read-only) |
| `pnpm format` | Biome format (writes) |
| `pnpm test` | Vitest unit tests |
| `pnpm test:e2e` | Playwright smoke (auto-builds + serves) |
| `pnpm validate` | `check` → `lint` → `test` → `build` → `test:e2e` in sequence |

`pnpm validate` is the canonical "ship-ready" gate. CI runs it. Pre-push hook runs it.

## Git hooks (lefthook.yml)

Two stages — fast commits, full validation at push:

**`pre-commit`** (target <2s):
- Biome `--write` on staged files (auto-fixes formatting), re-stages affected files.
- Biome `lint` on staged files (catches what auto-fix can't).

Type checking is intentionally NOT in pre-commit: `astro check` is whole-project and adds multi-second latency that would make small commits painful. Type errors are caught at pre-push and in CI.

**`pre-push`** (30–60s):
- Full `pnpm validate` (which includes `astro check`).

Bypass only with explicit `--no-verify`. Honors Adam's "lightweight commits I can come back to" + "all commits build and test" constraint by splitting the cost: cheap at commit time, exhaustive at push time. CI is the third line of defense, not the first.

## CI/CD

**`.github/workflows/ci.yml`** — runs on PRs and pushes to non-`main` branches:
- Setup pnpm + Node 22 (with cache).
- `pnpm install --frozen-lockfile`.
- `pnpm validate`.

**`.github/workflows/deploy.yml`** — runs only on push to `main`:
- Same install + `pnpm build`.
- `actions/upload-pages-artifact@v3` on `./dist`.
- `actions/deploy-pages@v4` to publish.

One-time repo settings change: **Settings → Pages → Source: GitHub Actions**. README gets a build status badge.

## Documentation deliverables

1. **`README.md`** — short: project description, build status badge, link to `DEVELOPMENT.md`, link to live site.
2. **`docs/DEVELOPMENT.md`** — canonical "how to work on this repo":
    - **How to build:** `pnpm install && pnpm build`
    - **How to test:** `pnpm test`, `pnpm test:e2e`, `pnpm validate`
    - **How to deploy:** push to `main`; Actions handles it. Rollback = revert commit on `main`.
    - **How to validate:** `pnpm validate` locally; check the Actions tab; visit the live URL.
    - Prereqs (Node 22, pnpm), troubleshooting (common hook/CI failures), and a skeleton "how to add a blog post" placeholder. Full content workflow lives in sub-project 3.
3. **`CLAUDE.md`** — project-level instructions encoding the standards in this spec so future Claude sessions don't drift.

## Acceptance criteria

Sub-project 1 is done when **all** of the following hold:

1. `legacy/v1` tag exists on the remote and points at the previous `dev` HEAD.
2. `main` branch on the remote is the new orphan branch with the v2 scaffold.
3. `pnpm install && pnpm validate` succeeds from a clean checkout on Node 22.
4. Pushing a no-op commit to `main` triggers `deploy.yml`, which publishes to `https://spanishgum.github.io` and the homepage returns 200 with no console errors.
5. Pushing a commit that breaks the build to a non-`main` branch causes CI to fail (verified by deliberately introducing then reverting a break).
6. Attempting to commit unformatted code triggers Biome auto-fix locally.
7. Attempting to push a commit that fails `pnpm validate` is blocked by the pre-push hook.
8. `README.md`, `docs/DEVELOPMENT.md`, and `CLAUDE.md` exist and accurately describe the pipeline.
9. Pages source in repo settings is set to "GitHub Actions"; old `master` and `dev` branches still exist (deletion happens after a week of confirmed deploys, in a follow-up).

## Risks & open questions

- **Astro 6 + Tailwind v4 integration:** Tailwind v4 is the Vite-plugin route; verify during scaffolding that the integration matches Astro 6's docs at install time. If a snag appears, fall back to Tailwind v3 — same DX, lower risk.
- **lefthook on macOS:** install via `brew install lefthook` or pnpm dev dep; document both paths in `DEVELOPMENT.md`.
- **Playwright in CI:** browser download adds ~30s. Mitigated by GitHub Actions cache. If flaky, consider headless-only Chromium and skip Webkit/Firefox.
- **GitHub Pages cache:** Pages CDN can serve stale HTML for ~10 min after deploy; not a bug, just expectation-setting in `DEVELOPMENT.md`.

## Implementation handoff

Next step: invoke `superpowers:writing-plans` to produce the step-by-step implementation plan. The plan should be structured so that the more mechanical pieces (scaffold setup, config files, CI YAML) can be delegated to Sonnet subagents while design-sensitive pieces (hook logic, docs voice, repo reset) stay with the supervising session.
