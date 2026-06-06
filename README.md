# Rootwork Energy — website

Operator-led IPP site. Next.js (App Router), no dependencies beyond Next/React.
Charcoal base, single logo-green accent, Georgia serif headlines over a system
sans body. Real field photography, contained for sharpness.

## Pages
- `/` — home (hero, what-we-do, capability teaser, contact)
- `/about` — company, approach, why operator-led
- `/capabilities` — offerings across the asset lifecycle, with photos
- `/contact` — direct contact

## Run locally
```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Where things live
| File | Purpose |
|------|---------|
| `app/site-config.js` | **Email, nav links, and all capability copy** — edit content here |
| `app/page.js` | Home page |
| `app/about/page.js`, `app/capabilities/page.js`, `app/contact/page.js` | Interior pages |
| `app/components/Nav.js`, `app/components/Footer.js` | Shared nav + footer |
| `app/globals.css` | Design tokens (top) + all styling |
| `app/layout.js` | Metadata, Open Graph, wraps nav/footer |
| `public/photos/` | Site photography |
| `public/wordmark-light.png` / `wordmark-dark.png` | Transparent wordmarks |

**Change the email everywhere:** one line in `app/site-config.js` (`EMAIL`).
**Edit capability text/photos:** the `CAPABILITIES` array in `app/site-config.js`.

## Deploy — GitHub Pages (free, static)

This site builds to a static export (`output: "export"`) and ships free on GitHub
Pages. A workflow at `.github/workflows/deploy.yml` builds and deploys on every
push to `main`.

1. Repo must be **public** (Pages is free on public repos).
2. **Settings → Pages → Source: GitHub Actions.**
3. Push to `main` → the workflow builds and deploys automatically.
4. **Settings → Pages → Custom domain:** `rootwork.energy` (a `public/CNAME`
   file is already included).
5. DNS at your registrar (Squarespace): four apex `A` records to GitHub Pages
   IPs `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`, and a `www` `CNAME` to `<your-username>.github.io`.
   **Leave MX and all TXT records untouched.**

Also deployable on Vercel/Cloudflare Pages without changes.
