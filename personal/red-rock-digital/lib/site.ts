// Central site constants — single source of truth for metadata, schema, and sitemap.
export const SITE = {
  name: "Red Rock Digital",
  url: "https://redrockdigital.ai",
  domain: "redrockdigital.ai",
  email: "hello@redrockdigital.ai",
  founder: "Blair",
  areaServed: "Colorado",
  tagline: "Websites for Front Range Remodelers & Contractors",
  description:
    "Websites built, hosted, and managed for Front Range remodelers and contractors. More of the right jobs, none of the website hassle — you own it, no lock-in, and a local guy who answers the phone.",
} as const;

// Pricing plans — kept here so the page, the contact form, and the schema all agree.
export const PLANS = [
  { id: "basecamp", name: "Basecamp", setup: 499, monthly: 75 },
  { id: "ascent", name: "Ascent", setup: 999, monthly: 125 },
  { id: "summit", name: "Summit", setup: 1799, monthly: 200 },
] as const;
