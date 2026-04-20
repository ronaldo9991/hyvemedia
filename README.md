# HYVE Media

Marketing site for HYVE Media — an onchain communications firm.

**Stack:** Vite · React 18 · TypeScript · Tailwind · shadcn/ui · Framer Motion.

## Develop

```bash
bun install
bun dev        # http://localhost:8080
bun run build  # production build
bun run lint
bun test
```

## Layout

Single-page site; section order is controlled by `src/pages/Index.tsx`. Each section is its own component in `src/components/` (see `CLAUDE.md` for conventions).
