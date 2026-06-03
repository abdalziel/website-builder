# Red Rock Digital — 90-Day Validation Plan

Prove (or disprove) that RRD is a real business by hand-selling **one vertical**, with hard decision
gates. **No paid ads.** Client #1 is already lined up (a contractor friend who wants an upgrade).

## The bet
- **Vertical:** Residential remodelers / general contractors — Front Range (Denver / Boulder / Colorado Springs).
- **Why this won the analysis:** highest job value ($45k+ kitchens → one lead pays for *years* of service),
  the **best referral chain of any vertical** (GC ↔ subs ↔ suppliers ↔ designers ↔ realtors), reachable
  (HBA Metro Denver ~500 members, NARI, BNI, Parade of Homes), low-maintenance sites, and an **open
  competitive lane** (far less agency-saturated than roofing / dental / med-spa / law).

## Decision gate (Day 90) — be honest with these
- Close rate **≥ 20%** of real sales conversations.
- Retainer **accepted at signup** (not "maybe later").
- Support **< 1 hr / client / month** in practice.

→ All green: scale on referrals. Any red: fix price / scope / positioning **before** scaling. Don't paper
over a miss with volume.

## Offer & pricing
- **Managed (push this — it IS the business):** setup **$999–$1,799** for a contractor build + **$125–$200/mo**
  (hosting, updates, SEO basics, reviews, monitoring). The recurring revenue is the entire financial point.
- **Build-only / handoff (premium fallback ONLY):** one-time **~$3,000–$5,000+**, no monthly. Hand off the
  repo + Vercel project + a handoff doc — "you own and run it; you'll need a developer to make changes."
  Priced **high on purpose** so it nudges toward managed and pays for the lost recurring. **Do not make this
  the default or advertise it loudly** — it drags you back into the commoditized build-shop game and kills
  your MRR and moat. (See note below.)
- **Optional middle — "managed-lite":** a small annual or low monthly that keeps us on hosting/uptime/DNS so
  the site doesn't rot and we keep the relationship + referral pipeline, while they self-edit content. Often
  a better answer than a full walk-away for "I don't want a big retainer."
- Always take a **50% deposit** to start. It validates seriousness.

## ICP (who exactly)
- Owner-operated residential remodeler / GC, ~$0.5–5M revenue, Front Range.
- Has an existing site that's dated / slow / not mobile (the upgrade sweet spot).
- Lives on lead flow; cares about being found on Google.
- The pitch math: **"one new remodel (~$45k) pays for ~20 years of our service."**

## The plan

### Weeks 0–2 — Foundations + Client #1
- Lock the ICP + the one-line pitch.
- Build the **contractor demo site** (templatized from the RRD stack) so prospects see "a site for a
  contractor exactly like you," not a generic studio.
- Run your **friend as Client #1** end-to-end via the **Upgrade Runbook** — validates the whole process on a
  friendly, paid account.
- Minimal tooling: UptimeRobot (free), a simple pipeline (spreadsheet/Notion), the content-intake form, a
  one-page case-study template.
- After his launch: **testimonial + intros** to his subs/suppliers (this seeds Weeks 2–8).

### Weeks 2–8 — Outreach engine (referrals + local presence; NO ads)
Channels, warmest first:
1. **Client #1's network** — his subs, suppliers, GC friends.
2. **BNI chapters** — GCs dominate these; visit 2–3 Front Range chapters.
3. **HBA Metro Denver / NARI / local HBAs** — events + member directories.
4. **Supplier counters** — lumber yards, tile/cabinet showrooms → relationships → referrals.
5. **Parade of Homes** — walk it, meet builders.

The pitch: lead with a **free 60-second audit** of their current site (Phase 0) → "here's what's costing you
leads" → book the consult. **Target: 15–20 real sales conversations.** Track every one.

### Weeks 4–12 — Deliver + measure
- Close **5–10 paid builds.** Run each through the Upgrade Runbook.
- **Log support hours per client** (the make-or-break number).
- After each happy launch: testimonial + referral ask. Build the case-study library.

### Day 90 — Decide
- Hit the gate → scale on referrals; plan a VA/subcontractor for builds around client ~10.
- Missed it → diagnose (positioning? price? wrong sub-niche?) and fix before scaling.

## Track these numbers (weekly)
- Conversations booked → held → **closed** (close rate).
- Setup $ collected (cash) · # on retainer · blended ARPU.
- **Support hrs / client / mo.**
- Referrals generated per client.
- Churn (from client #5 onward).

## A week in the loop (rough)
- ~5–8 hrs outreach / networking — the hard, un-fun part. **Protect this time;** it's the real bottleneck.
- ~10–15 hrs delivery (builds + migrations).
- ~2–3 hrs admin / support.
- End every happy interaction with a **referral ask.**

## Don'ts (straight from the analysis)
- No paid ads (CAC breaks the model at these prices).
- Don't work for free — friend rate is fine, but **paid + documented.**
- Don't skip the deposit.
- Don't let scope sprawl (bounded revisions; "same-day" = small edits, capped).
- **Don't make build-only the default** — it kills your moat and your MRR.
- Don't build the monitoring agent yet. **Sell first.**

## Note on the build-only tier (the honest version)
A one-time, walk-away build is a useful *tactical fallback* for a prospect who flatly refuses monthly — but
it's the opposite of your strategy. The whole analysis said the *build* is commoditized (AI builders,
Fiverr) and the durable, defensible value + recurring revenue is the **management**. Project-based work also
churns ~42% vs ~18% for retainers. And realistically, a non-technical contractor **cannot self-maintain a
Next.js/Vercel codebase** — "hand off the code" means handing off a repo they'll need a developer to touch,
so most will either let it rot (reflecting badly on your work) or come back to you anyway. So: keep it,
price it high, offer it only when someone won't do managed, and never lead with it.
