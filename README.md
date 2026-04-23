# mirror-melrose-magic

Marketing site for HYVE Media, structured as a pnpm workspaces monorepo.

**Stack:** Vite 8 · React 19 · TypeScript (strict) · Tailwind 4 · shadcn/ui (new-york) · Framer Motion · react-router 7.

## Develop

```bash
pnpm install
pnpm dev       # http://localhost:8080
pnpm build
pnpm lint
```

Requires Node >= 20 and pnpm >= 9 (`packageManager` pinned in root `package.json`).

## Layout

```
apps/web/          # the marketing site
packages/ui/       # shadcn/ui primitives + cn()
packages/tokens/   # CSS design tokens, theme classes, typography utilities
scripts/           # Python content tooling
```

Section order is controlled by `apps/web/src/pages/Index.tsx`. See `CLAUDE.md` for the full architecture and styling conventions.
