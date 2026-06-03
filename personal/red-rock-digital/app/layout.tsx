import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { schemaGraph } from "@/lib/schema";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const title = `${SITE.name} — Websites for Front Range Remodelers & Contractors`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "remodeler website design",
    "contractor website design",
    "home improvement websites",
    "Denver remodeler website",
    "Boulder contractor website",
    "Colorado Springs remodeler website",
    "Front Range contractor web design",
    "general contractor website",
    "website design and hosting",
    "local SEO for contractors",
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-rust)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph()) }}
        />
      </body>
    </html>
  );
}
