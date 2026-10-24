import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import { SITE_URL, OG_IMAGE, PERSON, PERSON_ID, WEBSITE_ID, SAME_AS, toJsonLd } from "@/lib/site";
import { SERVICES } from "@/lib/services";
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

const TITLE = "Akhilesh Kumar | Freelance Full-Stack Developer in India";
const DESCRIPTION =
  "Akhilesh Kumar is a freelance full-stack developer building custom Shopify stores, Next.js websites, SaaS tools, AI products and landing pages for founders.";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Akhilesh Kumar",
  },
  description: DESCRIPTION,
  keywords: [
    "Akhilesh Kumar",
    "Akhilesh Kumar developer",
    "freelance full-stack developer",
    "freelance full stack developer India",
    "full stack developer for hire",
    "freelance Next.js developer",
    "freelance Shopify developer",
    "SaaS MVP development",
    "AI app development",
    "landing page developer",
    "custom ecommerce website development",
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
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  // No canonical here on purpose: alternates are inherited by every child route,
  // which made /blog declare the home page as its canonical. Each page sets its own.
  category: "technology",
};

// Site-wide entity graph. Other pages reference these nodes by @id (PERSON_ID, WEBSITE_ID).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Akhilesh Kumar",
      alternateName: ["akku", "akhileshkumar.in"],
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: PERSON.name,
      givenName: "Akhilesh",
      familyName: "Kumar",
      alternateName: PERSON.alternateName,
      url: SITE_URL,
      image: PERSON.image,
      email: `mailto:${PERSON.email}`,
      jobTitle: PERSON.jobTitle,
      description: DESCRIPTION,
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      sameAs: SAME_AS,
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Newton School of Technology, Rishihood University",
      },
      worksFor: { "@type": "Organization", name: "Maddworld", url: "https://www.madworldd.com" },
      knowsAbout: [
        "Full-Stack Development",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Shopify",
        "Headless E-commerce",
        "SaaS Development",
        "Large Language Models",
        "Retrieval-Augmented Generation",
        "PostgreSQL",
        "Sanity CMS",
        "Tailwind CSS",
        "Technical SEO",
      ],
      makesOffer: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE_URL}/services/${service.slug}#service`,
          name: service.name,
          url: `${SITE_URL}/services/${service.slug}`,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Preconnect to Cloudinary for faster image loading (fonts are self-hosted by next/font) */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
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
