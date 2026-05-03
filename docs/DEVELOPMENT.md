# Development

How to build, test, deploy, and validate `spanishgum.github.io`.

## Prerequisites

- Node 22 (`.nvmrc` and `.node-version` are set; use `nvm use` or `fnm use`)
- pnpm 9 (`corepack enable && corepack prepare pnpm@9 --activate`)
- Git

## Install

```bash
pnpm install
```

`pnpm install` triggers `lefthook install` automatically (via the `prepare` script), wiring git hooks.

## Build

```bash
pnpm build
```

Outputs static site to `./dist`.

```bash
pnpm preview
```

Serves `./dist` at <http://localhost:4321> for local prod-build verification.

## Develop

```bash
pnpm dev
```

Astro dev server with HMR at <http://localhost:4321>.

## Test

```bash
pnpm test         # Vitest unit tests
pnpm test:e2e     # Playwright smoke (auto builds + serves)
pnpm validate     # full pipeline: check + lint + test + build + e2e
```

`pnpm validate` is the canonical "ship-ready" gate. Run it before pushing if you want to know in advance whether the pre-push hook will pass.

## Deploy

Push to `main`. The `deploy.yml` GitHub Actions workflow builds and publishes to GitHub Pages.

To rollback: `git revert <bad-commit>` on `main` and push. The same workflow runs and republishes the prior good state.

The `master` branch (legacy v1 deploy target) is no longer used. Pages source is set to "GitHub Actions" in repo settings.

## Validate (after a deploy)

1. Check the [Actions tab](https://github.com/spanishgum/spanishgum.github.io/actions) for green checkmarks on the latest `Deploy` run.
2. Visit <https://spanishgum.github.io>. GitHub Pages CDN can serve stale HTML for ~10 minutes; if you see the old version, wait or hard-refresh.
3. Confirm `pnpm validate` runs clean from a fresh clone.

## Git hooks (lefthook)

Configured in `lefthook.yml`. Two stages:

- **pre-commit:** Biome auto-formats and lints staged files; auto-formatted changes are re-staged into the commit.
- **pre-push:** Full `pnpm validate` runs. Push is blocked on any failure.

Bypass only with explicit `--no-verify`. Don't.

If the hook ever doesn't fire (e.g. after a fresh clone where you skipped install), run `pnpm exec lefthook install`.

## Troubleshooting

**Pre-push fails with type errors.** Run `pnpm check` and fix what it reports.

**Playwright tests fail in CI but pass locally.** Browser binaries differ. Re-run; if it persists, check `.github/workflows/ci.yml` for the `playwright install` step.

**Tailwind classes not in output.** Tailwind v4 scans imported source files. Ensure `src/styles/global.css` is imported by some page or layout.

**`prepare` script doesn't run.** It runs after every `pnpm install`, including with `--frozen-lockfile`. The only ways to suppress it are `pnpm install --ignore-scripts` or `NODE_ENV=production`. If hooks aren't installed locally, run `pnpm exec lefthook install` directly.

**Pre-commit didn't catch a bad `.astro` file.** The pre-commit Biome glob excludes `.astro` (Biome's Astro lint support is partial). Astro files are validated at pre-push by `astro check` inside `pnpm validate`. This is intentional, not an oversight.

## Adding a blog post (skeleton)

> Full content workflow lives in sub-project 3. For now, the file structure:

Create `src/content/posts/<slug>.mdx`:

```mdx
---
title: "Post title"
date: 2026-05-02
description: "One-line description."
tags: ["tag1"]
---

Post body in MDX.
```

`pnpm dev` will hot-reload it at `http://localhost:4321/posts/<slug>/`.
