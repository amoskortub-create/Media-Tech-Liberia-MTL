# Media Tech Liberia

A marketing website for Media Tech Liberia (MTL), a media and technology company in Liberia.

## Run & Operate

- `artifacts/mtl-website: web` — main website workflow (port 18295, preview at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env (API server only): `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Website: React + Vite, Tailwind CSS, Framer Motion, shadcn/ui components
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod, drizzle-zod
- API codegen: Orval (from OpenAPI spec)

## Where things live

- `artifacts/mtl-website/` — React/Vite marketing website
- `artifacts/api-server/` — Express API backend
- `lib/db/` — Drizzle schema and DB client
- `lib/api-spec/` — OpenAPI spec (source of truth for API contracts)
- `lib/api-zod/` — generated Zod schemas
- `lib/api-client-react/` — generated React Query hooks

## Architecture decisions

- Website uses path-based routing; `BASE_PATH=/` and `PORT=18295` must be set when starting the dev server
- The vite.config.ts requires both `PORT` and `BASE_PATH` env vars at startup — they're set in the workflow command
- API server reads `PORT` at startup and will throw if not provided

## Product

MTL company marketing site with sections: Hero, Metrics, Capabilities, Services, ViMore, ScholarNet, Security, DeliveryWorkflow, Leadership, and Footer. Includes WhatsApp contact button and Privacy Policy / Terms of Service modals.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Always include `PORT=18295 BASE_PATH=/` in the website dev command (managed artifact workflows inject these automatically, but configureWorkflow does not)
- API server requires `DATABASE_URL` secret — not needed to run the website alone

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
