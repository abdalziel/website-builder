# Red Rock Digital — Go-Live Runbook

Everything below is what's left to take the site live at **redrockdigital.ai**. The code
is production-ready: `npm run build` and `npm run lint` both pass clean. Work top to bottom.

---

## 0. One detail that will bite you if you miss it

This project lives in a **subfolder** of the `website-builder` repo
(`personal/red-rock-digital`). When you create the Vercel project you **must set the
Root Directory to `personal/red-rock-digital`** — otherwise Vercel builds the wrong thing.

---

## 1. Push the code (2 min)

```bash
cd ~/Documents/Claude/website-builder
git push                      # the production branch was committed locally overnight
```

(If you want to review first: `git log --oneline -1` and `git show --stat HEAD`.)

---

## 2. Create the Vercel project (5 min)

1. vercel.com → **Add New → Project** → import `abdalziel/website-builder`.
2. **Root Directory → `personal/red-rock-digital`** (see step 0).
3. Framework preset auto-detects **Next.js** — accept defaults.
4. **Environment Variables** → add:
   - `RESEND_API_KEY` = *(copy the value from your local `.env.local` — it is intentionally
     NOT committed to the repo)*
5. **Deploy.** Wait for "Ready", then open the temporary `*.vercel.app` URL and confirm the
   site loads. The contact form won't deliver email yet — that's step 3.

---

## 3. Verify the Resend sending domain (required for the form to work) (10 min + DNS wait)

The contact form sends from `hello@redrockdigital.ai`. Resend will silently fail to deliver
until the domain is verified.

1. resend.com → **Domains → Add Domain** → `redrockdigital.ai`.
2. Resend shows **SPF + DKIM** (and optionally DMARC) DNS records. Add them at your domain
   registrar / DNS host.
3. Wait for propagation (usually minutes, up to 24–48h) and click **Verify** in Resend until
   the domain shows **Verified**.
4. Confirm `RESEND_API_KEY` in Vercel belongs to the **same Resend account** as the verified domain.

---

## 4. Point the domain at Vercel (5 min + DNS wait)

1. Vercel project → **Settings → Domains → Add** → `redrockdigital.ai` (and `www` if you want it).
2. Follow Vercel's instructions at your registrar:
   - Apex `redrockdigital.ai` → Vercel A record **76.76.21.21** (or the value Vercel shows), and/or
   - `www` → CNAME `cname.vercel-dns.com`.
3. Wait for Vercel to show the domain as **Valid Configuration** (HTTPS is automatic).

> Tip: if `redrockdigital.ai` is mid-transfer or its DNS is moving, do all DNS records
> (Resend SPF/DKIM **and** the Vercel A/CNAME) in **one sitting** so you're not waiting on
> propagation twice.

---

## 5. Smoke test the live site (10 min) — don't skip

1. Open `https://redrockdigital.ai`. Check it loads over HTTPS, logo + hero render.
2. **Submit the contact form** with real test data (your own email as the lead).
   - You should see the "We'll be in touch" success state.
   - Check **your inbox** for the confirmation email.
   - Check **hello@redrockdigital.ai** (and Resend → Emails) for the lead notification.
   - If either is missing → Resend dashboard shows the bounce/error; usually a DNS record.
3. Visit `/robots.txt` and `/sitemap.xml` — both should render.
4. Paste the URL into a share-preview debugger (e.g. LinkedIn Post Inspector, or
   opengraph.xyz) and confirm the **branded OG image** + title appear.
5. Run **Lighthouse** (Chrome DevTools) — expect strong SEO/Best-Practices/Accessibility.
6. Submit the site to **Google Search Console** (add property, submit sitemap) when ready.

---

## 6. Polish you can add anytime after launch (optional, not blockers)

These were intentionally left honest/empty rather than faked:

- **Real testimonials.** As clients give permission, add them to the array at the top of
  `components/Testimonials.tsx`. The section automatically switches from the honest
  "early days" content to a testimonial grid once that array has entries.
- **Phone number.** Adding a real, answered number to `components/Contact.tsx`,
  `components/Footer.tsx`, and the `LocalBusiness` schema in `lib/schema.ts` boosts local
  trust and SEO. (Your differentiator is "reachable humans" — a number sells that.)
- **A real headshot** in the About section if you'd prefer it over the branded strata panel.
- **Analytics.** You sell "Google Analytics setup" — add Vercel Analytics or GA4 to your own
  site. (Vercel Analytics = one component + a toggle in the dashboard.)
- **Hard numbers on the Elevated case study** (leads/bookings) if the client will share them —
  metrics convert far better than feature lists.

---

## What changed overnight (summary)

See `CHANGES.md` for the full list. Headlines: removed fabricated testimonials and
unverifiable "5★ / two years" claims; hardened the contact API (validation, HTML-escaping,
honeypot, rate limiting, error handling) and the form UX (loading/error states, accessible
labels); added full SEO/AEO infrastructure (metadata, canonical, OG image, robots, sitemap,
JSON-LD); replaced the generic logo with an on-brand red-rock mark; added security headers,
a branded 404, and accessibility fixes throughout; removed the internal `/logos` page and
dead code.
