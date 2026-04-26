import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Rock Digital — Colorado Web Design",
  description:
    "We build, host, and manage websites for Colorado small businesses. Fast launch, no tech headaches, monthly support included.",
  openGraph: {
    title: "Red Rock Digital — Colorado Web Design",
    description:
      "We build, host, and manage websites for Colorado small businesses.",
    siteName: "Red Rock Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
