// JSON-LD structured data built from the shared site + FAQ data. Combined into a
// single @graph so Google and AI answer engines get Organization, LocalBusiness,
// WebSite, and FAQPage entities in one script tag.
import { SITE } from "./site";
import { faqs } from "./faqs";

export function schemaGraph() {
  const org = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    founder: { "@type": "Person", name: SITE.founder },
    areaServed: { "@type": "State", name: SITE.areaServed },
    address: { "@type": "PostalAddress", addressRegion: "CO", addressCountry: "US" },
    priceRange: "$499–$1,799 setup + $75–$200/mo",
    slogan: "More of the right jobs. None of the website hassle.",
    knowsAbout: [
      "Remodeler and contractor websites",
      "Website design and hosting",
      "Project gallery and before-and-after galleries",
      "Quote request and lead forms",
      "Local SEO for home-improvement pros",
      "Google review automation",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [org, website, faqPage],
  };
}
