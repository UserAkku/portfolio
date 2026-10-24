import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import { SITE_URL, OG_IMAGE, PERSON, PERSON_ID, SAME_AS, toJsonLd } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Akhilesh Kumar | Full-Stack Developer",
    template: "%s | Akhilesh Kumar",
  },
  description:
    "Akhilesh Kumar is a Full-Stack Developer specializing in Next.js, TypeScript, and React. Building high-performance, scalable web applications and crafting premium digital experiences.",
  keywords: [
    "Akhilesh Kumar",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer India",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  authors: [{ name: "Akhilesh Kumar", url: SITE_URL }],
  creator: "Akhilesh Kumar",
  publisher: "Akhilesh Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Akhilesh Kumar",
    title: "Akhilesh Kumar | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, and React. Building high-performance, scalable web applications.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhilesh Kumar | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, and React. Building high-performance, scalable web applications.",
    images: [OG_IMAGE.url],
  },
  // No canonical here on purpose: alternates are inherited by every child route,
  // which made /blog declare the home page as its canonical. Each page sets its own.
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Akhilesh Kumar",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript, and React. Building high-performance, scalable web applications.",
  email: PERSON.email,
  sameAs: SAME_AS,
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Full-Stack Development",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Cloudinary for faster image loading */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Only load GA with a real measurement ID; the old "G-XXXXXXXXXX" fallback fired requests to a non-existent property */}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
