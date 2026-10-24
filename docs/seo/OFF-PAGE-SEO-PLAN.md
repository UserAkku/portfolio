# Off-page SEO and backlink plan

For: akhileshkumar.in · Prepared 25 Oct 2026 · Companion to [SEO-AUDIT.md](./SEO-AUDIT.md)

Off-page work happens on other people's websites and on accounts in your name, so **you have to do it yourself**. An assistant can't create accounts, accept terms, or post as you. What's here is the plan, the exact copy to paste, and what to avoid. Where it matters, each platform's link type (followed vs `nofollow`) was checked on a live page on 25 Oct 2026.

> **What a "quality backlink" means here:** a link from a real, relevant site that a human chose to give you, ideally with your name as the anchor. Five of those beat five hundred directory links. Buying links, link exchanges and "300 directories in one click" services break Google's spam policies and can get the site demoted. They're listed in §6 so you can say no to them.

---

## 1. Profile kit (paste the same thing everywhere)

Consistency is what lets Google work out which "Akhilesh Kumar" you are.

- **Name:** Akhilesh Kumar
- **Website:** https://www.akhileshkumar.in (always the www version, always this exact URL)
- **Photo:** the same headshot everywhere (the hero portrait)
- **Headline:** Freelance Full-Stack Developer | Next.js, Shopify & Custom E-commerce, SaaS & AI Products
- **Short bio (≈160 chars):** Freelance full-stack developer: Next.js sites, Shopify & custom e-commerce, SaaS and AI products. B.Tech AI @ Newton School of Technology, Rishihood University.
- **Long bio:** I'm Akhilesh Kumar, a freelance full-stack developer in India. I build custom Shopify stores, Next.js websites, SaaS products, AI-powered apps, landing pages and custom-coded e-commerce for founders, agencies and companies worldwide. Recent work includes Maison Rivina (full-stack e-commerce), Ornovia (headless Next.js + Sanity storefront) and Krillo (an AI website-audit tool). Portfolio and project enquiries: https://www.akhileshkumar.in

When you create a new profile, add its URL to `SAME_AS` in `src/lib/site.ts`. That feeds the Person schema and is invisible on the page.

---

## 2. Priority 0: do these in the first two weeks

### 2.1 Credits on the sites you built (the best links you can get)

These are real, relevant sites showing exactly the work you want to be hired for. **Fix the dead ones first:**
- travelnepalwithus.com returns 402.
- drhimanshukrishna.com returns 404.
- maddworldcreative.com doesn't resolve in DNS.

**Step 1: ask permission, and make it optional.** Never put a credit requirement in a contract. Google lists that as link spam.

> Hi {name}, would you be OK with a small "Designed & developed by Akhilesh Kumar" line in the site footer? It's completely optional. It'll match your footer style and you can remove it any time. If you're happy with the work, a LinkedIn recommendation or a one-line mention on your About/Credits page would also mean a lot.

**Step 2: footer credit.** Use the client's footer style, keep it visible, and link only your name:

```html
<p>Designed &amp; developed by <a href="https://www.akhileshkumar.in/" rel="nofollow noopener" target="_blank">Akhilesh Kumar</a></p>
```

- Anchor text is always **"Akhilesh Kumar"**. Never "Shopify developer India" or "best Next.js developer"; keyword anchors in footers are a classic spam pattern.
- Use `rel="nofollow"` on sitewide footers across client sites. It's the safe default.

**Step 3: one followed, editorial link per client.** This is the link that actually passes value. Ask for one of:
- an About / Team / Credits page line, e.g. "Website designed and built by Akhilesh Kumar" (linked, no `rel`), or
- a launch post or newsletter mention.

| Site | Best ask |
|------|----------|
| Maison Rivina | Ask now, at handover. Footer credit + a line on /about |
| Ornovia | A "how we built it" note on the headless Sanity storefront |
| Krillo (yours) | Followed footer link "Built by Akhilesh Kumar", plus a /about page with Person schema. **Also 308-redirect `scrutin.vercel.app` to `https://www.krillo.tech/`**, because it serves a duplicate copy of Krillo |
| Maddworld / madworldd.com | A Team or Credits entry (you intern there) |
| Emonetiser | Corporate sites often refuse footer credits; ask for a LinkedIn post or a Partners mention |
| Dr. Himanshu Krishna (once restored) | Footer nofollow only. No testimonials that imply medical endorsement |

Optional extra: add `/humans.txt` on each client site with `Developer: Akhilesh Kumar – https://www.akhileshkumar.in`. Don't put yourself in the client's Organization/Article JSON-LD; they are the publisher.

### 2.2 GitHub (UserAkku)

Right now the website field is **empty**, the name reads "Akhilesh kumar" and the bio is blank.
- Settings → Profile: name **Akhilesh Kumar**, website **https://www.akhileshkumar.in**, short bio from §1.
- In the profile README, add `Portfolio & hire me: https://www.akhileshkumar.in` at the top.
- In the `portfolio` repo, change the homepage from the dead `portfoliouserakku.vercel.app` to the real domain. Also update the README's "Next.js 14". This repo is already **#1 for "Akhilesh Kumar developer portfolio"**, so point it at the site.

Links are nofollow, but GitHub is one of the profiles Google trusts most to identify a developer.

### 2.3 LinkedIn

- Headline from §1.
- Contact info → Website: https://www.akhileshkumar.in (type: Portfolio).
- **Featured:** the portfolio, Krillo, and 2–3 client sites (with their OK).
- **Services page:** Web Development, E-commerce Development, Web Design, Custom Software / SaaS. This gets you into LinkedIn's own service-provider search.
- Ask every client for a recommendation, in their own words.

### 2.4 dev.to (followed links, verified)

dev.to was the only big developer platform where **both the profile link and in-article links were followed**.
- Create the profile with the kit from §1.
- For every post on your blog: wait until Google has indexed the original (2–7 days), then cross-post with front matter `canonical_url: https://www.akhileshkumar.in/blog/<slug>`. The canonical keeps your site as the version that ranks.
- Add one genuinely useful contextual link per post, e.g. to a service page.
- Tags: `nextjs`, `webdev`, `shopify`, `ai`, `saas`.

---

## 3. Priority 1: weeks 3–10

| Opportunity | Link | Cost | Why / how |
|---|---|---|---|
| **One Page Love**: submit the portfolio | Followed (checked) | Free | Authoritative design gallery. It only accepts one-page sites, and your navbar is still anchors + Blog, so **submit before adding "Services" to the navbar**. Category: Unique Inspiration. |
| **CSS Design Awards**: Solo entry | Followed designer credit (checked) | $50 | Puts your name on a respected awards site. Enter the portfolio or Maison Rivina (with OK). One site per quarter at most. |
| **Sanity Exchange**: "Made with Sanity" showcase for Ornovia | Followed to client site | Free | Builds goodwill with the client (makes credit links easier) and shows your name to Sanity's agency audience. |
| **Product Hunt**: launch Krillo | `ugc` | Free | Not a ranking link, but a spike of attention, and newsletters that cover launches give real editorial links. Launch Tue–Thu, write the first maker comment, never buy or trade upvotes. |
| **Show HN**: Krillo | nofollow → followed once it gains points | Free | "Show HN: Krillo – AI website audit tool", with an honest technical first comment. Post once. |
| **freeCodeCamp News**: contributor | Followed in article body (checked) | Free | Apply with 3 samples. Pitch tutorials from real work, e.g. "Build a headless storefront with Next.js 16 and Sanity". |
| **Clutch**: free profile + verified reviews | nofollow (checked) | Free | Lead source and trust signal; its category pages rank for "top Shopify developers in India". Check a solo provider is accepted. Never inflate team size. Ask 3 real clients for verified reviews. |
| **Digital PR**: Featured.com (free), Qwoted (free: 2 pitches/mo), HARO (free) | varies | Free tiers | Answer journalist questions only where you have real expertise: e-commerce builds, Next.js and speed, AI tools for small business, being a student freelancer in India. Sign as "Akhilesh Kumar, freelance full-stack developer (akhileshkumar.in)". |
| **Newton School / Rishihood**: student-achievement feature, StartX | likely followed (.edu.in) | Free | Your most credible third-party source. Email comms with a factual brief (Krillo, live client sites, internships) and ask for a link to akhileshkumar.in and krillo.tech. Ask about StartX for Krillo. |

## 4. Priority 2: nice to have

- **Peerlist** (nofollow): one more consistent profile on an Indian developer network.
- **Contra** (no outbound link): a lead channel.
- **Upwork / Arc / Toptal / Wellfound:** lead channels only, no SEO value. Upwork takes a 0–15% fee per contract.
- **Shopify Partner Program** (free): get free dev stores and build a real Shopify theme so the Shopify page has genuine Shopify proof. Don't claim "Shopify Expert" or "certified" unless you earn it.
- **Stack Overflow:** 2–3 good answers a week in the nextjs, sanity and shopify tags. The profile link only appears once you have reputation.
- **Krillo on SaaSHub / Indie Hackers:** nofollow, discovery only. 3–5 directories at most.
- **Hashnode / Medium:** only as canonical cross-posts. Publish on your site first, always.
- **Awwwards** ($65): only for a genuinely award-level site.
- **Vercel Templates:** open-source a real "Next.js 16 + Sanity storefront starter" with your name in the README. A lasting credit for "Next.js developer".
- **Podcasts:** pitch 5 Indian startup/dev shows directly and ask for a show-notes link.
- **Google Business Profile:** **only** if you meet clients in person locally (service-area business, address hidden). A remote-only freelancer doesn't qualify, and a fake address risks suspension.
- **Skip:** Read.cv (shut down), Bento (now redirects to Linktree), Polywork (domain dead), Land-book (noindex) and Lapa Ninja (nofollow). Mostly worthless for SEO.

---

## 5. 90-day calendar

| Week | Do |
|---|---|
| 1 | Search Console + Bing set up, sitemap submitted (SEO-AUDIT §4). Restore or relabel the 3 dead client sites. Redirect `scrutin.vercel.app` → krillo.tech. GitHub + LinkedIn from §2. |
| 2 | Client credits batch 1: Maison Rivina, Ornovia, Krillo (+ Krillo /about page). Ask each client for a LinkedIn recommendation. |
| 3 | Client credits batch 2: Emonetiser, Maddworld, any restored sites. Sanity Exchange for Ornovia. Start a link-tracking sheet (site, page, anchor, rel, date, last checked). |
| 4 | dev.to, Peerlist, Contra, X profiles (kit from §1); add them to `SAME_AS`. Cross-post the existing blog post to dev.to with canonical. **Submit to One Page Love.** |
| 5 | Blog post #2 on your site (e.g. "Headless e-commerce with Next.js + Sanity", built on Ornovia with permission), then cross-post. |
| 6 | Prepare the Krillo launch: Product Hunt maker profile and assets, Indie Hackers page, SaaSHub, Show HN draft. |
| 7 | Launch Krillo on Product Hunt (Tue–Thu); Show HN on a different day; "How I built Krillo" on /blog. |
| 8 | Clutch profile + 3 verified reviews from real clients. Optional free GoodFirms/DesignRush profile (30 min max). |
| 9 | CSS Design Awards Solo entry. Join the Shopify Partner Program and start a real Shopify build. |
| 10 | Apply to freeCodeCamp News; pitch LogRocket's guest author program (paid) with 3 Next.js topics. |
| 11 | Featured.com / Qwoted / HARO: 3–5 well-matched pitches a week, ongoing. |
| 12 | Pitch NST/Rishihood comms for a student feature; ask about StartX; pitch 5 podcasts. |
| 13 | Review: Search Console → Links (are the credits found?), spot-check every credit link, check the results for "Akhilesh Kumar developer", plan next quarter. |

**Running throughout:**
- One real blog post every 2 weeks: your site first, then dev.to with canonical.
- At every client handover, ask about a credit, a recommendation and a review.

---

## 6. Don't do these (they get sites penalised)

- Buying links, "DA 50+ backlink packages", paid guest posts on "write for us" link farms
- PBNs, expired-domain redirects, web 2.0 link wheels
- Link exchanges and "you link me, I link you" swaps with other freelancers
- Mass directory submission tools; AI-tool-directory spam blasts for Krillo
- Keyword-rich anchors in client credits; making a credit a contract requirement; hidden or same-colour credit links
- Followed sitewide footer links across every client site (use `nofollow`)
- Blog-comment, forum-signature and empty-profile spam
- Fake or incentivised reviews (Clutch, Google, GoodFirms, Product Hunt); buying upvotes
- Inventing facts anywhere: client counts, years of experience, "certified", team size, prices, ratings
- Doorway pages like "Shopify developer in {every city}"
- Cross-posting without a canonical, or publishing on Medium/Hashnode/dev.to before your own site
- A self-written Wikipedia or Wikidata entry (notability rules; it'll be deleted)
- Leaving duplicate deployments indexable (`scrutin.vercel.app`, old `*.vercel.app` portfolio copies)

---

## 7. Realistic expectations

- **Brand queries** ("Akhilesh Kumar developer", "Akhilesh Kumar portfolio"): weeks to a couple of months after indexing and profile cleanup.
- **"Freelance Next.js developer" (+ India):** months. Most winnable service term; helped by dev.to/freeCodeCamp writing and client credits.
- **Shopify terms:** need real Shopify work in the portfolio first.
- **The bare name "Akhilesh Kumar":** long-term. It competes with Wikipedia, IMDb and university pages, and Google mixes results for ambiguous names. The entity work above is how you get onto page 1 in India. Nobody can honestly promise #1.
