# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun install` — install deps. This repo standardizes on **bun**; `bun.lock` is the only lockfile (no `package-lock.json`, no `bun.lockb`).
- `bun dev` — Vite dev server on `http://localhost:8080` (HMR overlay disabled).
- `bun run build` — production build. `bun run build:dev` — unminified dev-mode build that keeps the `lovable-tagger` component tagger active.
- `bun run preview` / `bun start` — serve the built `dist/` (preview binds `::` on `PORT` or `4173`; `hyvemedia-production.up.railway.app` is allowlisted).
- `bun run lint` — ESLint (flat config, TS + React hooks). Note: `@typescript-eslint/no-unused-vars` is disabled and `react-refresh/only-export-components` is a warning.
- `bun test` — Vitest (jsdom, globals on, `src/test/setup.ts` runs first, glob `src/**/*.{test,spec}.{ts,tsx}`). `bun run test:watch` for watch mode. Run one file with `bunx vitest run src/path/to/x.test.tsx`.
- Playwright config comes from `lovable-agent-playwright-config` via `playwright.config.ts`; tests use the shared fixture re-exported from `playwright-fixture.ts`.

## Architecture

Single-page marketing site (Vite + React 18 + TypeScript, SWC, Tailwind, shadcn/ui). There is essentially one page.

- `src/App.tsx` wires `QueryClientProvider` → `TooltipProvider` → both toasters (`ui/toaster` and `ui/sonner`) → `BrowserRouter`. Routes: `/` → `pages/Index` (default coral theme), `/yellow` → `pages/Yellow` (golden-yellow palette preview), catch-all `*` → `pages/NotFound`. Add new routes *above* the catch-all.
- `src/pages/Index.tsx` is the whole marketing page — it composes the section components from `src/components/` in a fixed vertical order (Navbar → Hero → Storytelling → Why → LogoMarquee → PublishedPhoto → WhatWeDo → HowWeWork → Promise → Join → PromisePhotos → Contact → Footer, plus a floating `WhatsAppFloat`). Section order lives here; reordering the page means editing this file. `pages/Yellow.tsx` is the same tree wrapped in `<div className="theme-yellow">`.
- `src/components/*.tsx` (PascalCase, non-`ui/`) are the page sections — each is a self-contained, presentational block. `src/components/ui/` is shadcn/ui primitives (Radix-based); treat those as library code and don't hand-edit them unless regenerating.
- Path alias `@/*` → `src/*` is configured in `tsconfig.json`, `vite.config.ts`, and `vitest.config.ts` — keep all three in sync if you change it. `vite.config.ts` dedupes React to avoid duplicate copies when linked.

## Styling system

- Tailwind with CSS-variable-driven tokens. Semantic shadcn tokens (`background`, `primary`, `border`, …) resolve to HSL vars declared in `src/index.css`; brand palette is also exposed as flat Tailwind colors: `page` `#f5f3eb`, `text` `#262626`, `orange` (= `var(--color-orange)`, default `#fd735d`), `orange-mid` (= `var(--color-orange-mid)`, default `#ffb3a5`), `teal-mist` `#dee7e8`, `divider` `#c9c9c9`, `near-black` `#1d1d1d`. Prefer these over raw hex.
- **Theme system**: every orange used in the site is a CSS custom property declared in `:root` in `src/index.css` — base (`--color-orange`, `--color-orange-light`, `--color-orange-dark`, `--color-orange-mid`), RGB triplets for alpha (`--color-orange-rgb`, `--color-orange-light-rgb`, `--color-orange-dark-rgb`), the 6-stop Diamond radial (`--diamond-0..5`, `--diamond-shadow-rgb`), GlowBlob SVG layers (`--glow-*`), and loader tints (`--loader-*`). Components reference these via `var(...)`; no orange hex literals remain in section components or `GlowBlob.tsx`. A `.theme-yellow` class in the same file overrides all of them with warm-golden values — wrap any subtree in `<div className="theme-yellow">` to retint. When adding a new orange-ish colour, define it as a CSS variable (in both `:root` and `.theme-yellow`) rather than hard-coding hex, or the theme-switching breaks.
- Container is centered with `2xl` max of `1320px` and zero default padding (`tailwind.config.ts`).
- Fonts: Inter (display/body) and Cormorant Garamond + Outfit are loaded from Google Fonts at the top of `src/index.css`.
- TS config is intentionally lenient (`strictNullChecks: false`, `noImplicitAny: false`, unused-var checks off). Don't re-enable these casually — existing code relies on the looseness.

## Lovable integration

Project is Lovable-generated. `lovable-tagger` runs only in `development` mode (see `vite.config.ts`) to annotate components for the Lovable editor; production builds exclude it. Playwright config + fixture come from the `lovable-agent-playwright-config` package rather than being defined locally.
