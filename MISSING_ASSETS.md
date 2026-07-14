# Missing assets & content checklist

Provide these before treating the portfolio as production-complete.

## Required

- [ ] **English resume PDF** — replace `public/resume.pdf` (current file is a stub) or set `NEXT_PUBLIC_RESUME_URL`
- [ ] **Production site URL** — set `NEXT_PUBLIC_SITE_URL` (used for canonical links, sitemap, OG)
- [ ] **Chrome Web Store URL** for Rewordly — set `NEXT_PUBLIC_CHROME_WEB_STORE_URL` when available
- [ ] **Favicon / app icons** — add branded `icon` / `apple-icon` under `src/app/` or `public/`

## Screenshots to replace

All current project images are marked placeholders.

### Rewordly

- [ ] Extension selection + floating controls
- [ ] Popup settings
- [ ] Rewrite modal
- [ ] Grammar-check experience

### Rewordly Web

- [ ] Marketing homepage
- [ ] Dashboard / billing UI

### Sociality.io

- [ ] Approved **public** product visual
- [ ] Approved **public** mobile screens  
  Do not use proprietary or confidential UI without permission.

### Jobswire

- [ ] Optional architecture or UI visual (product was never released)

## Optional polish

- [ ] Personal / professional headshot (only if you want one)
- [ ] Open Graph share image (`opengraph-image` in App Router)
- [ ] Confirm Sociality customer/country stats still accurate for public use
- [ ] Real Chrome Web Store badge / install metrics (only if verified)

## Content already locked

- Featured: Rewordly, Rewordly Web, Sociality.io
- Secondary: Jobswire (team project, coding ownership, unreleased, no customers)
- Little Bloomer emails: omitted from Work
