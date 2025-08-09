
# SWZ — Stronger With Zo

Mobile-first marketing site + client portal for pre/postpartum PT.

## Tech
- Next.js 14 (App Router) + TypeScript
- TailwindCSS
- Supabase (auth + Postgres) — optional for MVP pages
- Prisma (schema + seed)
- Chart.js via react-chartjs-2

## Quick Start (no code knowledge)

1. **Create accounts**
   - Vercel.com (hosting)
   - Supabase.com (database & auth)

2. **Create Supabase project**
   - In Supabase, create a new project.
   - Copy **API URL** and **Anon key** from Project Settings → API.

3. **Deploy to Vercel**
   - Click "New Project" → "Import" and upload this repository ZIP.
   - Add environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase API URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
     - `SITE_URL` = your Vercel domain (update later after deploy)
     - Optional: `CALENDLY_URL`, `WHATSAPP_URL`
   - Deploy.

4. **(Optional advanced) Database & seed**
   - If you want full data features:
     - In Supabase SQL editor, create tables matching `prisma/schema.prisma`
       (or use Prisma against a separate DB).
     - Run `supabase/rls.sql` policies (edit the coach email if needed).
     - Locally, set `DATABASE_URL` to your Postgres to run `pnpm seed`.

## Default demo accounts
- **Coach:** `coach@swz.fit` (use Supabase Auth → "Invite" to send magic link)
- **Clients:** `alice@demo.com`, `beth@demo.com`

## Brand
- Yellow `#FFD400` • Black `#0B0B0B` • Off-white `#F7F7F7`

## Notes
- This MVP includes fully designed pages and skeleton portal screens.
- For production-grade CRUD (program builder, assignment, real logs), connect actions to Supabase tables following the provided schema.
- Accessibility targets: high contrast, keyboard navigable.

_Last generated: 2025-08-09T11:22:45.598021Z_
