import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check, Mail } from "lucide-react";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ImageHero from "@/components/services/ImageHero";
import SectionHeader from "@/components/services/SectionHeader";
import ServiceTile from "@/components/services/ServiceTile";
import NoBreakHyphens from "@/components/services/NoBreakHyphens";
import { SERVICES, getService } from "@/lib/services";
import { getProject } from "@/lib/projects";
import { SITE_URL, PERSON, PERSON_ID, BASE_OPEN_GRAPH, toJsonLd } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const path = `/services/${service.slug}`;

  return {
    // absolute: the template would push the brand suffix past ~60 chars
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    alternates: { canonical: path },
    openGraph: {
      ...BASE_OPEN_GRAPH,
      type: "website",
      url: path,
      title: service.metaTitle,
      description: service.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

const section = "py-20 md:py-28 px-6 md:px-12 w-full border-t border-white/10";
const container = "max-w-[1200px] mx-auto w-full";
const card = "rounded-3xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm";
const primaryButton =
  "group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto";
const secondaryButton =
  "group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-foreground hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto";

const JUMP_LINKS = [
  { id: "overview", label: "Overview" },
  { id: "deliverables", label: "What you get" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "faq", label: "FAQ" },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.slug}`;
  const projects = service.projects.map(getProject).filter((p) => p !== undefined);
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const [lead, ...rest] = service.overview;
  const jumpLinks = JUMP_LINKS.filter((l) => l.id !== "work" || projects.length > 0);

  const faqCard = (
    <div className={`${card} p-7`}>
      <p className="font-heading text-lg font-bold text-zinc-100 mb-2">Still have a question?</p>
      <p className="text-sm text-zinc-400 leading-relaxed mb-5">Ask me directly. I reply within 48 hours.</p>
      <div className="flex flex-col gap-3">
        <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-white">
          Send a project brief
          <ArrowRight aria-hidden="true" size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={`mailto:${PERSON.email}`}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors break-all"
        >
          <Mail aria-hidden="true" size={16} className="shrink-0" />
          {PERSON.email}
        </a>
      </div>
    </div>
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url,
        provider: { "@id": PERSON_ID },
        areaServed: "Worldwide",
        audience: { "@type": "BusinessAudience", audienceType: service.forWho.join(", ") },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: service.metaTitle,
        description: service.metaDescription,
        about: { "@id": `${url}#service` },
        author: { "@id": PERSON_ID },
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: service.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />

      <main className="min-h-screen bg-background pt-28 text-pretty">
        <ImageHero
          image={service.hero}
          backHref="/services"
          backLabel="All services"
          chips={[service.eyebrow, ...service.stack.slice(0, 3)]}
          title={service.h1}
        />

        {/* INTRO */}
        <section className="px-6 md:px-12 pb-20 md:pb-24 w-full">
          <div className={container}>
            <div className="max-w-[860px]">
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-zinc-400 mb-8">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  Open for projects
                </span>
                <span aria-hidden="true" className="hidden sm:block h-1 w-1 rounded-full bg-zinc-700" />
                <span>Remote, worldwide</span>
                <span aria-hidden="true" className="hidden sm:block h-1 w-1 rounded-full bg-zinc-700" />
                <span>Replies within 48 hours</span>
              </p>
              <p className="text-xl md:text-[24px] text-zinc-300/90 leading-[1.7] font-light mb-10">{service.intro}</p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className={primaryButton}>
                  Start a project
                  <ArrowRight aria-hidden="true" size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                {projects.length > 0 && (
                  <a href="#work" className={secondaryButton}>
                    See the work
                  </a>
                )}
              </div>
            </div>

            <nav aria-label="On this page" className="mt-14 flex flex-wrap gap-2">
              {jumpLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="px-4 py-2 text-[11px] font-medium uppercase tracking-widest rounded-full border border-zinc-800/80 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* 01 OVERVIEW */}
        <section id="overview" aria-labelledby="overview-title" className={`${section} scroll-mt-24`}>
          <div className={`${container} grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-20`}>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeader index="01" label="Overview" title={service.overviewHeading} id="overview-title" className="" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-xl md:text-[22px] text-zinc-200 leading-[1.7] font-light">{lead}</p>
              {rest.map((para, i) => (
                <p key={i} className="text-zinc-400 leading-[1.85] text-base md:text-[1.0625rem]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 02 DELIVERABLES */}
        <section id="deliverables" aria-labelledby="deliverables-title" className={`${section} scroll-mt-24`}>
          <div className={container}>
            <SectionHeader index="02" label="Deliverables" title="What you get" id="deliverables-title" />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {service.deliverables.map((d, i) => (
                <li
                  key={d.title}
                  className={`${card} p-7 md:p-8 flex flex-col transition-all duration-500 hover:border-zinc-700/80 hover:bg-zinc-800/20`}
                >
                  <span className="font-mono text-xs tracking-widest text-zinc-400">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-heading text-xl font-bold text-zinc-100 leading-snug mt-8 mb-3 text-balance">{d.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{d.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 FIT + STACK */}
        <section aria-labelledby="fit-title" className={section}>
          <div className={container}>
            <SectionHeader index="03" label="Fit" title="Is this a fit?" id="fit-title" />
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 md:gap-5">
              <div className={`${card} p-7 md:p-10`}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 mb-6">Who this is for</h3>
                <ul className="flex flex-col gap-5">
                  {service.forWho.map((item) => (
                    <li key={item} className="flex gap-4 text-base md:text-lg text-zinc-200 leading-relaxed">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black">
                        <Check aria-hidden="true" size={14} strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 md:gap-5">
                <div className={`${card} p-7 md:p-10`}>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 mb-6">Built with</h3>
                  <ul className="flex flex-wrap gap-2.5">
                    {service.stack.map((tech) => (
                      <li
                        key={tech}
                        className="px-4 py-2 text-sm font-semibold tracking-wide rounded-full border border-white/10 bg-zinc-900 text-zinc-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 rounded-3xl bg-white p-7 md:p-10 text-black">
                  <p className="font-heading text-xl md:text-2xl font-bold leading-snug text-balance">
                    Not sure it&apos;s the right fit? Tell me what you&apos;re building and I&apos;ll say so honestly.
                  </p>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-widest border-b border-black/30 pb-1 hover:border-black transition-colors"
                  >
                    Send a brief
                    <ArrowRight aria-hidden="true" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 PROCESS */}
        <section id="process" aria-labelledby="process-title" className={`${section} scroll-mt-24`}>
          <div className={container}>
            <SectionHeader index="04" label="Process" title="How it works" id="process-title" />
            <ol className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
              {service.process.map((step, i) => (
                // ::before draws the connector from this step's circle to the next one (none after the last)
                <li
                  key={step.title}
                  className="relative pl-14 lg:pl-0 lg:pt-14 before:absolute before:bg-white/10 before:left-[15px] before:top-8 before:-bottom-10 before:w-px lg:before:left-8 lg:before:-right-6 lg:before:top-[15px] lg:before:bottom-auto lg:before:h-px lg:before:w-auto last:before:hidden"
                >
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black font-mono text-xs text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-zinc-100 leading-snug mb-3 text-balance">{step.title}</h3>
                  <p className="text-sm md:text-[15px] text-zinc-400 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 05 SELECTED WORK */}
        {projects.length > 0 && (
          <section id="work" aria-labelledby="work-title" className={`${section} scroll-mt-24`}>
            <div className={container}>
              <SectionHeader index="05" label="Selected work" title="Live projects I've built" id="work-title" />
              <div
                className={`grid grid-cols-1 gap-5 md:grid-cols-2 ${projects.length === 3 ? "lg:grid-cols-3" : ""}`}
              >
                {projects.map((project) => (
                  <a
                    key={project.title}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${card} group flex flex-col overflow-hidden transition-all duration-500 hover:border-zinc-700/80 hover:bg-zinc-800/20`}
                  >
                    <div className="relative w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-900" style={{ paddingBottom: "56.25%" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-zinc-100 mb-3">{project.title}</h3>
                      <p className="text-zinc-400 leading-relaxed mb-6">{project.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                        Visit {new URL(project.live).hostname.replace(/^www\./, "")}
                        <ArrowUpRight aria-hidden="true" size={16} />
                        <span className="sr-only">(opens in a new tab)</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 06 WHY ME */}
        <section aria-labelledby="why-title" className={section}>
          <div className={container}>
            <SectionHeader index={projects.length > 0 ? "06" : "05"} label="Why me" title="Why work with me" id="why-title" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-white/10">
              {service.whyMe.map((w, i) => (
                <div key={w.title} className="md:px-8 first:md:pl-0 last:md:pr-0">
                  {/* Decorative ordinal as generated content (not text), so the faint tone isn't a contrast failure */}
                  <p
                    aria-hidden="true"
                    data-n={String(i + 1).padStart(2, "0")}
                    className="font-heading text-5xl font-bold text-zinc-800 mb-6 before:content-[attr(data-n)]"
                  />
                  <h3 className="font-heading text-xl font-bold text-zinc-100 mb-3">{w.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className={`${section} scroll-mt-24`}>
          <div className={`${container} grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-20`}>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeader index={projects.length > 0 ? "07" : "06"} label="FAQ" title="Questions, answered" id="faq-title" className="lg:mb-8" />
              {/* Desktop: beside the questions. Phones get the copy after the list instead. */}
              <div className="hidden lg:block">{faqCard}</div>
            </div>
            <div className="flex flex-col gap-3">
              {service.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[16px] border border-white/5 bg-[#0a0a0a] transition-all duration-300 hover:border-white/10 open:border-white/10"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="font-heading text-base md:text-lg font-semibold text-zinc-200">
                      <NoBreakHyphens text={f.q} />
                    </h3>
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-transform duration-300 group-open:rotate-180"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 pt-1 text-zinc-400 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="lg:hidden">{faqCard}</div>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section aria-labelledby="more-title" className={section}>
          <div className={container}>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <SectionHeader index={projects.length > 0 ? "08" : "07"} label="More services" title="Other things I build" id="more-title" className="" />
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
              >
                All services
                <ArrowRight aria-hidden="true" size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Swipeable row on phones, five tall tiles on desktop */}
            <div className="-mx-6 md:mx-0 px-6 md:px-0 scroll-px-6 md:scroll-px-0 flex gap-4 overflow-x-auto snap-x snap-mandatory py-2 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:py-0">
              {others.map((s) => (
                <ServiceTile
                  key={s.slug}
                  service={s}
                  sizes="(min-width: 1024px) 230px, (min-width: 768px) 33vw, 70vw"
                  className="aspect-[3/4] w-[70%] shrink-0 snap-start md:w-auto"
                />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
