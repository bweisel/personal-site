# Agent Guide (Nuxt 3 Personal Site)

This repo is a small Nuxt 3 + Tailwind CSS site. Keep changes minimal, match the existing Vue SFC style, and avoid adding heavy tooling unless the task requires it.

## Stack / Layout

- Framework: Nuxt 3 (Vue 3) (`nuxt.config.ts`, `app.vue`, `pages/`)
- Styling: Tailwind CSS + PostCSS (`tailwind.config.js`, `assets/css/main.css`)
- Components: auto-registered from `components/`
- Generated dirs (do not edit/commit): `.nuxt/`, `.output/`, `dist/`, `.data/`, `.nitro/` (see `.gitignore`)

## Commands

Preferred package manager: pnpm (repo has `.npmrc` tuned for pnpm). No lockfile is committed, so be consistent within a change.

- Install
  - `pnpm install`
  - `npm install`
  - `yarn install`
  - `bun install`
- Dev server
  - `pnpm dev` (or `npm run dev`) -> `http://localhost:3000`
- Production build
  - `pnpm build` (or `npm run build`)
- Static generate
  - `pnpm generate` (or `npm run generate`)
- Preview built app
  - `pnpm preview` (or `npm run preview`)

### Typecheck

No dedicated script is defined, but Nuxt ships `nuxi`:

- `npx nuxi typecheck`

### Lint / Format

No ESLint/Prettier configuration or scripts exist in this repo.

- If you introduce a lint/format tool, add it intentionally and document new scripts in `package.json`.
- Until then, follow the established formatting conventions in existing files.

### Tests (and Running a Single Test)

There is currently no test framework configured and no `*.test.*` / `*.spec.*` files.

If/when tests are added, these are the common single-test commands to use:

- Vitest
  - Run one file: `npx vitest run path/to/foo.test.ts`
  - Run one test by name: `npx vitest run -t "test name substring"`
- Jest
  - Run one file: `npx jest path/to/foo.test.ts`
  - Run one test by name: `npx jest -t "test name substring"`
- Playwright
  - One file: `npx playwright test path/to/spec.spec.ts`
  - One test by title grep: `npx playwright test -g "title substring"`

## Cursor / Copilot Rules

- No Cursor rules found (`.cursor/rules/` or `.cursorrules` not present).
- No Copilot instructions found (`.github/copilot-instructions.md` not present).

## Code Style (Match Existing)

### Formatting

- Indentation: 2 spaces.
- JS/TS strings: prefer double quotes.
- Semicolons: use them (existing scripts do).
- Vue SFC structure: `<template>` then `<script setup>`; keep a blank line between blocks.

### Imports

- Repo is ESM (`"type": "module"` in `package.json`): use `import` / `export`, not `require`.
- Prefer Nuxt auto-imports for Vue/Nuxt APIs (`ref`, `computed`, `useHead`, `useSeoMeta`, etc.).
- Only import from external packages when required (example: `@heroicons/vue/24/solid`).
- Avoid unused imports; keep imports at the top of the `<script setup>` block.
- Use Nuxt path aliases when importing local code: prefer `~/`.

### Vue / Nuxt Conventions

- Prefer `<script setup>` and Composition API.
- Keep components presentational and small; push page-level data/SEO to `pages/*`.
- Props follow existing runtime pattern:

```vue
<script setup>
const props = defineProps({
  title: { type: String, required: true },
});
const { title } = props;
</script>
```

- When adding external links, follow existing `NuxtLink` usage and include `target="_blank"`.
  - Security note: add `rel="noopener noreferrer"` for new external links.

### Types

- Current SFCs are plain JS; add TypeScript only when it materially improves safety/clarity.
- If you introduce `lang="ts"`, type props explicitly (avoid `Object` where practical):

```ts
import type { PropType } from "vue";

type Profile = { name: string; email: string; title: string; image: string };

const props = defineProps({
  profile: { type: Object as PropType<Profile>, required: true },
});
```

- Avoid `any`; prefer `unknown` and narrow.

### Naming

- Vue components: PascalCase filenames (`Header.vue`) and tags (`<Header />`).
- Variables/props: `camelCase`.
- Booleans: `isX`, `hasX`, `showX`.
- Event handlers: `onX` (functions) and `@click="onX"` in templates.
- Constants: `UPPER_SNAKE_CASE`.

### Tailwind / CSS

- Prefer Tailwind utility classes in templates.
- Global CSS lives in `assets/css/main.css` (already included by `nuxt.config.ts`).
- Put small custom utilities in `@layer utilities` (see `assets/css/main.css`).
- Avoid adding large scoped CSS blocks unless Tailwind cannot express the styling.

### Error Handling

- Client-side async: handle errors explicitly (show fallback UI or fail gracefully).
- Nuxt data fetching: check `error` from `useFetch`/`useAsyncData` and render a safe state.
- If adding server routes later, throw typed HTTP errors via `createError({ statusCode, statusMessage })`.

## Repo Hygiene

- Do not modify or commit generated output: `.nuxt/`, `.output/`, `dist/`.
- Do not commit secrets: `.env*` is ignored (see `.gitignore`).
- Keep `public/` assets referenced with stable paths (examples exist in `pages/index.vue`).

## Where To Look

- App shell: `app.vue`
- Main page: `pages/index.vue`
- Shared UI: `components/*.vue`
- Styling: `assets/css/main.css`, `tailwind.config.js`
- Client plugin: `plugins/cloudflare-analytics.client.js`
