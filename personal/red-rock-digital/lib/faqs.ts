// Single source of truth for FAQs — drives both the FAQ component and the
// FAQPage JSON-LD schema. Answers are front-loaded with a direct response so
// AI answer engines (Perplexity, ChatGPT, Google AI Overviews) can extract them.
export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Do I own my website?",
    answer:
      "Yes. You own your domain, your content, and your code — all of it. We build it, host it, and manage it for you, but it's your site, not ours. That's the opposite of the national \"managed\" outfits that hold your site hostage. If you ever leave, we hand everything over and help you move it.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Cancel anytime with 30 days notice. No contract, no penalty, no lock-in. We'll package up your site, your domain, and your code and help you take it wherever you want. We keep contractors by doing good work and answering the phone, not by trapping you in a contract.",
  },
  {
    question: "Will this actually get me found and book me jobs?",
    answer:
      "That's the whole point. We build in local SEO and a Google reviews pipeline so when a homeowner searches \"kitchen remodel near me\" or \"bathroom contractor in Denver,\" you show up and look trustworthy — project gallery, before-and-afters, licensed & insured, real reviews. The site is built to turn that visit into a quote request, not just look pretty.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Not much. Your logo (or we'll help you get a simple one made), photos of a few finished jobs for the gallery, and a quick rundown of what you do and the areas you serve. We'll ask the right questions on a short call. Most contractors are surprised how little it takes — you keep working, we build the site.",
  },
  {
    question: "How fast can my site be live?",
    answer:
      "Usually 1–2 weeks from the time we have your photos and info. The build side moves fast because our process and templates are already dialed in — the only thing that slows it down is how quickly you can get us your job photos. We launched Elevated Apartment Locating, a real site, in about 9 days.",
  },
  {
    question: "What does the monthly cover?",
    answer:
      "Hosting, your SSL certificate, uptime monitoring, and ongoing changes — text us a new project photo, a price update, or a copy tweak and it's handled, usually same-day. On the Ascent and Summit plans it also includes the Google reviews pipeline that keeps fresh reviews flowing to your profile. You're not paying for a tool you have to learn — you're paying for it to be handled.",
  },
  {
    question: "Who actually answers when I call?",
    answer:
      "I do — Blair. You're not filing a ticket with a call center. Text or call with a change and you get a person who knows your site and gets it done same-day. That's the difference between a local guy and a national service with a queue.",
  },
  {
    question: "Do you only work with remodelers and contractors?",
    answer:
      "That's who we're built for — remodelers, GCs, and home-improvement trades on the Front Range (Denver, Boulder, Colorado Springs). The site, the galleries, the quote forms, the trust signals are all set up for how homeowners hire for project work. If you're an adjacent trade, ask — odds are it's a fit.",
  },
  {
    question: "What if I need something that isn't in a plan?",
    answer:
      "Just ask. Financing CTAs, appointment booking, extra service-area pages, Spanish-language versions — we can build it. Some of it's already in Summit, some is an add-on. Either way you get a straight answer on cost before we do anything.",
  },
];
