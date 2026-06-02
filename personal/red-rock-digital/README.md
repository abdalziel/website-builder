# Red Rock Digital

Marketing site for **Red Rock Digital** — a Colorado studio that builds, hosts, and manages websites for small businesses.

Live site: https://redrockdigital.ai

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- **TypeScript**
- **Resend** for contact-form email (`app/api/contact/route.ts`)
- Deployed on **Vercel**

## Local development

```bash
npm install
npm run dev          # http://localhost:3000  (or double-click "Start Red Rock Digital.command" → :3002)
```

## Build & verify before deploying

```bash
npm run build        # must compile clean
npm run lint         # must pass with 0 errors
```

## Environment variables

Create `.env.local` (gitignored) and set the same value in **Vercel → Settings → Environment Variables**:

| Variable         | Purpose                                  |
| ---------------- | ---------------------------------------- |
| `RESEND_API_KEY` | Sends contact-form notification + confirmation email via Resend |

The contact form sends from `hello@redrockdigital.ai`, so the **redrockdigital.ai domain must be verified in Resend** (SPF/DKIM DNS records) before form emails deliver.

## Project structure

```
app/
  layout.tsx              Root layout, metadata, JSON-LD, skip link
  page.tsx               Single-page composition of all sections
  api/contact/route.ts   Lead form handler (validation, escaping, honeypot, rate limit)
  robots.ts / sitemap.ts SEO crawl files
  icon.svg               Branded favicon
  opengraph-image.tsx    Generated social share image
  not-found.tsx          Branded 404
components/               Section components (Hero, Services, FAQ, Contact, …)
lib/
  site.ts                Shared site constants
  faqs.ts                FAQ content (drives both UI and FAQPage schema)
  schema.ts              JSON-LD structured data
```

## Deployment

Pushing to the connected GitHub repo auto-deploys via Vercel. See `LAUNCH.md` for the full go-live checklist (Resend domain verification, DNS, smoke tests).
