import Link from "next/link";
import type { Metadata } from "next";

// robots is replaced per segment, so this overrides the root "index, follow" for 404s
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">404</p>
        <h1 className="font-heading text-[clamp(42px,7vw,96px)] font-bold uppercase tracking-tight leading-none mb-6 text-foreground">
          Page not found
        </h1>
        <p className="text-lg md:text-2xl text-zinc-400 font-medium mb-12 max-w-2xl">
          This page doesn&apos;t exist or has moved. Try one of these instead.
        </p>
        <ul className="flex flex-wrap gap-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center justify-center px-6 py-3 border border-white/20 text-foreground hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
