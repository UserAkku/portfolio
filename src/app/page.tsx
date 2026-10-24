import SectionIndicator from "@/components/SectionIndicator";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, PERSON_ID, WEBSITE_ID, toJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// The home page is a profile of one person: ProfilePage + the work that backs it up
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Akhilesh Kumar | Freelance Full-Stack Developer in India",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
      hasPart: { "@id": `${SITE_URL}/#projects` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: "Projects built by Akhilesh Kumar",
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary,
          url: project.live,
          image: project.image,
          keywords: project.stack.join(", "),
          creator: { "@id": PERSON_ID },
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      <SectionIndicator />
      
      <main className="flex flex-col w-full relative bg-transparent">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
