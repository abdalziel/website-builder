# Red Rock Digital — Messaging Brief (remodeler/contractor positioning)

The site is being retargeted away from generic "small business" to **Front Range remodelers & contractors.**
This brief is the source of truth for all site copy. (Drives the rewrite in `app/` + `components/`.)

## Who we're talking to
Owner-operated **residential remodelers / general contractors** (and adjacent home-improvement trades) on the
Front Range — Denver, Boulder, Colorado Springs. ~$500K–$3M, mostly referral-driven, with a dated or no website,
who want **more of the right jobs without becoming a marketer.** Busy, practical, not technical. Talk to them
like you'd talk to a GC on a jobsite — plain, confident, no fluff.

## The core promise
**"More of the right jobs. None of the website hassle."**
A website that makes homeowners trust you and request a quote — built, hosted, and managed by a local guy who
answers the phone, that **you own**, with no lock-in.

## The 4 pillars (lead with these)
1. **Built for remodelers, not "everyone."** Project galleries, before-and-afters, quote/financing CTAs,
   "licensed & insured" trust signals, service-area pages, Google reviews. A site that looks like *your* work.
2. **You own it. No lock-in.** Your site, your domain, your code — cancel anytime and keep everything. (Direct
   shot at Hibu/Townsquare-style "digital landlords" who hold your site hostage.)
3. **A local human who answers the phone.** Text a change, it's handled same-day. You talk to *me*, not a call
   center with a ticket queue and 1.7-star reviews.
4. **Gets you found, books jobs.** Local SEO + Google reviews so homeowners searching "kitchen remodel near me"
   find you and trust you before they call.

## Voice
Plain-spoken, confident, contractor-friendly. No jargon, no "solutions/synergy/leverage." Colorado-local. Honest.

**USE:** remodelers, contractors, home-improvement pros, the Front Range, homeowners, jobs/quote requests,
project gallery, before-and-after, licensed & insured, you own it, no lock-in, no contract, same-day, "talk to me
not a call center," booked jobs.
**AVOID:** "small business(es)," generic agency-speak, jargon, anything faceless.

## Section-by-section direction
- **Title/metadata/OG:** "Websites for Front Range Remodelers & Contractors" (not "Colorado Web Design for Small Business"). Keywords → remodeler/contractor/home-services + Denver/Boulder/Colorado Springs.
- **Hero:** headline about winning more/better jobs (e.g., *"Your remodeling business deserves a website that books jobs."*). Subhead = built/hosted/managed for you, you own it, local. Stats = defensible promises (1–2 wk launch, same-day edits, you own it, 100% managed) — NOT fake ratings.
- **Services/pricing:** keep tiers (Basecamp/Ascent/Summit) + prices; reframe features for contractors (project gallery, quote forms, service-area/local-SEO pages, Google reviews, financing CTA).
- **Why us:** the 4 pillars, with "you own it / no lock-in" and "local human" front and center (these beat the nationals).
- **Compare:** reframe to weaponize ownership — compare vs **DIY, a national "managed" service (Hibu/Townsquare type), and a freelancer.** Hammer: lock-in vs you-own-it, call center vs a person, generic vs remodeler-built.
- **How it works:** same 3 steps, contractor language ("we talk → we build → you book jobs").
- **Portfolio:** keep the **real** Elevated Apartment Locating proof (honest — a real site designed/built/launched in 9 days; it's an apartment locator, our capability proof). Second card = CTA "Your remodeling business, next." Do NOT invent contractor clients.
- **Testimonials/proof:** keep the honest founder note + real Elevated proof. No fabricated quotes.
- **About:** Blair as the local guy who builds for Front Range contractors and actually picks up the phone.
- **FAQ (lib/faqs.ts):** rewrite for contractor questions (do I own it / what if I cancel / will it get me found / what do you need from me / how fast).
- **Contact:** "tell us about your business" → "tell us about your remodeling/contracting business."

## Hard constraints (carry forward)
- **No fabricated testimonials or unverifiable claims.** Stats are defensible promises, not measured metrics.
- Keep all the code intact — change **copy only**, never break the build (preserve JSX, imports, props, classes, types).
- Keep accessibility, SEO, and schema working; update schema *text* (description/knowsAbout/areaServed) to match.
