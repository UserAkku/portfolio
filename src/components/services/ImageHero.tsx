import Link from "next/link";
import type { HeroImage } from "@/lib/services.types";
import { cropSrcSet } from "@/lib/cloudinary";

interface ImageHeroProps {
  image: HeroImage;
  backHref: string;
  backLabel: string;
  chips: string[];
  title: string;
}

/** Same rounded image hero as the blog posts: back pill top-left, chips + title bottom-left */
export default function ImageHero({ image, backHref, backLabel, chips, title }: ImageHeroProps) {
  const wide = cropSrcSet(image, "wide", [960, 1080]);
  const tall = cropSrcSet(image, "tall", [480, 720]);

  return (
    // Same outer padding as the page sections, so the card's edges line up with the content below
    <div className="w-full px-4 md:px-12 mb-16">
      <div className="relative max-w-[1200px] mx-auto w-full h-[60vh] min-h-[500px] max-h-[700px] rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
        <div className="absolute inset-0">
          {/* Decorative: wide crop on desktop, portrait crop on phones (the sources are 9:16) */}
          <picture>
            <source media="(min-width: 768px)" srcSet={wide.srcSet} sizes="(min-width: 1200px) 1136px, 100vw" />
            <img
              src={tall.src}
              srcSet={tall.srcSet}
              sizes="100vw"
              alt=""
              fetchPriority="high"
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
            />
          </picture>
          {/* These photos are lighter than the blog's, so a touch more shade keeps white text legible */}
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
        </div>

        <div className="absolute top-0 left-0 p-6 md:p-10 w-full z-10">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-all duration-300 group bg-black/35 hover:bg-black/50 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/15 shadow-lg"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {backLabel}
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10">
          <div className="max-w-[900px]">
            <ul className="flex flex-wrap gap-2 mb-4">
              {chips.map((chip) => (
                <li key={chip} className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 bg-black/40 rounded-full backdrop-blur-md shadow-sm">
                  {chip}
                </li>
              ))}
            </ul>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
