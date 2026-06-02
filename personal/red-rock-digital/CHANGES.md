# Overnight production-readiness pass — change log

Driven by a 7-dimension audit (SEO/AEO, accessibility, contact-form security, content
integrity, design vs. cedardigital.ai, Next.js 16 correctness, deploy readiness), with every
finding adversarially verified before action. `npm run build` and `npm run lint` pass clean;
runtime output and the contact API were smoke-tested.

## Integrity (the most important fixes)
- **Removed fabricated testimonials.** `components/Testimonials.tsx` no longer ships fake
  "Client Name / [Business Name]" quotes. It now shows an honest founder note + the one real,
  live client (Elevated Apartment Locating), and auto-renders a real testimonial grid once you
  add verified quotes to the array at the top of the file.
- **Removed unverifiable claims.** Deleted the "5★ average client rating" stats (Hero, About)
  and the "in two years of business, no one has [left]" line (WhyUs, FAQ). Replaced with
  true, defensible statements (e.g. "Same-day updates", "Founder-led").
- Reframed the Portfolio placeholder from an unfinished-looking slot into a confident CTA.

## Contact form — security & robustness (`app/api/contact/route.ts` + `components/Contact.tsx`)
- Moved `request.json()` inside try/catch (malformed body → 400, not a crash).
- Added input validation (required fields, email format, length caps).
- HTML-escape all user input in emails; strip CR/LF from the subject (injection defense).
- Added a hidden **honeypot** field and **in-memory rate limiting** (4/min/IP).
- Guard for a missing `RESEND_API_KEY`.
- Form now has **loading + error states**, a disabled submit (no double-send), accessible
  `<label htmlFor>`/`id` pairs, `autoComplete`, focus rings, and an `aria-live` success message.

## SEO / AEO
- Expanded `app/layout.tsx` metadata: `metadataBase`, canonical, keywords, authors, full
  OpenGraph + Twitter cards.
- Added `app/robots.ts`, `app/sitemap.ts`, generated `app/opengraph-image.tsx`, branded
  `app/icon.svg`.
- Added JSON-LD (`lib/schema.ts`): Organization/ProfessionalService + WebSite + FAQPage.
- Extracted FAQs to `lib/faqs.ts` as the single source for both the UI and the schema;
  front-loaded answers for AI answer engines.

## Accessibility (WCAG 2.2 AA)
- Skip-to-content link; darkened `--color-stone` and bumped low-opacity text for contrast.
- `prefers-reduced-motion` now disables animations + smooth scroll.
- `aria-expanded`/`aria-controls` on the FAQ accordion and mobile nav; Escape closes the menu.
- `aria-hidden` on decorative SVGs; `scope` on table headers + a mobile card layout for the
  comparison table; non-color "Most Popular" indicator on pricing.

## Design / brand
- Replaced the generic 3-bar "equalizer" mark with an on-brand **red-rock strata logo**
  (`components/Logo.tsx`) in the nav, footer, favicon, and About panel.
- Added the long-planned **rock-strata silhouette** to the hero; animated the scroll cue.
- Moved the Compare table directly after pricing so value justification sits next to price.

## Next.js 16 / config / cleanup
- `next.config.ts`: security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
  HSTS, Permissions-Policy) + `poweredByHeader: false`.
- Branded `app/not-found.tsx`.
- Deleted the internal `/logos` design-review route and all dead `LogoA–I` components.
- Replaced the boilerplate `README.md`; added `LAUNCH.md` (go-live runbook).
