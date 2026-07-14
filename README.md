# Hüseyin Sercan Gündoğan — Portfolio

Personal portfolio for international frontend / software / product engineering roles.

Stack: **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide**

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run format` | Prettier write |
| `npm run format:check` | Prettier check |

## Project structure

```
src/
  app/                 # Routes (home, work, about, experience, contact)
  components/          # Reusable UI
  content/             # Structured portfolio data
  lib/                 # SEO helpers, utilities
public/
  images/projects/     # Screenshots / placeholders
  resume.pdf           # Replace with your English CV
```

## Content editing

Portfolio copy lives in TypeScript data files — edit these instead of hunting through components:

- `src/content/site.ts` — name, nav, social links, resume URL
- `src/content/projects.ts` — projects and case studies
- `src/content/experience.ts` — timeline, about, education, achievements
- `src/content/skills.ts` — skill groups

Environment overrides (see `.env.example`):

- `NEXT_PUBLIC_SITE_URL` — canonical production URL
- `NEXT_PUBLIC_RESUME_URL` — resume PDF path or absolute URL
- `NEXT_PUBLIC_CHROME_WEB_STORE_URL` — Rewordly Chrome Web Store listing

## Adding a new project

1. Add a `Project` object to `src/content/projects.ts`.
2. Set `featured: true` and `featuredOrder` if it should appear in Selected work.
3. Add images under `public/images/projects/<slug>/` and reference them in `images[]`.
4. Case study route is generated automatically at `/work/<slug>`.

## Replacing screenshots

Placeholder SVGs are clearly labeled. Replace files in place (same paths) or update `images[].src` in `projects.ts`.

Suggested finals:

- Rewordly: selection UI, popup, rewrite modal, grammar check
- Rewordly Web: marketing homepage, dashboard
- Sociality.io: **public** marketing visuals only (no proprietary/internal screens)
- Jobswire: optional architecture/UI mock (product never released)

Preferred aspect ratio: **16:10**.

## Deployment

Recommended: **Vercel**

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Set env vars from `.env.example`.
4. Deploy.

SEO included: metadata, Open Graph, Twitter cards, canonical URLs, `sitemap.xml`, `robots.txt`, Person JSON-LD.

## Missing assets checklist

See [MISSING_ASSETS.md](./MISSING_ASSETS.md).
