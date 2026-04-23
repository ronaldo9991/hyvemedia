# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the repo root. The repo is a **pnpm workspaces** monorepo (requires Node >= 20, pnpm >= 9; `packageManager` is pinned in root `package.json`).

- `pnpm install` — install deps across the workspace.
- `pnpm dev` — Vite 8 dev server for `apps/web` on `http://localhost:8080` (HMR overlay disabled).
- `pnpm build` — production build of `apps/web` into `apps/web/dist/`.
- `pnpm preview` / `pnpm start` — serve the built bundle. `start` binds `0.0.0.0` on `$PORT || 4173`; `hyvemedia-production.up.railway.app` and `mirror-melrose-magic-production.up.railway.app` are allowlisted for Railway.
- `pnpm lint` — ESLint on `apps/web` (flat config, TS + React hooks). `@typescript-eslint/no-unused-vars` is off; `react-refresh/only-export-components` is a warning.
- `pnpm -C apps/web exec tsc --noEmit -p tsconfig.app.json` — full-strict typecheck of `apps/web`.
- `pnpm -C packages/ui exec tsc --noEmit` — typecheck the UI package.

To scope a task to one workspace project, use `pnpm --filter <name> <cmd>` (names: `web`, `@hyve/ui`, `@hyve/tokens`).

## Workspace layout

```
apps/
  web/                         # the marketing site (Vite + React 19 + TS)
    src/
      components/              # page sections (Hero, Why, WhatWeDo, etc.), PascalCase
      pages/                   # Index, Yellow, DeepBlue, HermesAgent, NotFound
      hooks/                   # use-mobile
      App.tsx                  # BrowserRouter + 5 routes
      main.tsx
      index.css                # imports @hyve/tokens + @theme inline block + page-only utilities
    public/                    # favicon.ico, icon.svg, og-image.png, robots.txt
    index.html
packages/
  ui/                          # 36 shadcn/ui primitives + cn() utility
    src/
      components/ui/*.tsx      # one file per primitive (accordion, dialog, button, form, …)
      lib/utils.ts             # cn()
    components.json            # shadcn config: "new-york" style, "neutral" base — run `pnpm --filter @hyve/ui dlx shadcn add X` from here
  tokens/                      # design tokens: CSS variables + theme classes + typography
    src/
      index.css                # :root vars, .theme-yellow, .theme-deep-blue, accordion keyframes, .type-* utilities
scripts/                       # Python content tooling (unrelated to the build)
tsconfig.base.json             # shared strict TS base
pnpm-workspace.yaml            # workspaces: apps/*, packages/*
.npmrc                         # shamefully-hoist=true, auto-install-peers=true
```

## Architecture

- **`apps/web/src/App.tsx`** wires `BrowserRouter` + `Routes`. Five routes: `/` → `pages/Index` (default coral theme), `/yellow` → `pages/Yellow` (golden-yellow palette), `/deep-blue` → `pages/DeepBlue` (deep blue palette), `/hermes-agent` → `pages/HermesAgent` (internal portal), catch-all `*` → `pages/NotFound`. Add new routes **above** the catch-all.
- **`pages/Index.tsx`** is the whole marketing page — it composes the section components from `components/` in a fixed vertical order (Navbar → Hero → Storytelling → Why → LogoMarquee → PublishedPhoto → WhatWeDo → HowWeWork → Promise → Join → PromisePhotos → Contact → Footer, plus a floating `WhatsAppFloat`). Section order lives here; reordering the page means editing this file. `pages/Yellow.tsx` and `pages/DeepBlue.tsx` wrap the same tree in `<div className="theme-yellow">` / `<div className="theme-deep-blue">` to retint via CSS var overrides.
- **`apps/web/src/components/*.tsx`** are the page sections — self-contained, presentational. They reference brand colors via `var(--color-orange)` etc., not Tailwind utility classes.
- **`packages/ui/src/components/ui/`** holds shadcn/ui primitives (Radix-based). None are currently imported by sections — they're staged for future use. Do not hand-edit; regenerate via `pnpm --filter @hyve/ui dlx shadcn add <name>`.
- Path alias `@/*` → `apps/web/src/*` is configured in `apps/web/tsconfig.app.json` and `apps/web/vite.config.ts`. Keep both in sync.
- Workspace imports: the app imports from `@hyve/tokens/index.css` (one entry) and `@hyve/ui/components/ui/<name>` / `@hyve/ui/lib/utils` (per-component exports).

## Styling system

- **Tailwind 4** via `@tailwindcss/vite` plugin — there is no `tailwind.config.ts`. Configuration lives in CSS: `apps/web/src/index.css` has an `@theme inline { ... }` block exposing the shadcn semantic tokens (`--color-background`, `--color-primary`, `--color-border`, …) as Tailwind utility classes. The `inline` modifier means utilities emit `color: hsl(var(--foreground))` literally, so the `.theme-yellow` / `.theme-deep-blue` CSS variable overrides still cascade at runtime.
- **Design tokens** live in `packages/tokens/src/index.css`:
  - Brand palette CSS vars: `--color-page`, `--color-text`, `--color-orange` + `--color-orange-light/dark/mid`, `--color-orange-rgb` (triplet for alpha), `--color-teal-mist`, `--color-divider`, `--color-near-black`.
  - Effect vars: `--diamond-0..5` (Join section radial), `--glow-*` (GlowBlob SVG), `--loader-*` (loader palette).
  - shadcn semantic tokens (HSL triplets): `--background`, `--foreground`, `--primary`, `--border`, etc.
  - Fonts: `--font-display`, `--font-body` (both Inter). Google Fonts loaded via `<link>` in `apps/web/index.html` (Inter, Cormorant Garamond, Outfit).
  - Theme classes: `.theme-yellow` and `.theme-deep-blue` override every orange-ish var. Wrap any subtree in `<div className="theme-yellow">` to retint.
  - Typography utilities: `.type-h1`, `.type-h2`, `.type-h3`, `.type-body-lg`, `.type-body`, `.type-nav`, `.type-caption`.
- When adding a new theme-aware color, define it as a CSS variable in **both** `:root` and every `.theme-*` block in `packages/tokens/src/index.css`. Hard-coded hex literals in section components will not respect theme switching.
- Page-specific CSS (`.section-pad`, `.container-x`, `.animate-marquee`, loader styles, `.whatwedo`) lives in `apps/web/src/index.css`.
- Tailwind content scanning: `apps/web/src/index.css` uses `@source "../../../packages/ui/src/**/*.{ts,tsx}"` so primitives' utility classes are not purged from the app bundle.
- **TypeScript is strict** (`strict: true`, `strictNullChecks: true`, `noImplicitAny: true`) in `tsconfig.base.json`. `noUnusedLocals` / `noUnusedParameters` are off.
