# spanishgum.github.io v2 Framework Baseline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a modern Astro 6 site at `spanishgum.github.io` with full lint/test/build/deploy pipeline and git-hook enforcement, replacing the obsolete react-static v1.

**Architecture:** Astro 6 SSG with TypeScript strict, Tailwind v4 via Vite plugin, MDX content collections, Biome for lint+format, Vitest + Playwright for tests, lefthook for git hooks, GitHub Actions for CI + Pages deploy. Orphan `main` branch holds v2; `legacy/v1` tag preserves v1.

**Tech Stack:** Astro 6, TypeScript 5, Tailwind 4, MDX, Vitest, Playwright, Biome, lefthook, pnpm 9, Node 22, GitHub Actions, GitHub Pages.

**Source spec:** [`docs/superpowers/specs/2026-05-02-framework-baseline-design.md`](../specs/2026-05-02-framework-baseline-design.md)

**Working directory:** `/Users/spanishgum/workplace/personal/spanishgum.github.io`

---

## Phase 0 — Repo reset (high-stakes; supervisor only)

### Task 0.1: Tag legacy and create orphan main

**Files:**
- Touch only git refs and working tree; no file edits.

**Important:** This task changes branch state on the remote (pushing a tag, pushing an orphan branch). Confirm with the user before pushing. Do NOT delete `dev` or `master` in this task — that happens in a follow-up after v2 deploys are confirmed stable.

- [ ] **Step 1: Verify clean state**

```bash
cd /Users/spanishgum/workplace/personal/spanishgum.github.io
git status
git log --oneline -3
```
Expected: on branch `dev`, working tree clean, latest commit is the spec self-review fix (`b7ac021` or similar).

- [ ] **Step 2: Tag legacy/v1**

```bash
git tag -a legacy/v1 -m "v1 site final state (react-static + 2 blog posts, 2019-2021)"
```

- [ ] **Step 3: Push tag to origin**

```bash
git push origin legacy/v1
```
Expected: `* [new tag] legacy/v1 -> legacy/v1`

- [ ] **Step 4: Create orphan main branch**

```bash
git checkout --orphan main
git rm -rf .
```
Expected: working tree empty (except `.git/`); branch is `main` with no parent commits.

- [ ] **Step 5: Carry over the spec doc from legacy/v1**

```bash
mkdir -p docs/superpowers/specs docs/superpowers/plans
git checkout legacy/v1 -- docs/superpowers/specs/2026-05-02-framework-baseline-design.md
cp docs/superpowers/specs/2026-05-02-framework-baseline-design.md /tmp/spec-backup.md
```
The plan file (this document) was authored on `dev`; recreate it on `main` from the same source — copy from the legacy tag if it was committed there:

```bash
# If this plan was committed to dev/legacy/v1 before the reset, also pull it across:
git checkout legacy/v1 -- docs/superpowers/plans/2026-05-02-framework-baseline.md 2>/dev/null || \
  echo "Plan not in legacy; will be re-created or carried in later."
```

- [ ] **Step 6: Add minimal .gitignore so the empty initial commit isn't actually empty**

Create `.gitignore`:

```gitignore
# dependencies
node_modules/
.pnpm-store/

# build output
dist/
.astro/

# test output
coverage/
playwright-report/
test-results/
.vitest/

# editor / OS
.DS_Store
.idea/
*.swp

# env
.env
.env.local
.env.*.local
```

- [ ] **Step 7: Initial commit**

```bash
git add .gitignore docs/superpowers/specs/ docs/superpowers/plans/ 2>/dev/null
git commit -m "chore: v2 fresh start

Orphan main branch for the v2 site. Carries over the framework
baseline spec (and plan, if present) from legacy/v1.

The previous site lives at tag legacy/v1.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

- [ ] **Step 8: Push orphan main to origin (CONFIRM WITH USER FIRST)**

```bash
git push -u origin main
```
Expected: `* [new branch]      main -> main`. New default-branch swap should be made by the user via repo settings later (not this task).

**Verification:** `git log main --oneline` shows exactly one commit. `git log legacy/v1 --oneline | wc -l` shows the previous v1 history is preserved.

---

## Phase 1 — Astro scaffold

### Task 1.1: Initialize pnpm + Astro 6 + dependencies

**Files:**
- Create: `package.json`, `pnpm-lock.yaml`, `.nvmrc`, `.node-version`, `astro.config.mjs`, `tsconfig.json`, `src/env.d.ts`
- Create: skeleton `src/pages/index.astro`

- [ ] **Step 1: Pin Node version**

Create `.nvmrc`:
```
22
```

Create `.node-version`:
```
22
```

- [ ] **Step 2: Initialize pnpm + Astro**

```bash
# Verify Node 22
node -v
# Expected: v22.x
```

```bash
corepack enable
corepack prepare pnpm@9 --activate
pnpm init
```

Edit the generated `package.json` minimally to set:
```json
{
  "name": "spanishgum-github-io",
  "version": "2.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=22"
  },
  "packageManager": "pnpm@9.15.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

- [ ] **Step 3: Install Astro 6 and core integrations**

```bash
pnpm add -D astro@^6 @astrojs/check typescript@^5
```
Expected: installs Astro 6 (>=6.2.1) and the TypeScript checker.

- [ ] **Step 4: Create astro.config.mjs**

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://spanishgum.github.io',
  base: '/',
});
```

- [ ] **Step 5: Create tsconfig.json (extends Astro strictest)**

```json
{
  "extends": "astro/tsconfigs/strictest",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

- [ ] **Step 6: Create src/env.d.ts**

```typescript
/// <reference types="astro/client" />
```

- [ ] **Step 7: Create skeleton src/pages/index.astro**

```astro
---
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>spanishgum</title>
  </head>
  <body>
    <h1>v2 under construction</h1>
  </body>
</html>
```

- [ ] **Step 8: Verify build works**

```bash
pnpm build
```
Expected: build succeeds, `dist/index.html` created.

```bash
pnpm preview &
sleep 2
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/
kill %1
```
Expected: `200`.

- [ ] **Step 9: Commit**

```bash
git add .nvmrc .node-version package.json pnpm-lock.yaml astro.config.mjs tsconfig.json src/
git commit -m "feat: scaffold Astro 6 + TypeScript strict

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 1.2: Add Tailwind v4

**Files:**
- Modify: `astro.config.mjs`, `package.json` (via install)
- Create: `src/styles/global.css`
- Modify: `src/pages/index.astro` (import global.css)

- [ ] **Step 1: Install Tailwind v4 + Vite plugin**

```bash
pnpm add -D tailwindcss@^4 @tailwindcss/vite@^4
```

- [ ] **Step 2: Update astro.config.mjs**

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://spanishgum.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 3: Create src/styles/global.css**

```css
@import "tailwindcss";
```

- [ ] **Step 4: Update src/pages/index.astro to use Tailwind**

```astro
---
import '../styles/global.css';
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>spanishgum</title>
  </head>
  <body class="bg-neutral-50 text-neutral-900 font-sans">
    <main class="max-w-2xl mx-auto p-8">
      <h1 class="text-3xl font-semibold">v2 under construction</h1>
    </main>
  </body>
</html>
```

- [ ] **Step 5: Verify build with Tailwind classes**

```bash
pnpm build
grep -q "max-w-2xl" dist/index.html
```
Expected: exit 0 (Tailwind class present in output).

- [ ] **Step 6: Commit**

```bash
git add astro.config.mjs package.json pnpm-lock.yaml src/styles/global.css src/pages/index.astro
git commit -m "feat: add Tailwind v4 via Vite plugin

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 1.3: Add MDX + content collections

**Files:**
- Modify: `astro.config.mjs`, `package.json` (via install)
- Create: `src/content.config.ts`
- Create: `src/content/posts/.gitkeep`
- Create: `src/layouts/Base.astro`
- Create: `src/pages/posts/index.astro`
- Create: `src/pages/posts/[...slug].astro`

- [ ] **Step 1: Install MDX integration**

```bash
pnpm add -D @astrojs/mdx@^5
```

(`@astrojs/mdx@^4` peers to Astro 5; v5+ is required for Astro 6.)

- [ ] **Step 2: Update astro.config.mjs**

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://spanishgum.github.io',
  base: '/',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 3: Create content collection schema**

`src/content.config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
```

- [ ] **Step 4: Create empty posts directory placeholder**

```bash
mkdir -p src/content/posts
touch src/content/posts/.gitkeep
```

- [ ] **Step 5: Create src/layouts/Base.astro**

```astro
---
interface Props {
  title: string;
}
const { title } = Astro.props;
import '../styles/global.css';
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
  </head>
  <body class="bg-neutral-50 text-neutral-900 font-sans">
    <main class="max-w-2xl mx-auto p-8">
      <slot />
    </main>
  </body>
</html>
```

- [ ] **Step 6: Refactor index.astro to use Base layout**

```astro
---
import Base from '../layouts/Base.astro';
---
<Base title="spanishgum">
  <h1 class="text-3xl font-semibold">v2 under construction</h1>
  <p class="mt-4 text-neutral-600">Pipeline first; pretty later.</p>
</Base>
```

- [ ] **Step 7: Create src/pages/posts/index.astro**

```astro
---
import { getCollection } from 'astro:content';
import Base from '../../layouts/Base.astro';

const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
);
---
<Base title="posts — spanishgum">
  <h1 class="text-3xl font-semibold">posts</h1>
  {posts.length === 0 ? (
    <p class="mt-4 text-neutral-600">No posts yet. Coming soon.</p>
  ) : (
    <ul class="mt-6 space-y-3">
      {posts.map((post) => (
        <li>
          <a href={`/posts/${post.id}/`} class="underline">{post.data.title}</a>
          <span class="text-neutral-500 text-sm ml-2">
            {post.data.date.toISOString().slice(0, 10)}
          </span>
        </li>
      ))}
    </ul>
  )}
</Base>
```

- [ ] **Step 8: Create src/pages/posts/[...slug].astro**

```astro
---
import { getCollection, render } from 'astro:content';
import Base from '../../layouts/Base.astro';

export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
<Base title={`${post.data.title} — spanishgum`}>
  <article class="prose">
    <h1 class="text-3xl font-semibold">{post.data.title}</h1>
    <p class="text-neutral-500 text-sm mt-1">
      {post.data.date.toISOString().slice(0, 10)}
    </p>
    <div class="mt-6">
      <Content />
    </div>
  </article>
</Base>
```

- [ ] **Step 9: Verify build**

```bash
pnpm build
ls dist/posts/index.html
```
Expected: `dist/posts/index.html` exists.

- [ ] **Step 10: Commit**

```bash
git add astro.config.mjs package.json pnpm-lock.yaml src/
git commit -m "feat: add MDX integration and content collection scaffold

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Phase 2 — Quality tooling

### Task 2.1: Biome lint + format

**Files:**
- Create: `biome.json`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Install Biome**

```bash
pnpm add -D --save-exact @biomejs/biome@^1
```

- [ ] **Step 2: Create biome.json**

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": true,
    "ignore": ["dist/**", ".astro/**", "node_modules/**", "playwright-report/**", "test-results/**"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "always",
      "trailingCommas": "es5"
    }
  },
  "overrides": [
    {
      "include": ["*.astro"],
      "linter": { "enabled": false }
    }
  ]
}
```

Biome doesn't yet handle `.astro` files for linting; we disable lint there and rely on `astro check` for them.

- [ ] **Step 3: Add Biome scripts to package.json**

Edit `package.json` `scripts` section:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "lint": "biome check .",
    "format": "biome format --write ."
  }
}
```

- [ ] **Step 4: Run format and verify clean**

```bash
pnpm format
pnpm lint
```
Expected: lint reports no errors.

- [ ] **Step 5: Commit**

```bash
git add biome.json package.json pnpm-lock.yaml src/ astro.config.mjs
git commit -m "feat: add Biome for lint and format

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 2.2: Vitest unit tests

**Files:**
- Create: `vitest.config.ts`
- Create: `tests/unit/sanity.test.ts`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Install Vitest**

```bash
pnpm add -D vitest@^4
```

(`vitest@^2` pulls in Vite 5 as a regular dep, creating a dual-Vite install alongside Astro's Vite 7. v4 makes Vite a peer and requires Vite 6+, deduplicating to Astro's Vite 7.)

- [ ] **Step 2: Create vitest.config.ts**

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'node',
  },
});
```

- [ ] **Step 3: Create a sanity unit test**

`tests/unit/sanity.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';

describe('sanity', () => {
  it('confirms the test runner runs', () => {
    expect(1 + 1).toBe(2);
  });
});
```

This is a placeholder; real unit tests come with content/util code in later sub-projects.

- [ ] **Step 4: Add test script**

Edit `package.json`:

```json
{
  "scripts": {
    "test": "vitest run"
  }
}
```

(Merge with existing scripts.)

- [ ] **Step 5: Verify**

```bash
pnpm test
```
Expected: 1 test passed.

- [ ] **Step 6: Commit**

```bash
git add vitest.config.ts tests/unit/sanity.test.ts package.json pnpm-lock.yaml
git commit -m "feat: add Vitest unit test scaffold

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 2.3: Playwright smoke test

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/e2e/smoke.spec.ts`
- Modify: `package.json`, `.gitignore`

- [ ] **Step 1: Install Playwright**

```bash
pnpm add -D @playwright/test@^1
pnpm exec playwright install --with-deps chromium
```

- [ ] **Step 2: Create playwright.config.ts**

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4321',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
  webServer: {
    command: 'pnpm preview --host 127.0.0.1',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
```

- [ ] **Step 3: Create the smoke test**

`tests/e2e/smoke.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test('home page loads with no console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));

  const response = await page.goto('/');
  expect(response?.status()).toBe(200);

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  expect(errors).toEqual([]);
});

test('posts index loads', async ({ page }) => {
  const response = await page.goto('/posts/');
  expect(response?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('posts');
});
```

- [ ] **Step 4: Add e2e script and validate composition**

Edit `package.json`:

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "validate": "pnpm check && pnpm lint && pnpm test && pnpm build && pnpm test:e2e"
  }
}
```

- [ ] **Step 5: Build first, then run e2e to verify**

```bash
pnpm build
pnpm test:e2e
```
Expected: 2 tests passed.

- [ ] **Step 6: Verify the full validate pipeline**

```bash
pnpm validate
```
Expected: every step passes; ends with Playwright success.

- [ ] **Step 7: Commit**

```bash
git add playwright.config.ts tests/e2e/ package.json pnpm-lock.yaml
git commit -m "feat: add Playwright smoke test and pnpm validate pipeline

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Phase 3 — Git hooks

### Task 3.1: lefthook with pre-commit and pre-push

**Files:**
- Create: `lefthook.yml`
- Modify: `package.json` (lefthook dev dep + postinstall hook)

- [ ] **Step 1: Install lefthook as dev dep (Node binary path is most portable for CI)**

```bash
pnpm add -D lefthook@^1
```

- [ ] **Step 2: Create lefthook.yml**

```yaml
pre-commit:
  parallel: true
  commands:
    biome:
      glob: "*.{ts,tsx,js,jsx,json,md,mdx}"
      run: pnpm biome check --write --no-errors-on-unmatched {staged_files}
      stage_fixed: true

pre-push:
  commands:
    validate:
      run: pnpm validate
```

`stage_fixed: true` re-stages files that Biome auto-formatted so the commit captures the fixes. `--no-errors-on-unmatched` prevents Biome failing when no staged files match its supported types.

- [ ] **Step 3: Add postinstall to install hooks automatically**

Edit `package.json`:

```json
{
  "scripts": {
    "prepare": "lefthook install"
  }
}
```

- [ ] **Step 4: Install hooks now**

```bash
pnpm exec lefthook install
ls -la .git/hooks/pre-commit .git/hooks/pre-push
```
Expected: both hook files exist and are lefthook shims.

- [ ] **Step 5: Verify pre-commit auto-fixes (no real commit)**

Create a deliberately ugly staged file and run the hook directly via lefthook:

```bash
printf 'const  x   =  1\n' > src/temp.ts
git add src/temp.ts
pnpm exec lefthook run pre-commit
git diff --cached -- src/temp.ts | grep -E "^\+const x = 1;"
```
Expected: the diff shows the formatted line `const x = 1;` — Biome auto-fixed and lefthook re-staged.

Cleanup:

```bash
git reset HEAD -- src/temp.ts
rm -f src/temp.ts
```

- [ ] **Step 6: Verify pre-push blocks broken code (no real push)**

Stage a type error and run the hook directly:

```bash
printf 'const n: number = "not a number";\n' > src/temp.ts
git add src/temp.ts
pnpm exec lefthook run pre-push
echo "exit=$?"
```
Expected: `lefthook run pre-push` exits non-zero because `pnpm validate` fails. `exit=` line shows a non-zero number.

Cleanup:

```bash
git reset HEAD -- src/temp.ts
rm -f src/temp.ts
```

- [ ] **Step 7: Commit**

```bash
git add lefthook.yml package.json pnpm-lock.yaml
git commit -m "feat: enforce build and tests via lefthook hooks

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Phase 4 — CI/CD workflows

### Task 4.1: CI workflow

**Files:**
- Create: `.github/workflows/ci.yml`

- [ ] **Step 1: Create ci.yml**

```yaml
name: CI

on:
  pull_request:
  push:
    branches-ignore:
      - main

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      - run: pnpm install --frozen-lockfile

      - run: pnpm exec playwright install --with-deps chromium

      - run: pnpm validate
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: add validate workflow for PRs and feature branches

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

- [ ] **Step 3: Verify CI fails on a broken commit (acceptance criterion #5)**

This is the spec's explicit "CI breaks the build on bad code" check. Run AFTER Task 6.1 has pushed `main` and the workflows exist on origin.

```bash
git checkout -b ci-break-test
printf 'const n: number = "not a number";\n' > src/temp.ts
git add src/temp.ts
git commit -m "test: deliberate break (will revert)" --no-verify
git push -u origin ci-break-test
gh run watch
```
Expected: CI workflow runs, `pnpm validate` fails, run ends red.

Cleanup:

```bash
git checkout main
git push origin --delete ci-break-test
git branch -D ci-break-test
```

This is a one-time verification, not part of normal workflow.

---

### Task 4.2: Deploy workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create deploy.yml**

```yaml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      - run: pnpm install --frozen-lockfile

      - run: pnpm build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Pages deploy workflow

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Phase 5 — Documentation

### Task 5.1: README.md

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write README.md**

```markdown
# spanishgum.github.io

[![CI](https://github.com/spanishgum/spanishgum.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/spanishgum/spanishgum.github.io/actions/workflows/ci.yml)
[![Deploy](https://github.com/spanishgum/spanishgum.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/spanishgum/spanishgum.github.io/actions/workflows/deploy.yml)

Personal site of Adam (spanishgum). Software engineer at Amazon, Seattle. Opinions my own.

Live: <https://spanishgum.github.io>

Built with Astro 6, TypeScript, Tailwind v4. Deployed to GitHub Pages via Actions.

See [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) for build, test, deploy, and validate workflow.

The previous v1 site (react-static, 2019–2021) is preserved at the `legacy/v1` git tag.
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 5.2: docs/DEVELOPMENT.md

**Files:**
- Create: `docs/DEVELOPMENT.md`

- [ ] **Step 1: Write DEVELOPMENT.md**

````markdown
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

**`prepare` script doesn't run.** It's only triggered by `pnpm install`, not `pnpm install --prod` or in CI when using `--frozen-lockfile` in some contexts. CI installs the hooks fresh; local devs running `pnpm install` get them automatically.

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
````

- [ ] **Step 2: Commit**

```bash
git add docs/DEVELOPMENT.md
git commit -m "docs: add development guide

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 5.3: CLAUDE.md

**Files:**
- Create: `CLAUDE.md`

- [ ] **Step 1: Write CLAUDE.md**

```markdown
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
```

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: add project-level CLAUDE.md

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Phase 6 — Cutover and verification

### Task 6.1: Push main and verify CI

**Files:** none

- [ ] **Step 1: Final local validate**

```bash
pnpm validate
```
Expected: every stage passes.

- [ ] **Step 2: Push main (CONFIRM WITH USER FIRST IF NOT YET PUSHED)**

```bash
git push -u origin main
```

- [ ] **Step 3: Verify CI**

CI runs only on PRs and non-main pushes; on a direct push to `main` only `deploy.yml` fires. Watch the Actions tab:

```bash
gh run list --workflow=deploy.yml --limit 1
gh run watch
```

- [ ] **Step 4: Once green, verify the live site**

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://spanishgum.github.io/
curl -s -o /dev/null -w "%{http_code}\n" https://spanishgum.github.io/posts/
```
Expected: `200` for both. (Allow ~10 min for CDN propagation if first deploy.)

---

### Task 6.2: Switch GitHub Pages source

**Files:** none — repo settings change.

This requires Adam, not Claude — Pages source change is a settings action that should be made by the repo owner.

- [ ] **Step 1: Adam changes repo settings**

Settings → Pages → Source: **GitHub Actions** (was: Deploy from a branch).

- [ ] **Step 2: Trigger a fresh deploy and confirm**

```bash
gh workflow run deploy.yml --ref main
gh run watch
```

- [ ] **Step 3: Confirm live**

```bash
curl -s https://spanishgum.github.io/ | grep -q "v2 under construction"
```
Expected: exit 0.

- [ ] **Step 4: Switch the repo's default branch**

Adam: Settings → Branches → Default branch: change from `dev` to `main`.

- [ ] **Step 5: Sub-project 1 done**

Confirm acceptance criteria from the spec:

- `legacy/v1` tag exists on origin: `git ls-remote --tags origin | grep legacy/v1`
- `main` branch is the new orphan: `git log main --oneline | wc -l` ≈ number of plan commits
- Live site returns 200 with no console errors (Playwright smoke covers this)
- Pre-commit and pre-push verified during Task 3.1
- README, DEVELOPMENT.md, CLAUDE.md exist

`master` and `dev` branches stay alive for ~1 week as fallback. Schedule a follow-up to delete them; this is intentionally not in this plan.

---

## Out of scope (sub-projects 2 and 3)

- Visual design, content, photo, bio, whimsy
- Migration of the two 2021 posts
- Sunday content routine (scheduled task + mobile approval)
