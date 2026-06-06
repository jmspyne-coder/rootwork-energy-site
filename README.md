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

## Deploy (Vercel, via GitHub)
Push to your repo; Vercel auto-deploys on every commit. To connect the domain:
add `rootwork.energy` + `www` under **Settings → Domains**, then in Squarespace DNS
add an **A** record (`@` → `76.76.21.21`) and a **CNAME** (`www` → the value Vercel
shows). **Leave MX and all TXT records untouched** — those are your email.
