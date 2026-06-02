// Single source of truth for FAQs — drives both the FAQ component and the
// FAQPage JSON-LD schema. Answers are front-loaded with a direct response so
// AI answer engines (Perplexity, ChatGPT, Google AI Overviews) can extract them.
export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Do I own my website?",
    answer:
      "Yes. You own your domain name and all of your content. We own and operate the hosting infrastructure — that's what keeps your costs low and your site running reliably. If you ever want to leave, we'll package everything up and help you move it.",
  },
  {
    question: "What does the monthly retainer actually include?",
    answer:
      "Hosting on our Vercel infrastructure, your SSL certificate, content updates (new photos, text changes, hours, etc.), uptime monitoring, and priority support. On the Ascent and Summit plans it also includes the Google review automation pipeline.",
  },
  {
    question: "How do I update my website content?",
    answer:
      "Two ways: email or text us a change and we handle it, usually the same day — or log into your Sanity dashboard and make the edit yourself. For things like reviews, team members, and service descriptions, the Sanity CMS is simple enough that most clients prefer doing it themselves.",
  },
  {
    question: "How long does it take to get a site live?",
    answer:
      "Typically 1–2 weeks from the time you sign and we have your content. The timeline depends mostly on how quickly you can get us photos and copy — the technical side moves fast because our process and templates are already built.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Your logo (or we can help you get a simple one made), photos of your business or team, and some basic info about what you do and who you serve. We'll ask you the right questions on the intake call. Most clients are surprised by how little we need.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Anytime, with 30 days notice. No penalties, no fees, no lock-in. We'll help you migrate your site if you need to. We don't use contracts to keep clients — we use good service.",
  },
  {
    question: "Do you work with businesses outside Colorado?",
    answer:
      "Yes, though most of our clients are Colorado-based. The process works entirely remote — the only thing local is our knowledge of the Colorado market.",
  },
  {
    question: "What if I need something that isn't in a plan?",
    answer:
      "Just ask. Custom e-commerce, appointment booking, membership areas, Spanish-language versions — these are all things we can build. Some are included in Summit, some are add-ons. We'll give you a straight answer on cost before we do anything.",
  },
];
