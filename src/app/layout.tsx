import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const siteUrl = "https://www.akhileshkumar.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  authors: [{ name: "Akhilesh Kumar", url: siteUrl }],
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
    url: siteUrl,
    siteName: "Akhilesh Kumar | Full-Stack Developer",
    title: "Akhilesh Kumar | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, and React. Building high-performance, scalable web applications.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Akhilesh Kumar — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhilesh Kumar | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, and React. Building high-performance, scalable web applications.",
    creator: "@akhileshkumar",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akhilesh Kumar",
  url: siteUrl,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript, and React. Building high-performance, scalable web applications.",
  email: "akhileshkumaroffical@gmail.com",
  sameAs: [
    "https://github.com/UserAkku",
    "https://www.linkedin.com/in/akhilesh-kumar-736794313",
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-white text-black bg-grain`}
      >
        {children}
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
