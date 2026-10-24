// Source is a 1024x1536 PNG (~2.6MB); Cloudinary f_auto/q_auto serves AVIF/WebP at a fraction of the size
const HERO_IMAGE_BASE = "https://res.cloudinary.com/docksqg0c/image/upload";
const HERO_IMAGE_ID = "v1785567791/ChatGPT_Image_Aug_1_2026_12_32_29_PM_q2nhcp.png";
const HERO_IMAGE_WIDTHS = [480, 640, 828, 1024];

const INTRO =
  "Freelance full-stack developer engineering digital experiences with precision: clean architecture, scalable systems and pixel-perfect design.";

// Entrance animations are CSS (hero-* classes in globals.css), not framer-motion: the server HTML
// used to ship every hero element at opacity:0 until JS hydrated, which delayed FCP/LCP on mobile.
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative h-screen w-full overflow-hidden bg-background px-6 md:px-12"
    >
      {/* The visible "code is art." is decorative; this is the page's one H1 */}
      <h1 id="hero-heading" className="sr-only">
        Akhilesh Kumar — Freelance Full-Stack Developer for Shopify, Next.js, SaaS and AI Products
      </h1>

      {/* Yellow Circle (Behind) */}
      <div className="hero-circle absolute top-[54%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[400px] w-[400px] md:h-[800px] md:w-[800px] lg:h-[550px] lg:w-[550px] rounded-full bg-yellow-400" />

      {/* Main Container for positioned content */}
      <div className="relative w-full h-full max-w-[1200px] mx-auto flex items-center justify-center">

        {/* Left Text Content */}
        <div className="hero-intro absolute left-0 z-20 max-w-xs hidden lg:block">
          <p className="text-sm md:text-base leading-relaxed text-foreground/80 font-medium mb-4">
            {INTRO}
          </p>
          <a href="#about" className="text-sm font-bold tracking-widest uppercase border-b border-foreground/30 hover:border-foreground transition-colors pb-1">
            Read More
          </a>
        </div>

        {/* Right Text - z-10 so it's behind the image but above the circle */}
        <div className="hero-title absolute left-[65%] top-[50%] -translate-y-1/2 -mt-2 z-10 hidden lg:block pointer-events-none">
          <p className="text-7xl lg:text-[150px] font-extrabold text-foreground tracking-tighter leading-[0.85] font-heading lowercase whitespace-nowrap">
            code is
            <br />
            art.
          </p>
        </div>

        {/* Center Image - z-20 so it's above the right text */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${HERO_IMAGE_BASE}/f_auto,q_auto,w_1024/${HERO_IMAGE_ID}`}
          srcSet={HERO_IMAGE_WIDTHS.map((w) => `${HERO_IMAGE_BASE}/f_auto,q_auto,w_${w}/${HERO_IMAGE_ID} ${w}w`).join(", ")}
          // Rendered width follows the height (2:3 portrait): 115vh → ~77vh wide on desktop, 85vh → ~57vh on tablet, 75vh → 50vh on mobile
          sizes="(min-width: 1024px) 77vh, (min-width: 768px) 57vh, 50vh"
          width={1024}
          height={1536}
          fetchPriority="high"
          decoding="async"
          alt="Akhilesh Kumar, freelance full-stack developer"
          // We anchor to the absolute bottom. h-[115vh] makes it overflow the top on desktop.
          className="hero-portrait absolute bottom-0 lg:-bottom-10 left-1/2 -translate-x-1/2 lg:-translate-x-[55%] z-20 h-[75vh] md:h-[85vh] lg:h-[115vh] w-auto object-cover object-bottom drop-shadow-2xl pointer-events-none"
        />

        {/* Mobile / Tablet Stacked Layout */}
        <div className="w-full h-full flex flex-col items-center justify-between pt-[15vh] pb-16 md:pb-12 z-30 lg:hidden relative pointer-events-none">
            <p className="hero-title-mobile text-7xl md:text-8xl font-extrabold text-foreground tracking-tighter leading-[0.85] font-heading lowercase text-center whitespace-nowrap pointer-events-auto drop-shadow-lg">
              code is<br className="md:hidden" /><span className="hidden md:inline"> </span>art.
            </p>
            <div className="hero-intro-mobile text-center max-w-[90%] md:max-w-md mx-auto mt-auto pointer-events-auto bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
              <p className="text-sm md:text-base leading-relaxed text-foreground/90 font-medium mb-4">
                {INTRO}
              </p>
              <a href="#about" className="text-sm font-bold tracking-widest uppercase border-b border-foreground/30 hover:border-foreground transition-colors pb-1">
                Read More
              </a>
            </div>
        </div>

      </div>

    </section>
  );
}
