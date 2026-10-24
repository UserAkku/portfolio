# SEO audit — akhileshkumar.in

Audit date: 25 Oct 2026 · Branch: `seo-overhaul` · Scope: on-page, technical, content, structured data, performance, and off-page (see [OFF-PAGE-SEO-PLAN.md](./OFF-PAGE-SEO-PLAN.md)).

Goal: rank for people who want to **hire** someone to build Shopify stores, Next.js websites, SaaS tools, AI products, landing pages and custom e-commerce, and for the name **"Akhilesh Kumar"**. The visual design and layout stay unchanged; only the contact section was redesigned.

---

## 1. The headline findings

| # | Finding | Impact | Status |
|---|---------|--------|--------|
| 1 | **The site looks un-indexed.** No search index we could check (Bing, a non-Google index) returned any page from akhileshkumar.in, even for the domain itself. Google's status couldn't be checked automatically. | Nothing else matters until this is fixed | **You: do §4 first** |
| 2 | `/blog` declared the **home page as its canonical** (inherited from the root layout), telling Google not to index it. | High | Fixed `ddb7da5` |
| 3 | **Nothing targeted the keywords you want.** "freelance", "hire", "Shopify", "SaaS", "landing page" appeared 0 times; the title was "Full-Stack Developer"; no service pages existed. | High | Fixed `a4f5917`, `dc831f4` |
| 4 | **Mobile LCP ≈ 19.5 s.** The hero portrait was a 2.6 MB PNG, and framer-motion kept the whole hero at `opacity:0` until JavaScript hydrated. | High (Core Web Vitals) | Fixed `383b273`, `d71e895` |
| 5 | The H1 was "code is art." twice (desktop + mobile), with no name or service. | Medium | Fixed `d71e895` (visually identical) |
| 6 | Thin structured data: a bare Person, no WebSite / ProfilePage / Service / projects. | Medium (name disambiguation) | Fixed `dc831f4`, `a4f5917` |
| 7 | robots.txt pointed the sitemap at the non-www domain (which redirects). | Medium | Fixed `ddb7da5` |
| 8 | Blog titles duplicated the brand ("… \| Akhilesh Kumar \| Akhilesh Kumar"); `/blog` lost its OG image; the post's fallback `/og-image.png` didn't exist. | Medium | Fixed `ddb7da5`, `ecaf54d` |
| 9 | Blog FAQ answers were **not in the HTML** (the accordion only mounted them when opened). | Medium | Fixed `4a3639e` |
| 10 | **3 of 9 project "Live Demo" links are dead** (see §5). | High for trust | **You: decide** |
| 11 | favicon.ico was 707 KB; no app icons or manifest; the default 404 had two titles and an inherited canonical. | Low | Fixed `62ef0d4` |
| 12 | Placeholder GA id `G-XXXXXXXXXX` loaded when the env var was missing; `twitter:creator @akhileshkumar` points at an account that probably isn't yours. | Low | Fixed `ddb7da5` |

Baseline numbers (production before this branch, Lighthouse 13.5): SEO 100, Accessibility 96, Best Practices 100. Performance (throttled mobile trace): FCP 5.6 s, **LCP 19.5 s**, TBT ≈ 360 ms, CLS 0. Lighthouse's SEO score was 100 because it only checks basics (title exists, crawlable, etc.). It doesn't measure whether you target any keyword, which is where the site was failing.

---

## 2. What changed (commit by commit)

| Commit | What |
|--------|------|
| `383b273` | Hero portrait served via Cloudinary `f_auto,q_auto` with a srcset (2.6 MB → ~90–280 KB AVIF/WebP depending on screen). |
| `78c31e0` | Project data moved to `src/lib/projects.ts`; descriptive alt text; screenshots capped at 1600 px (≈ half the bytes). |
| `ddb7da5` | Per-page canonicals, www robots/sitemap, blog title/OG fixes, BlogPosting + Breadcrumb JSON-LD, `<` escaped in JSON-LD, GA placeholder removed. |
| `ca81bf1` | **Maison Rivina added as the first project.** Titles in natural case (CSS still uppercases them), unique sr-only anchor text, no below-the-fold image preloading. |
| `d71e895` | Hero entrance animation moved from framer-motion to CSS (same durations, delays and curves) so it paints without waiting for JS. One visually hidden H1: "Akhilesh Kumar — Freelance Full-Stack Developer for Shopify, Next.js, SaaS and AI Products". |
| `4a3639e` | Blog FAQ answers always in the HTML; heading anchors (`rehype-slug`); real 404s for unknown slugs. |
| `62ef0d4` | 15 KB favicon (same artwork), icon.png / apple-icon.png, web manifest, proper `not-found` page, header cleanup. |
| `a4f5917` | **Six service pages + `/services` hub** (≈1,400–1,600 words each, Service/FAQPage/Breadcrumb schema). |
| `ecaf54d` | Branded 1200×630 share cards for every service page and blog post. |
| `79d67cf` | **Contact section redesign** (see §6). |
| `dc831f4` | New home title/description, site-wide entity graph (WebSite + Person + ProfilePage + projects ItemList), About sentence linking to the service pages, real 1200×630 OG image (2.4 MB → 70 KB). |
| `9ce81c1` | Sitemap with service pages, real dates and image entries; `/llms.txt` for AI answer engines. |

Visible changes, all deliberate:
- Hero intro line now starts with "Freelance full-stack developer…" (same length).
- One added sentence in About with links to the service pages.
- Maison Rivina as the first project card.
- The redesigned contact section.

Everything else was compared side by side with production at 1440 px and 375 px and renders the same.

---

## 3. Keyword map (one primary keyword per page)

| Page | Primary keyword | Title |
|------|-----------------|-------|
| `/` | Akhilesh Kumar · freelance full-stack developer (India) | Akhilesh Kumar \| Freelance Full-Stack Developer in India |
| `/services` | freelance web developer for startups | Web Development Services for Startups \| Akhilesh Kumar |
| `/services/shopify-developer` | freelance Shopify developer | Freelance Shopify Developer in India \| Akhilesh Kumar |
| `/services/nextjs-developer` | freelance Next.js developer | Freelance Next.js Developer for Hire \| Akhilesh Kumar |
| `/services/saas-development` | SaaS MVP development | SaaS MVP Development for Founders \| Akhilesh Kumar |
| `/services/ai-app-development` | AI app development | AI App Development for Startups \| Akhilesh Kumar |
| `/services/landing-page-development` | landing page developer | Landing Page Developer for SaaS & Startups \| Akhilesh Kumar |
| `/services/ecommerce-development` | custom e-commerce website development | Custom E-commerce Website Development \| Akhilesh Kumar |

Why these and not "hire Shopify developer": marketplaces (Toptal, Upwork, Fiverr, Arc, Contra) own every bare "hire X developer" query. Individual freelancers do break through on "freelance" + location or niche modifiers. For example, maxschmitt.me and sedenko.net rank on page 1 for "freelance Next.js developer". The Next.js page is the most winnable.

**Honest note on "Akhilesh Kumar":** it is a very common name. Today the results show Wikipedia (a UP politician), IMDb (a film director), a University of Minnesota professor and other people's LinkedIn profiles. Ranking #1 for the bare name is a long-term goal, and nobody can promise it. Realistic targets, in order:
1. "Akhilesh Kumar portfolio". Your GitHub repo is already #1 for this.
2. "Akhilesh Kumar developer" and "Akhilesh Kumar full stack developer"
3. "Akhilesh Kumar freelance developer" and "Akhilesh Kumar web developer India"
4. The bare name in India, once the entity signals below build up

What moves the name query is the Person entity: the same @id, photo, headline and website link everywhere (site JSON-LD, GitHub, LinkedIn, dev.to, Peerlist), plus real third-party mentions such as client credits and a college feature. The site side is done; the profile side is in the off-page plan.

---

## 4. Do this first (only you can)

1. **Merge and deploy** the `seo-overhaul` branch. Vercel gives every push a preview URL, so check it there first.
2. **Google Search Console:**
   - Add a *Domain* property for `akhileshkumar.in` (DNS TXT record at your registrar).
   - Submit `https://www.akhileshkumar.in/sitemap.xml`.
   - Use **URL Inspection → Request indexing** for `/`, `/services`, each `/services/*` page, `/blog` and the post.
3. **Bing Webmaster Tools:** import the property from Search Console (one click). This also feeds ChatGPT search and DuckDuckGo.
4. **Vercel env:** make sure `NEXT_PUBLIC_GA_ID=G-MJLZZGE2S0` is set for Production. Production uses it today, and the code no longer falls back to a placeholder.
5. **GitHub profile:** set the website field to `https://www.akhileshkumar.in` (it is empty) and the name to "Akhilesh Kumar". Change the `portfolio` repo's homepage from the dead `portfoliouserakku.vercel.app` to the real domain.

---

## 5. Needs your decision

- **Dead project links:**
  - travelnepalwithus.com returns 402 (Vercel deployment disabled).
  - drhimanshukrishna.com returns 404 (deployment not found).
  - maddworldcreative.com doesn't resolve in DNS.

  Ask the clients to restore them. If they can't, relabel those cards "Case study (site retired)" and drop the Live Demo button. I didn't change them without asking you.
- **Lustra Skin card** says "Achieved 35% faster page loads". Keep it only if you can back it up.
- **Blog post date** is `2024-10-07`, but the post was added in Oct 2026. If that's a typo, fix it in `content/blog/*.mdx`, because it drives `datePublished` and the sitemap.
- **Real X/Twitter handle:** if you have one, add it to `SAME_AS` in `src/lib/site.ts` and to `twitter.creator` in `layout.tsx`.
- **Contact promises:** "Replies within 48 hours" and "written plan and quote before any work starts" are set in `REPLY_TIME` / `NEXT_STEPS` at the top of `Contact.tsx`. Change them if they don't match how you work.
- **Shopify proof:** none of the portfolio projects is on Shopify yet. The Shopify page says so honestly and leans on your custom e-commerce work. One real Shopify build (a client store or a public theme in a free Partner dev store) will make that page much stronger.

---

## 6. Contact section: what was wrong and what changed

| Before | After |
|--------|-------|
| Huge LinkedIn/GitHub URLs with `break-all` wrapped badly on phones | Clean rows with handles, `rel="me"` to tie them to your identity |
| No idea what to write | Project-type chips (pre-selected on the matching service page) with a hint that adapts to the type |
| No budget/timeline context | Optional timeline chips + free-text budget (no invented price bands) |
| Button stuck on "Sent!" forever; tiny error text | Spinner → "Brief received" panel summarising the brief, "Send another" / "See recent work"; on failure Formspree's own message, "Try again", nothing lost |
| No validation feedback, no live region | Inline errors that clear as you type, focus moves to the first problem, screen-reader announcements |
| No spam protection | `_gotcha` honeypot; descriptive `_subject`; `source_page` tells you which page the lead came from |
| No reply expectation | "Open for freelance projects / Replies within 48 hours" + a 3-step "what happens next" |

---

## 7. Next on-site work (recommended, not done)

- **Blog content for buyer queries** (one post every 2 weeks, published on the site first):
  - Shopify vs a custom Next.js store
  - Headless Shopify: when it's worth it
  - What drives SaaS MVP cost
  - Next.js vs WordPress for a business site
  - Freelancer vs agency vs marketplace
  - How to hire a Shopify developer
  - Case studies: building Krillo and building Ornovia
  - Adding AI to an existing app
  - Custom-coded landing page vs Webflow/Framer
  - Razorpay vs Stripe
  - Sanity for e-commerce

  Link each post to its matching service page.
- **Case-study pages** (`/work/maison-rivina`, `/work/ornovia`, `/work/krillo`): written only from facts you confirm. Client sites can link to them.
- **Footer contrast:** the `text-zinc-500` footer line is 4.35:1 on black, just under WCAG AA (4.5:1). It's Lighthouse's only accessibility failure. It was left alone because it's a design choice; `text-zinc-400` would fix it.
- **"Services" in the navbar:** deliberately not added, both to keep the design unchanged and because One Page Love only accepts one-page sites (see the off-page plan). Add it after that submission if you want.

---

## 8. How to measure

- **Search Console → Performance**, filtered by page. Watch impressions for the service pages and for queries containing "akhilesh". Expect weeks, not days.
- **Search Console → Links:** confirm client credit links get picked up.
- **Vercel Speed Insights:** LCP on mobile should drop from seconds to well under 2.5 s once deployed.
- **Formspree inbox:** the `source_page` field shows which pages generate leads.
