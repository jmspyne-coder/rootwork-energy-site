# Rootwork Energy — landing page

Minimal one-page site. Next.js (App Router), no external dependencies beyond
Next/React. Charcoal base, single logo-green accent, Georgia serif headlines
over a system sans body.

---

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start   # production build
```

## What's where

| File | Purpose |
|------|---------|
| `app/page.js` | All page copy + structure (hero, what-we-do, contact, footer) |
| `app/globals.css` | Design tokens (top of file) + all styling |
| `app/layout.js` | `<title>`, meta description, Open Graph, theme color |
| `public/wordmark-light.png` | Transparent wordmark (bone + green) — used on charcoal |
| `public/wordmark-dark.png` | Transparent wordmark (charcoal + green) — for light backgrounds (not used on this page, kept for reuse) |
| `app/icon.png`, `app/apple-icon.png` | Favicons |

**To edit copy:** open `app/page.js` — it's plain text.
**To edit colors:** the `:root` block at the top of `app/globals.css`.

---

## Deploy to Vercel

Pick one path. Git is cleanest for future edits.

### A) Git (recommended)
1. Create a new repo on GitHub, push this folder.
2. Vercel → **Add New… → Project** → import the repo.
3. Framework auto-detects as **Next.js**. Leave defaults. **Deploy.**

### B) Vercel CLI (no Git)
```bash
npm i -g vercel
vercel          # follow prompts, links/creates the project
vercel --prod   # promote to production
```

You'll get a `*.vercel.app` URL immediately. Add the custom domain next.

---

## Connect rootwork.energy (without touching mail)

In **Vercel → Project → Settings → Domains**, add both:
- `rootwork.energy`
- `www.rootwork.energy`

Set `rootwork.energy` as the primary; Vercel will offer to redirect `www` → apex.

Vercel then shows the exact DNS records to add. Add them wherever you manage
DNS for the domain (the Squarespace domains dashboard, since it's the back-end
registrar). They are typically:

| Type | Host / Name | Value |
|------|-------------|-------|
| `A` | `@` (apex) | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> Use whatever Vercel displays if it differs — it's authoritative.

### Do NOT change these
- **MX records** (Google Workspace mail) — leave every one untouched.
- Any **TXT** records: SPF (`v=spf1…`), DKIM, DMARC, and the Google site/domain
  verification TXT. These are all mail/verification — don't delete or edit them.

You're only **adding** one `A` and one `CNAME`. Everything else stays as-is.
DNS propagation is usually minutes, occasionally up to a few hours. Vercel
issues the HTTPS certificate automatically once records resolve.

---

## Separate, time-sensitive
There's a domain **registrant contact verification** deadline (~June 11) to
avoid suspension. That's handled in the registrar/Workspace contact settings —
unrelated to this deploy, but worth clearing this week regardless.
