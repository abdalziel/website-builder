# Red Rock Digital — Site Upgrade Runbook

The repeatable process for upgrading a client who **already has a website**, with only **two client
touchpoints** — a 30-minute consult and a "first show" review. Everything else happens on our side.

**Core principle: their existing site is our content source.** We harvest, rebuild, and migrate; the
client barely lifts a finger.

## The two-touchpoint rule
1. **30-min consult** — confirm what we found + collect the few gaps + agree on domain access.
2. **First show** — one consolidated round of feedback + approval.

Everything else (research, build, migration, launch) is **zero client contact.**

---

## Phase 0 — Pre-consult harvest (before you ever meet; ~60–90 min, solo)
Goal: walk into the consult knowing their business better than they expect.

- [ ] **Existing site:** copy, services, service areas, hours, phone/email, team bios, testimonials, FAQs.
- [ ] **Photos:** project photos from their site + Facebook/Instagram (contractors post jobs constantly).
- [ ] **Google Business Profile:** categories, service area, hours, reviews, photos.
- [ ] **Reviews:** Google, Yelp, Angi, BBB — pull the best quotes for the new site's social proof.
- [ ] **License check:** CO contractor/trade license (a trust signal for the new site).
- [ ] **Audit the old site** (Lighthouse / PageSpeed): load time, mobile, SSL, broken things → your pitch ammo.
- [ ] **DNS audit (critical — see Phase 4):** record EVERY existing DNS record, especially **MX, SPF, DKIM,
      TXT** (their email), plus current A/CNAME, nameservers, and registrar.
- [ ] **2–3 competitor sites:** know the bar you're beating.

**Deliverable:** a **content pack** (their copy/photos/services, organized) + a **1-page audit** of what's
wrong with the current site.

> Future automation: this whole phase becomes the "intake agent" — feed it a URL + GBP, it returns the
> content pack + audit. Build it around client #5, not before.

---

## Phase 1 — The consult (Touchpoint #1, 30 min)
You're **confirming, not gathering.**
- Present the audit. Lead with the **lead-loss angle**, not features ("this slow/mobile-broken site is
  costing you calls").
- Walk the content pack: "Here's what I pulled — what's wrong or missing?" He says yep / no / dropped that.
- Collect only the **un-scrapeable**: goals, what's working/not, new services, brand preferences (or you
  decide), any must-have photos he'll send.
- **Agree the domain plan** (the one logistics item): delegate nameservers to our Cloudflare, or grant
  10-min registrar access. See Phase 4.
- Set the **first-show date** (1–2 weeks out) and confirm pricing + collect the deposit.

After this meeting you should never need to bug him except the first show.

---

## Phase 2 — Build (zero client contact)
- [ ] Pick the vertical template; drop in the content pack.
- [ ] AI-draft improved copy from his existing words + reviews + services; polish to his voice.
- [ ] Assemble the gallery from harvested photos.
- [ ] Build the **redirect map** (Phase 4): every old URL → new URL.
- [ ] Deploy to a **preview URL** (Vercel preview).
- [ ] Self-QA: mobile, speed, forms, links, content accuracy.

---

## Phase 3 — First show (Touchpoint #2)
- [ ] Send the preview link **a day ahead** so he reviews async.
- [ ] Meeting = collect **one consolidated round** of feedback + approve.
- [ ] **Scope cap:** one revision round is included; anything beyond is a change order.
- [ ] Confirm go-live date.

---

## Phase 4 — Migration & launch (the technical part — DO NOT skip a step)
This is where amateurs break things. Three rules:

### Rule 1 — NEVER break their email
- You already recorded their **MX / SPF / DKIM / TXT** records in Phase 0.
- When you take over DNS, **replicate every one of those records exactly.**
- Change ONLY the website records (the apex `@` and `www`).
- After cutover, **send a test email** to and from their domain to confirm mail still flows.

### Rule 2 — Preserve their Google rankings (301 redirects)
- An existing site has SEO equity. If URLs change without redirects, rankings tank the day you launch.
- Map every old URL → new equivalent; add a `redirects()` block (301) in `next.config.ts`.
- After launch, verify a few old URLs 301 to the right new pages.

### Rule 3 — One-time DNS delegation = zero future contact
- Cleanest: he points his **registrar nameservers to our Cloudflare** once. After that we control all DNS
  forever — no future client involvement. (Fits "you own your domain, we run the infrastructure.")
- Alternative: he makes one A/CNAME change, or grants brief registrar access.

**Launch checklist:**
- [ ] Domain on Cloudflare (NS delegated) with ALL prior records replicated (especially MX).
- [ ] Website records → Vercel; SSL active.
- [ ] 301 redirects live and verified.
- [ ] Contact form → his email (Resend), tested with a real submission.
- [ ] Email still works (send + receive test).
- [ ] Loads on mobile + desktop; old URLs redirect.

---

## Phase 5 — Post-launch (zero / low contact)
- [ ] Add to uptime monitoring.
- [ ] Send a "you're live" note + the first **site health report**.
- [ ] **Ask for the referral + testimonial** at peak happiness. For a GC: intros to his subs, suppliers,
      and a designer/realtor.
- [ ] Log actual support hours for the 90-day metrics.

---

## Why this works
2 meetings + 1 one-time DNS action = the **entire** client burden. Everything else is harvested or
automated, and bounded revisions keep the margins intact.
