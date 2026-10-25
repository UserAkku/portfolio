import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ImageHero from "@/components/services/ImageHero";
import ServiceTile from "@/components/services/ServiceTile";
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

      <main className="min-h-screen bg-background pt-28">
        <ImageHero
          image={SERVICES_HUB.hero}
          backHref="/"
          backLabel="Back home"
          chips={["Freelance", "Remote, worldwide", "Replies within 48 hours"]}
          title={SERVICES_HUB.h1}
        />

        <section className="px-6 md:px-12 pb-16 md:pb-20 w-full">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="max-w-[860px]">
              <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 mb-8">
                {SERVICES.length} services · one developer · you own the code
              </p>
              <p className="text-xl md:text-[24px] text-zinc-300/90 leading-[1.7] font-light mb-10">{SERVICES_HUB.intro}</p>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
              >
                Start a project
                <ArrowRight aria-hidden="true" size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Services" className="px-6 md:px-12 pb-20 md:pb-28 w-full">
          <ul className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <li key={s.slug}>
                <ServiceTile service={s} index={i} showSummary headingLevel="h2" className="h-[440px] md:h-[480px]" />
              </li>
            ))}
          </ul>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
