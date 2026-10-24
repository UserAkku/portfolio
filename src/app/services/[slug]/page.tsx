import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { SERVICES, getService } from "@/lib/services";
import { getProject } from "@/lib/projects";
import { SITE_URL, PERSON_ID, BASE_OPEN_GRAPH, toJsonLd } from "@/lib/site";

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

const sectionClass = "py-20 md:py-28 px-6 md:px-12 w-full border-t border-white/10";
const h2Base =
  "font-heading text-[clamp(28px,4vw,48px)] font-bold uppercase tracking-widest leading-none text-foreground";
const h2Class = `${h2Base} mb-12`;

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.slug}`;
  const projects = service.projects.map(getProject).filter((p) => p !== undefined);
  const others = SERVICES.filter((s) => s.slug !== service.slug);

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

      <main className="flex flex-col w-full relative bg-transparent">
        {/* HEADER */}
        <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 w-full">
          <div className="max-w-[1200px] mx-auto w-full">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-zinc-300">{service.name}</li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">{service.eyebrow}</p>
            <h1 className="font-heading text-[clamp(36px,6.5vw,88px)] font-bold uppercase tracking-tight leading-[0.95] mb-8 text-foreground max-w-5xl">
              {service.h1}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed font-medium max-w-3xl mb-12">
              {service.intro}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border border-white hover:bg-transparent hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
              >
                Start a project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              {projects.length > 0 && (
                <a
                  href="#work"
                  className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-foreground hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
                >
                  See the work
                </a>
              )}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className={sectionClass}>
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <h2 className={h2Base}>{service.overviewHeading}</h2>
            <div className="flex flex-col gap-6 text-lg text-zinc-400 leading-relaxed">
              {service.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className={sectionClass}>
          <div className="max-w-[1200px] mx-auto w-full">
            <h2 className={h2Class}>What you get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/10">
              {service.deliverables.map((d) => (
                <div key={d.title} className="p-8 md:p-10 border-r border-b border-white/10">
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-wide mb-3 text-foreground">
                    {d.title}
                  </h3>
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR + STACK */}
        <section className={sectionClass}>
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-white/10 pb-2">
                Who this is for
              </h2>
              <ul className="space-y-4">
                {service.forWho.map((item) => (
                  <li key={item} className="flex text-lg text-zinc-300">
                    <span className="mr-4 mt-2.5 w-1.5 h-1.5 bg-zinc-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-white/10 pb-2">
                Tech stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 bg-zinc-900 text-zinc-300 border border-white/10 rounded-full text-sm font-semibold tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={sectionClass}>
          <div className="max-w-[1200px] mx-auto w-full">
            <h2 className={h2Class}>How it works</h2>
            <ol className="max-w-4xl border-l border-white/10 ml-2 md:ml-4">
              {service.process.map((step, i) => (
                <li key={step.title} className={`relative pl-8 md:pl-12 ${i === service.process.length - 1 ? "pb-0" : "pb-14"}`}>
                  <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-white rounded-full" />
                  <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SELECTED WORK */}
        {projects.length > 0 && (
          <section id="work" className={sectionClass}>
            <div className="max-w-[1200px] mx-auto w-full">
              <h2 className={h2Class}>Selected work</h2>
              {/* Three cards go three-up so none is orphaned on its own row */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${projects.length === 3 ? "lg:grid-cols-3" : ""}`}>
                {projects.map((project) => (
                  <article key={project.title} className="flex flex-col">
                    <div className="overflow-hidden border border-white/10 bg-zinc-900 mb-6">
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-base text-zinc-400 leading-relaxed mb-6">{project.summary}</p>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-auto flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-foreground hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold self-start"
                    >
                      Visit {project.title}
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* WHY ME */}
        <section className={sectionClass}>
          <div className="max-w-[1200px] mx-auto w-full">
            <h2 className={h2Class}>Why work with me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {service.whyMe.map((w) => (
                <div key={w.title} className="border-t border-white/20 pt-6">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-3 text-foreground">{w.title}</h3>
                  <p className="text-base text-zinc-400 leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={sectionClass}>
          <div className="max-w-[1200px] mx-auto w-full">
            <h2 className={h2Class}>Questions</h2>
            <div className="max-w-4xl border-t border-white/10">
              {service.faqs.map((f) => (
                <details key={f.q} className="group border-b border-white/10">
                  <summary className="flex items-start justify-between gap-6 py-6 list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">{f.q}</h3>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-2xl leading-none text-zinc-400 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-base md:text-lg text-zinc-400 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className={sectionClass}>
          <div className="max-w-[1200px] mx-auto w-full">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-white/10 pb-2">
              Other things I build
            </h2>
            <ul className="flex flex-col">
              {others.map((s) => (
                <li key={s.slug} className="border-b border-white/10">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center justify-between gap-6 py-5 text-foreground"
                  >
                    <span className="font-heading text-xl md:text-3xl font-bold uppercase tracking-tight">{s.name}</span>
                    <ArrowRight size={22} className="shrink-0 text-zinc-400 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
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
