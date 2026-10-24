import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { SERVICES, SERVICES_HUB } from "@/lib/services";
import { SITE_URL, PERSON_ID, BASE_OPEN_GRAPH, toJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SERVICES_HUB.metaTitle },
  description: SERVICES_HUB.metaDescription,
  alternates: { canonical: "/services" },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    type: "website",
    url: "/services",
    title: SERVICES_HUB.metaTitle,
    description: SERVICES_HUB.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SERVICES_HUB.metaTitle,
    description: SERVICES_HUB.metaDescription,
  },
};

export default function ServicesPage() {
  const url = `${SITE_URL}/services`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: SERVICES_HUB.metaTitle,
        description: SERVICES_HUB.metaDescription,
        author: { "@id": PERSON_ID },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/services/${s.slug}`,
            name: s.name,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />

      <main className="flex flex-col w-full relative bg-transparent">
        <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 w-full">
          <div className="max-w-[1200px] mx-auto w-full">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-zinc-300">Services</li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">{SERVICES_HUB.eyebrow}</p>
            <h1 className="font-heading text-[clamp(36px,6.5vw,88px)] font-bold uppercase tracking-tight leading-[0.95] mb-8 text-foreground max-w-5xl">
              {SERVICES_HUB.h1}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed font-medium max-w-3xl">
              {SERVICES_HUB.intro}
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28 px-6 md:px-12 w-full">
          <div className="max-w-[1200px] mx-auto w-full">
            <ul className="border-t border-white/10">
              {SERVICES.map((s, i) => (
                <li key={s.slug} className="border-b border-white/10">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-start gap-6 md:gap-10 py-10 md:py-12 text-foreground"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-zinc-400 pt-2 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight">{s.name}</h2>
                      <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">{s.summary}</p>
                    </div>
                    <ArrowRight
                      size={28}
                      className="mt-1 shrink-0 text-zinc-400 group-hover:text-foreground group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
