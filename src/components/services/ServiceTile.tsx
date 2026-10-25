import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services.types";
import { cropSrcSet } from "@/lib/cloudinary";

interface ServiceTileProps {
  service: Service;
  index?: number;
  showSummary?: boolean;
  /** Real heading on the hub (it lists the services); plain text where tiles are just links */
  headingLevel?: "h2" | "h3" | "p";
  className?: string;
}

/** A mini version of the image hero: the service's photo with its name at the bottom-left */
export default function ServiceTile({ service, index, showSummary = false, headingLevel = "p", className = "" }: ServiceTileProps) {
  const img = cropSrcSet(service.hero, "tall", [480, 720]);
  const Heading = headingLevel;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative block overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950 shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        srcSet={img.srcSet}
        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 70vw"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <span className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-black">
        <ArrowUpRight aria-hidden="true" size={18} />
      </span>

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-7">
        {index !== undefined && (
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
            {String(index + 1).padStart(2, "0")}
          </p>
        )}
        <Heading
          className={`font-heading font-bold leading-tight tracking-tight text-white drop-shadow-2xl text-balance ${showSummary ? "text-2xl md:text-3xl" : "text-xl md:text-2xl lg:text-xl"}`}
        >
          {/* Non-breaking hyphen so "E-commerce" never splits as "E-" / "commerce" in narrow tiles */}
          {service.name.replace(/-/g, "\u2011")}
        </Heading>
        {showSummary && <p className="mt-3 text-sm md:text-base leading-relaxed text-white/75">{service.summary}</p>}
      </div>
    </Link>
  );
}
