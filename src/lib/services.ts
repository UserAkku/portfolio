import type { HeroImage, Service } from "./services.types";

export type { HeroImage, Service };

export const SERVICES_HUB = {
  hero: { id: "v1792906975/image_54c86970d095_fm7vek.jpg", position: "center" } as HeroImage,
  metaTitle: "Web Development Services for Startups | Akhilesh Kumar",
  metaDescription:
    "Freelance web developer for startups and brands: Shopify stores, Next.js websites, SaaS MVPs, AI apps, landing pages and custom e-commerce, built end to end.",
  eyebrow: "Services",
  h1: "Freelance Web Development for Startups and Brands",
  intro:
    "I design and build Shopify stores, Next.js websites, SaaS products, AI-powered apps, landing pages and custom e-commerce for founders, agencies and growing companies. One developer from the first call to launch, and you own all of the code.",
};

// Order matches the About section links and the contact form's project types.
// Copy is fact-checked: no invented numbers, client counts, prices or past Shopify work.
export const SERVICES: Service[] = [
  {
    slug: "shopify-developer",
    hero: { id: "v1792906975/image_23efbeb7ef4a_fxeubv.jpg", position: "center" },
    name: "Shopify Development",
    summary: "Custom Shopify stores, Online Store 2.0 themes and headless Shopify storefronts on Next.js, from one developer who also handles speed, SEO and app integrations.",
    linkLabel: "Shopify stores",
    primaryKeyword: "freelance Shopify developer",
    secondaryKeywords: [
      "hire Shopify developer",
      "Shopify developer India",
      "custom Shopify website developer",
      "custom Shopify store development",
      "custom Shopify theme development",
      "headless Shopify developer",
      "Next.js Shopify storefront",
      "Shopify speed optimization",
      "Shopify store setup",
      "Shopify store migration",
    ],
    metaTitle: "Freelance Shopify Developer in India | Akhilesh Kumar",
    metaDescription: "Hire a freelance Shopify developer in India for custom themes, new store builds, headless Shopify with Next.js, speed fixes and integrations. No agency layers.",
    eyebrow: "Shopify developer in India",
    h1: "Freelance Shopify Developer for Custom Stores and Themes",
    intro: "I'm a freelance Shopify developer based in India, building custom stores, Online Store 2.0 themes and headless Next.js storefronts for brands that want more than a template. I work directly with founders, D2C brands and agencies worldwide, on anything from one new section to a full store build.",
    overviewHeading: "Theme or Headless Shopify: Which Fits?",
    overview: [
      "Most Shopify projects start with the same question: is a theme enough, or do you need something custom? There are three honest answers. A well-chosen premium theme, set up properly, is the right call for many new brands: it launches quickly, your team can edit it in the theme editor, and nearly every app works with it. A custom Shopify theme makes sense once your brand or product pages need layouts no theme offers, or you're fighting a theme full of features you never use. Headless Shopify, where a Next.js storefront talks to Shopify through the Storefront API, is for stores that need fully custom experiences, content-heavy pages or one front end shared across channels.",
      "Headless is not an automatic upgrade. You lose the drag-and-drop theme editor unless you add a CMS, many apps that inject code into themes need extra integration work, and you take on a separate front-end codebase to host and maintain. Checkout runs on Shopify either way. So I start from your catalog, your team and what you need to change month to month, and I recommend the simplest build that gets you there. Often that is a custom Online Store 2.0 theme with sections and blocks your team can rearrange, metafields for product data, and lean Liquid that keeps pages fast.",
      "I'll be upfront about my portfolio: the stores I've shipped so far are custom-coded Next.js builds, not Shopify themes. Maison Rivina needed size-level stock, coupon rules and both online and cash-on-delivery payments, and Ornovia is a headless storefront driven by a CMS. That is the same groundwork a serious Shopify build needs: modeling product data, designing cart flows, keeping product pages fast and getting structured data right. On Shopify, the platform already handles checkout, payments and inventory, so more of your budget goes into what customers see and how quickly it loads.",
      "If your brand has outgrown what Shopify comfortably allows, such as pricing or checkout logic the platform won't let you change, or a backend you want to own outright, a fully custom e-commerce build may suit you better, and I offer that as a separate service. Either way, you get a written plan and a fixed-scope quote before any work starts, and the custom code is yours at the end.",
    ],
    deliverables: [
      {
        title: "Custom Shopify store builds",
        body: "A new store set up end to end: theme, collections, product templates, navigation and policies, with payments, shipping and taxes configured alongside you and analytics in place, so the store is ready to take orders on launch day.",
      },
      {
        title: "Custom theme development",
        body: "An Online Store 2.0 theme built around your brand, with sections and blocks your team can rearrange in the theme editor, metafields driving product details, and none of the bundled features you would never use.",
      },
      {
        title: "Theme customization and sections",
        body: "Changes to the theme you already run: new custom sections, redesigned product and collection pages, size guides, bundles or upsell blocks, written in clean Liquid and documented so future theme updates stay manageable.",
      },
      {
        title: "Headless Shopify with Next.js",
        body: "A Next.js storefront built on the Storefront API for brands that need custom experiences or editorial content, with Shopify still running the catalog, orders and checkout in the background.",
      },
      {
        title: "Speed and SEO fixes",
        body: "A performance and technical SEO pass: I find what slows your pages down and confuses search engines, such as heavy app scripts, Core Web Vitals failures, missing structured data and duplicate titles, then fix it and explain each change.",
      },
      {
        title: "Apps, APIs and migrations",
        body: "App setup and custom integrations with your shipping, reviews or inventory tools, plus migrations from WooCommerce, Wix or a custom site, moving products and customers across and mapping old URLs to new ones with redirects.",
      },
    ],
    forWho: [
      "D2C founders launching a first Shopify store who want it to feel custom from day one",
      "Growing brands whose current theme has become slow, cluttered or hard for the team to edit",
      "Agencies that need extra Shopify capacity for theme builds, custom sections and client store fixes",
      "Merchants moving from WooCommerce, Wix or a custom site who want products, customers and URLs moved cleanly",
      "Brands weighing headless Shopify who want a straight answer on whether it is worth the cost",
    ],
    stack: [
      "Shopify Liquid",
      "Online Store 2.0",
      "Shopify CLI",
      "Storefront API",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Vercel",
    ],
    process: [
      {
        title: "Short call and store review",
        body: "Send a message and I'll reply within 48 hours. On a short call we look at your store or idea, what isn't working today, and what you need customers to do.",
      },
      {
        title: "Written plan and fixed quote",
        body: "I send a written plan covering scope, the build approach (theme customization, custom theme or headless), milestones and a fixed-scope quote. No work begins until you've signed off on it.",
      },
      {
        title: "Staff access and layouts",
        body: "You approve a collaborator request or add me as a staff account with only the permissions the job needs, so your login stays yours. Then we agree on layouts for home, collection, product and cart pages.",
      },
      {
        title: "Build on an unpublished theme",
        body: "I work on an unpublished copy of your theme, or a staging deployment for headless, so your live store keeps selling while you preview every change before it goes out.",
      },
      {
        title: "QA, launch and handover",
        body: "I test on real phones and run through checkout, apps, speed and SEO basics, then publish with you. You get the code and a short guide for your team, and post-launch support can be arranged.",
      },
    ],
    projects: ["Maison Rivina", "Ornovia", "Krillo"],
    whyMe: [
      {
        title: "I know the commerce logic",
        body: "I have built carts, size-level inventory, coupons, payment flows and an admin portal from scratch. That makes it easier to see what Shopify already handles for you and where custom code actually earns its place.",
      },
      {
        title: "Speed and SEO from the start",
        body: "I built Krillo, a site-audit tool that runs 200+ checks across performance, SEO, security and accessibility. I apply that same checklist to your theme's scripts, images and structured data before anything goes live.",
      },
      {
        title: "One person, straight answers",
        body: "You talk to the developer writing the code, not an account manager. I will tell you when a premium theme or an existing app is enough, and every line of custom code I write is yours.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to hire a Shopify developer?",
        a: "I quote every Shopify project as a fixed price after a short call, because the cost depends almost entirely on scope. The main drivers are whether you're customizing an existing theme or building a custom one, how many unique templates and sections you need, which apps and integrations are involved, any migration work, and whether the store goes headless. The scope and the price reach you in writing before any work starts, so you know exactly what you're paying for.",
      },
      {
        q: "Should I hire a Shopify freelancer or a Shopify agency?",
        a: "Hire a freelancer when you want one accountable person who plans the build and writes the code, and you'd rather deal with them directly than through a project manager relaying messages. An agency makes more sense when you need several disciplines at once, such as branding, photography, paid ads and development, or a large team on a tight deadline. As a freelance Shopify developer I cover store builds, custom themes, headless work, speed and integrations, and I'll tell you if your project needs more than one person.",
      },
      {
        q: "How long does it take to build a custom Shopify store?",
        a: "It depends mostly on how much of the store is custom: customizing a premium theme with a few new sections is the quickest route, a fully custom theme takes longer, and a headless Next.js storefront takes the longest. Content readiness matters as much as code, because product photos, descriptions and policies are often what holds a launch back. Your written plan sets out milestones and dates, so you can see what lands when.",
      },
      {
        q: "Do I need a custom Shopify theme, or is a premium theme enough?",
        a: "A premium theme is enough for many stores, especially at launch. If a theme from the Shopify Theme Store covers your layouts and your team can run it from the theme editor, customizing it is the cheaper and faster route. A custom Shopify theme pays off when your product pages need a structure no theme supports, when you're stacking apps to patch gaps, or when a bloated theme is dragging down speed. I'll tell you which side you're on during the first call.",
      },
      {
        q: "What is headless Shopify, and is it worth it for my store?",
        a: "Headless Shopify means Shopify still runs products, inventory, orders and checkout, while the storefront customers see is a separate app, which I build with Next.js on the Storefront API. Shopify's own framework for this is Hydrogen. It's worth it when you need experiences a theme can't deliver, heavy editorial content, or one front end across several channels. It costs more to build and maintain, and many theme apps need extra integration work, so for most stores a well-built theme is the better first step.",
      },
      {
        q: "Can you migrate my store from WooCommerce, Wix or another platform to Shopify?",
        a: "Yes. I move products, variants, collections and customers, plus order history where the source platform allows it, using Shopify's import tools or a migration app. Then I build or adapt the theme and set up 301 redirects from your old URLs so existing links and search visibility carry over as cleanly as possible. Customer passwords can't be carried across platforms, so we plan how returning customers will sign in. Before the domain moves, the new store is checked side by side against the old one.",
      },
      {
        q: "Do you need my Shopify login to work on my store?",
        a: "No. You approve a collaborator request or add me as a staff account, and you choose exactly which permissions I get, such as themes, products or apps. Your password stays private, you can see what I have access to, and you can remove that access the moment the project ends. For a headless build I'll also need a Storefront API access token, which you generate from your Shopify admin and can revoke at any time.",
      },
      {
        q: "Who owns the theme code after the project is done?",
        a: "You do. Any custom theme, custom sections, scripts or headless storefront code I write for your project belongs to you, delivered in your store and, for larger builds, in a Git repository you control. The one exception is a premium theme bought from the Shopify Theme Store: its original code stays under the theme developer's license, which is tied to your store, but the customizations I add on top are still yours.",
      },
      {
        q: "Can you make my Shopify store load faster?",
        a: "Usually, yes. Most slow Shopify stores are held back by what the theme and apps add: leftover code from uninstalled apps, scripts loading on every page, oversized images and fonts, and heavy sliders or video above the fold. I audit the store, show you what costs the most, then fix it in an unpublished copy of your theme so you can compare before publishing. I won't promise a specific score, but you'll see the before and after for yourself.",
      },
    ],
  },
  {
    slug: "nextjs-developer",
    hero: { id: "v1792906975/image_b5442c294896_ieg7y7.jpg", position: "top" },
    name: "Next.js Development",
    summary: "Fast, SEO-ready Next.js websites and web apps, from marketing sites and Sanity-powered CMS builds to MVPs, performance fixes and App Router migrations, written in TypeScript you own.",
    linkLabel: "Next.js websites",
    primaryKeyword: "freelance Next.js developer",
    secondaryKeywords: [
      "hire Next.js developer",
      "Next.js developer for hire",
      "Next.js developer India",
      "freelance Next.js developer India",
      "Next.js website development",
      "Next.js web app development",
      "React developer freelance",
      "Next.js and Sanity developer",
      "Next.js App Router migration",
      "Next.js SEO and Core Web Vitals",
    ],
    metaTitle: "Freelance Next.js Developer for Hire | Akhilesh Kumar",
    metaDescription: "Freelance Next.js developer in India building fast, SEO-ready websites and web apps with React, TypeScript and headless CMS. See live work and start a project.",
    eyebrow: "Next.js developer for hire",
    h1: "Freelance Next.js Developer for Fast, SEO-Ready Websites and Web Apps",
    intro: "I build Next.js websites and web apps that load fast, are structured for search and stay easy for your team to update, from marketing sites and headless CMS builds to MVPs with accounts and payments. I'm based in India, work with founders, agencies and product teams worldwide, and write TypeScript code that you fully own.",
    overviewHeading: "When Next.js Is the Right Call",
    overview: [
      "Before hiring a freelance Next.js developer, it is worth settling a more basic question: should this be built on Next.js or WordPress? WordPress is a fair choice for a content-heavy blog that a non-technical team will run on plugins and themes for years. Next.js is the better fit when the site has to be fast, match a custom design exactly, and later grow into a product with logins, dashboards, payments or search. If WordPress or a site builder suits what you describe, I will tell you on the first call rather than sell you a rebuild.",
      "Speed and SEO are the usual reasons to choose Next.js, but the framework only provides the tools. The results come from using them carefully. I render pages on the server or at build time so search engines get complete HTML, give every route its own title, description and canonical URL, add structured data for products, services or articles, and load images and fonts so Largest Contentful Paint stays low and layouts don't jump. Core Web Vitals get checked before launch, not after rankings slip.",
      "If people on your side need to edit content, I pair Next.js with a headless CMS, usually Sanity. Editors get a studio shaped around your actual pages, with clear fields for headings, images and products instead of one giant text box, and webhook revalidation pushes their changes live without a redeploy. That is how Ornovia, a luxury marble-goods storefront, runs: its products and editorial sections are managed in Sanity while the front end stays fast.",
      "Already on Next.js? I also take on upgrades and rescues: moving a Pages Router project to the App Router, bringing an older app up to the current release, or finding out why a site is slow or not being indexed. Because both routers can run in one project, I migrate route by route, keep your URLs or add 301 redirects where they must change, and carry metadata across to protect the rankings you have earned. Whatever the job, the code is TypeScript in your repository, and you own it.",
    ],
    deliverables: [
      {
        title: "Marketing websites",
        body: "Multi-page company and product sites built from your Figma file or designed with you, with server-rendered pages, clean URLs, validated contact forms and animation that stays smooth on mid-range phones.",
      },
      {
        title: "Web apps and MVPs",
        body: "Products with accounts, dashboards and real data: authentication, PostgreSQL with Prisma, API routes and server actions, payments and admin tools, structured so new features don't need a rewrite.",
      },
      {
        title: "Headless CMS sites",
        body: "Next.js paired with Sanity, with content types modelled on your real pages, so your team can publish posts, swap images and update products on their own, without waiting on a developer.",
      },
      {
        title: "Headless commerce",
        body: "Custom Next.js storefronts with product pages, variants, cart, checkout and payments, for brands that want a store designed around their products. Maison Rivina, with Razorpay, COD and per-size inventory, is built this way.",
      },
      {
        title: "SEO and performance fixes",
        body: "An audit of your existing Next.js site, then the fixes: Core Web Vitals, image and font loading, bundle size, metadata, canonicals, sitemaps, structured data and pages Google isn't indexing.",
      },
      {
        title: "App Router migrations",
        body: "Moving a Pages Router project to the App Router, or upgrading to the current Next.js release, with URLs, metadata and redirects handled so the move protects your search rankings instead of resetting them.",
      },
    ],
    forWho: [
      "Founders who need a fast marketing site now and a product on the same codebase later",
      "Agencies that need a Next.js developer to build from their designs inside their process",
      "Teams moving off WordPress or a page builder that has become slow or limiting",
      "Companies with an existing Next.js site that is slow, hard to edit or not ranking",
      "Product teams that want an MVP in clean TypeScript they can keep extending",
    ],
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "PostgreSQL",
      "Prisma ORM",
      "Framer Motion",
      "GSAP",
      "Vercel",
    ],
    process: [
      {
        title: "Brief and call",
        body: "You send a short brief and I reply within 48 hours. Then we have a short call to pin down pages, features, content, integrations and what launch needs to look like.",
      },
      {
        title: "Written plan and quote",
        body: "I send a written plan covering pages, features, stack, milestones and a fixed-scope quote. No work starts until you have read it and agreed to it.",
      },
      {
        title: "Structure and UI",
        body: "I set up routes, data models and the CMS schema, then build the interface from your designs, with a live preview link so you review real pages rather than screenshots.",
      },
      {
        title: "Build and optimize",
        body: "Features, forms, integrations and content go in. Then I tune Core Web Vitals, metadata, structured data, the sitemap and accessibility before anything is called finished.",
      },
      {
        title: "Launch and handover",
        body: "I deploy to Vercel or your preferred host, connect the domain, set up redirects and analytics, and hand over the repository and all account access. Post-launch support can be arranged.",
      },
    ],
    projects: ["Ornovia", "Maison Rivina", "Krillo", "Emonetiser"],
    whyMe: [
      {
        title: "SEO is part of the build",
        body: "During my internship at Nocage I built Next.js and TypeScript public pages and worked on their technical SEO and performance. Metadata, canonicals, structured data and Core Web Vitals are part of my definition of done, not an add-on.",
      },
      {
        title: "I built a site auditor",
        body: "Krillo, my own SaaS, runs 200+ checks across performance, SEO, security, accessibility and UX. Building it taught me what slows sites down and what search engines trip over, and I apply that to every build.",
      },
      {
        title: "Front end to database",
        body: "I handle the database, API, auth and deployment as well as the interface. Maison Rivina, for example, has OTP and Google sign-in, payments and an admin portal. Your marketing site can grow into a product without a second contractor.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to build a Next.js website?",
        a: "Cost depends on what the site needs, so instead of a price list you get a written, fixed-scope quote after a short call. The main drivers are the number of unique page templates, whether designs already exist, CMS setup, custom features like accounts, payments or dashboards, third-party integrations, content migration and animation work. You see the full cost before any work starts.",
      },
      {
        q: "Is Next.js good for SEO?",
        a: "Yes. Next.js is one of the strongest frameworks for SEO because pages can be rendered on the server or at build time, so search engines receive complete HTML, and it has built-in tools for metadata, sitemaps, images and fonts. The framework alone won't rank a site, though. I set a unique title, description and canonical for every page, add structured data, and check Core Web Vitals before launch.",
      },
      {
        q: "Is Next.js better than WordPress for a business website?",
        a: "Next.js is better when speed, a custom design or product features matter; WordPress is better when a non-technical team mainly publishes posts and relies on plugins. A well-built Next.js site has no plugin stack to keep patched and can grow into a web app. Paired with a headless CMS like Sanity, your team still edits content without touching code. For a simple blog run entirely by editors, WordPress is often the sensible pick.",
      },
      {
        q: "How long does it take to build a Next.js website?",
        a: "The timeline is agreed in writing before work starts: the plan I send includes milestones and dates for your specific project. Scope is the biggest factor, since a focused marketing site moves much faster than a web app with accounts, payments and an admin panel. Ready designs and content shorten a project the most, while late content and changing requirements stretch it.",
      },
      {
        q: "Do I have to host my Next.js site on Vercel?",
        a: "No. Vercel, the company behind Next.js, is the simplest option because previews, caching and image optimization work with little setup, but it is not required. Next.js also runs on Netlify, Render, Railway or any server that runs Node.js. I recommend a host based on your traffic, budget and features, and the hosting account stays in your name.",
      },
      {
        q: "Can my team edit content without a developer?",
        a: "Yes. I connect the site to a headless CMS, usually Sanity, and set up a content type for each kind of page, so editors work in plain fields for headlines, images, products or posts rather than a page builder. When they publish, the live site updates without a redeploy. Ornovia, a storefront I built on Next.js and Sanity, works this way.",
      },
      {
        q: "Can you migrate my existing site to Next.js or upgrade it to the App Router?",
        a: "Yes. For a Pages Router project, I move to the App Router route by route, since both can run in the same app, so the site stays live throughout. For a move from WordPress or another platform, I map every existing URL first, keep it or add a 301 redirect, and carry titles, descriptions and content across to protect the rankings you already have.",
      },
      {
        q: "Do you work with agencies and in-house teams?",
        a: "Yes. Agencies can bring me in as a freelance Next.js developer to build from their Figma designs, and in-house teams can use me for a specific feature, migration or performance fix. I work in your repository, follow your conventions and pull request process, and give updates in the Slack channel or project tool your team already uses.",
      },
      {
        q: "What information do you need to give an estimate?",
        a: "A short description of what you're building and who it's for is enough to start. If you have them, also send designs or reference sites, a rough page or feature list, the CMS and integrations you need, your deadline and a budget range. For an existing site, the URL and repository access help. I reply within 48 hours, we have a short call, then you get a written plan and quote.",
      },
    ],
  },
  {
    slug: "saas-development",
    hero: { id: "v1792906975/image_8dcd32e53a98_njsuew.jpg", position: "center" },
    name: "SaaS MVP Development",
    summary: "I scope your SaaS MVP down to the one workflow that matters, then build auth, billing, dashboards and admin in Next.js and PostgreSQL, with code you own.",
    linkLabel: "SaaS MVPs",
    primaryKeyword: "SaaS MVP development",
    secondaryKeywords: [
      "SaaS MVP developer",
      "hire SaaS developer",
      "freelance SaaS developer",
      "build a SaaS MVP",
      "SaaS MVP development India",
      "startup MVP development",
      "Next.js SaaS development",
      "SaaS dashboard development",
      "subscription billing integration",
      "multi-tenant SaaS development",
    ],
    metaTitle: "SaaS MVP Development for Founders | Akhilesh Kumar",
    metaDescription: "SaaS MVP development by a freelance developer in India: auth, billing, dashboards and admin in Next.js and PostgreSQL, code you own. See Krillo, a live SaaS.",
    eyebrow: "Freelance SaaS developer",
    h1: "SaaS MVP Development for Founders and Startups",
    intro: "I'm a freelance SaaS developer in India handling SaaS MVP development for founders, startups and agencies worldwide: sign-up, billing, dashboards and the one workflow your users will pay for. I built and shipped Krillo, a live website-audit SaaS, and I'll build yours in Next.js and PostgreSQL, scoped tight, with code you own.",
    overviewHeading: "How I scope and build your MVP",
    overview: [
      "Most SaaS products share the same shape underneath: a user signs in, gives the app some input, the server does slow work in the background, and the result is saved and shown back to them. Krillo, the website-audit SaaS I built and shipped, follows that shape. You paste a URL, Puppeteer loads the site, more than 200 checks run in the background while progress streams to the screen, results are saved to your account history in PostgreSQL, and you can export a PDF report. That pipeline, not the landing page, is where an MVP succeeds or stalls.",
      "SaaS MVP development is mostly a scoping problem. A first brief is usually a long feature list, and my job on the first call is to find the one workflow people will pay for and move everything else to a later version. The basics still have to be done properly: authentication, a clean database schema, the core workflow, a user dashboard, billing if you charge from day one, and a small admin panel so you can support customers without opening the database. Team seats, granular permissions and extra integrations can usually wait. Multi-tenancy is the exception. If an account will ever hold more than one user, I design the data model for it from the start, because retrofitting it later is slow and risky.",
      "The second decision is who builds it. No-code tools are a fine way to test demand, but products tend to outgrow them once they need custom logic, background jobs or real control over the data. An agency gives you parallel specialists and a project manager. A freelancer gives you a direct line to the person writing the code, so tradeoffs get settled with you on a call instead of through a chain of handoffs. For a focused startup MVP that is often the simpler route, and if your scope genuinely needs a team, I will tell you before you spend anything.",
      "Whoever builds it, you should own it. The repository lives in your GitHub, the app runs on your own Vercel or Railway and database accounts, and payments settle into your own provider account. I stick to widely used tools (Next.js, TypeScript, PostgreSQL with Prisma) so any developer you hire later can pick the code up without a rewrite. Nothing starts until you have approved a written plan and a fixed-scope quote.",
    ],
    deliverables: [
      {
        title: "Auth and user accounts",
        body: "Email and password, passwordless email OTP or Google sign-in, with sessions, password resets and roles handled on the server. I've shipped OTP and Google OAuth in production on Maison Rivina, so I know where the edge cases hide.",
      },
      {
        title: "The core workflow",
        body: "The one thing your users pay for, built properly: validated inputs, background jobs for slow work, retries when external services fail, and results stored in PostgreSQL. In Krillo that meant crawling sites with Puppeteer and generating PDF reports.",
      },
      {
        title: "Subscription billing",
        body: "Plans, trials, upgrades and cancellations through Razorpay or Stripe, with webhooks that update account access automatically and server-side checks on every amount. Paid features are gated in one place, not scattered across the codebase.",
      },
      {
        title: "Dashboards and admin panel",
        body: "A dashboard your users understand at a glance, with history, usage, settings and billing in one place, plus a private admin panel where you can look up accounts, change plans and fix problems without touching the database.",
      },
      {
        title: "Teams and multi-tenancy",
        body: "Organizations, invites and roles, with every record scoped to its tenant through a single data-access layer. If teams come later, the schema is ready for them on day one, so adding them is new code, not a data migration.",
      },
      {
        title: "Launch and clean handover",
        body: "Deployment on your own Vercel or Railway account, environment setup, error logging and analytics, plus written handover notes on setup and architecture, so the next developer you hire can pick the project up without me.",
      },
    ],
    forWho: [
      "Non-technical founders with a validated idea who need someone to build the first real version",
      "Solo founders who want to hire a SaaS developer directly instead of managing an agency",
      "Agencies that need a freelance SaaS developer to build a client's product alongside their team",
      "Startups with a half-built app or a no-code prototype that has hit its limits",
      "Businesses adding a paid tool, customer portal or internal dashboard to what they already sell",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Tailwind CSS",
      "Zod",
      "Razorpay",
      "Vercel",
    ],
    process: [
      {
        title: "Short scoping call",
        body: "You tell me the problem, who the users are and what they will pay for. I reply to every enquiry within 48 hours and come to the call with questions, not a sales pitch.",
      },
      {
        title: "Written plan and fixed quote",
        body: "You get a written plan covering the v1 feature list, what is deliberately cut, the data model, the stack, milestones and a fixed-scope quote. Nothing starts until you approve it.",
      },
      {
        title: "Design the key flows",
        body: "Sign-up, onboarding, the core workflow, the dashboard and billing screens get mapped first, from your designer's files or wireframes I put together, so we agree on behaviour before any code.",
      },
      {
        title: "Build in short milestones",
        body: "I build in short milestones, each ending with a staging link you can click through and comment on. You review working software as it grows, not status reports, and the code sits in your repository throughout.",
      },
      {
        title: "Launch and iterate",
        body: "We launch on your accounts with analytics and error logging in place. Post-launch support can be arranged for fixes and the next round of features, guided by what real users actually do.",
      },
    ],
    projects: ["Krillo", "Maison Rivina"],
    whyMe: [
      {
        title: "I've shipped a real SaaS",
        body: "Krillo is live with accounts, guest audits, background jobs that stream progress, saved audit history and PDF export. The hard parts of an MVP sit behind the landing page, and I've already built them once.",
      },
      {
        title: "You talk to the developer",
        body: "No account manager and no handoffs. The person on your scoping call is the person writing the code, so scope changes and tradeoffs are decided with you directly, in plain English.",
      },
      {
        title: "Product sense, not just tickets",
        body: "At Maddworld I help shape product priorities and technical architecture. On your MVP that means I'll question any feature that doesn't earn its place in v1, before you pay for it.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to build a SaaS MVP?",
        a: "It depends on scope, so I quote after a short call rather than guessing. In SaaS MVP development the main cost drivers are how many user roles you need, whether billing and multi-tenancy are in v1, how many third-party APIs or AI features are involved, and how custom the design is. Cutting features is the cheapest lever you have. After the call you get a written, fixed-scope quote, so the price doesn't move unless the scope does.",
      },
      {
        q: "How long does it take to build a SaaS MVP?",
        a: "It depends on the scope you approve, and the written plan sets out milestones and a target launch date before any work starts. An MVP built around one core workflow moves much faster than one that tries to ship teams, integrations and custom admin tooling at once. Delays usually come from third-party integrations, unclear requirements and features added mid-build, which is why every milestone ends with a staging link you can review and adjust.",
      },
      {
        q: "What is the best tech stack for a SaaS MVP?",
        a: "For most MVPs I recommend Next.js with TypeScript, PostgreSQL through Prisma, and hosting on Vercel, Railway or Render. One language across frontend and backend keeps the codebase small, a relational database fits accounts, plans and permissions, and the tools are common enough that hiring your next developer is easy. I add Redis for queues or caching only when the workload needs it. If you already have a codebase, I'll tell you honestly whether to build on it.",
      },
      {
        q: "Should I hire a freelancer or an agency to build my MVP?",
        a: "Hire a freelancer if your MVP is one focused product and you want to work directly with the person building it. Hire an agency if you need several specialists working in parallel from the start. With me there is no project manager in the middle, so decisions are quick and nothing gets lost in handoffs. If your scope truly needs a team, I'll tell you on the call.",
      },
      {
        q: "Will I own the source code and IP?",
        a: "Yes, you own all of it. The repository lives in your GitHub account from the first commit, and the app runs on hosting, database and payment accounts in your name. There's no proprietary framework or lock-in, and you get handover notes so another developer or your in-house team can take over whenever you want.",
      },
      {
        q: "Can you add subscriptions and payments to my SaaS?",
        a: "Yes. I've shipped Razorpay payments in production on Maison Rivina, with every amount validated on the server. For subscriptions I set up plans, trials, upgrades and cancellations, webhooks that switch access on or off when a payment succeeds or fails, and a billing page where users manage their plan. If most of your customers are outside India, Stripe is usually the better fit, and the same structure applies.",
      },
      {
        q: "Can you build a multi-tenant SaaS?",
        a: "Yes. For most MVPs I use a shared PostgreSQL database where every record carries an organization ID, and tenant filtering lives in one data-access layer instead of being repeated in every query. Invites, roles and per-organization billing sit on top of that. Separate databases per customer only make sense when a contract or compliance rule demands it, and that choice belongs in the written plan, not halfway through the build.",
      },
      {
        q: "What happens after the MVP launches?",
        a: "You get the code, the accounts and written handover notes, and post-launch support can be arranged if you want me to stay on. That usually covers bug fixes, monitoring and the next round of features based on what real users actually do. If you'd rather move it to an in-house team, the handover notes and a conventional stack make that straightforward.",
      },
      {
        q: "Can you take over and finish a half-built SaaS?",
        a: "Often, yes. I start by reading the codebase, running it locally and writing up what's solid, what's risky and what's missing. Then you get a plan and a quote to finish it, plus an honest view on whether any part is cheaper to rebuild than to fix. The same applies to stalled custom code and to no-code prototypes that have hit their limits.",
      },
    ],
  },
  {
    slug: "ai-app-development",
    hero: { id: "v1792906975/image_54c86970d095_fm7vek.jpg", position: "bottom" },
    name: "AI App Development",
    summary: "I build LLM-powered web apps, RAG knowledge tools and AI agents, or add AI features to your existing product, with API costs and data privacy planned from the first prototype.",
    linkLabel: "AI apps",
    primaryKeyword: "AI app development",
    secondaryKeywords: [
      "AI app developer for hire",
      "AI product development freelancer",
      "build AI-powered web app",
      "LLM integration developer",
      "AI MVP development",
      "AI SaaS development",
      "RAG application development",
      "AI agent development",
      "add AI features to existing app",
      "Gemini, Claude and OpenAI API integration",
      "AI developer India freelance",
    ],
    metaTitle: "AI App Development for Startups | Akhilesh Kumar",
    metaDescription: "Freelance AI app developer building LLM-powered web apps, RAG tools and AI agents with Next.js, Gemini and Claude APIs and vector databases. See Krillo live.",
    eyebrow: "Freelance AI app developer",
    h1: "AI App Development: LLM-Powered Products and Features That Ship",
    intro: "I'm a freelance AI app developer in India building LLM-powered web apps, RAG tools and AI agents for founders, agencies and product teams worldwide. I built Krillo, a live website-audit tool where Google Gemini turns findings into specific fixes, and I build the whole app around the model: data, interface, guardrails and cost controls.",
    overviewHeading: "APIs, RAG or a Custom Model?",
    overview: [
      "Founders often assume the hard part of an AI product is the model. Usually it isn't. Hosted models from Google, Anthropic and OpenAI are already very capable, so the real decision is how to use them: a well-designed prompt against an API, retrieval over your own data, or, occasionally, a fine-tuned model. Training a model from scratch is almost never the right call for a startup. My default in AI app development is to start with the simplest option that passes a test set built from your real inputs, and add complexity only when those tests say it is needed.",
      "If your users ask about your documents, products, policies or records, retrieval matters more than which model you pick. The model has to see that content when it answers, not try to remember it. Doing that well means splitting content sensibly, generating embeddings, storing them in a vector database such as pgvector, Pinecone or Qdrant, retrieving the right passages, respecting who is allowed to see what, and citing sources so people can check the answer. Fine-tuning comes later, if at all. It helps when you need a consistent format or tone on a narrow task and have good labelled examples, and it does not replace retrieval.",
      "Cost and privacy are where AI products tend to get into trouble once real users arrive, so I plan for both from the first prototype. On cost: the smallest model that passes the tests, larger models only for the requests that need them, tight context, caching, output caps and per-user limits, with token usage logged per feature. On privacy: model calls stay on the server, only the fields a task needs are sent, personal data is masked where possible, and I check the data-use terms of the exact API plan you will run on.",
      "Krillo, the website-audit tool I built, follows the same rule of giving the model one narrow job. It isn't asked to find problems on its own: automated checks do that, and Gemini works from their structured findings to suggest specific fixes. Deterministic code where the answer is knowable and a model where judgment is needed is how I approach any AI feature, because it keeps the output checkable.",
    ],
    deliverables: [
      {
        title: "AI features for existing apps",
        body: "Summaries, smart search, drafting, classification or data extraction added to the product you already run. LLM calls stay server-side, responses stream into your interface, and usage is logged from day one.",
      },
      {
        title: "RAG and knowledge-base tools",
        body: "Chat and search over your documents, help center, PDFs or product data, with sensible chunking, embeddings, a vector store like pgvector, Pinecone or Qdrant, permission-aware retrieval and citations back to the source.",
      },
      {
        title: "AI agents and workflows",
        body: "Multi-step agents built with LangGraph that call your APIs and tools through function calling or MCP, with clear limits on what they may do and human approval before any risky action.",
      },
      {
        title: "AI MVPs and AI SaaS",
        body: "A complete first version of a product where the model is the core, like Krillo: the AI pipeline plus the interface, accounts, database and reports that make it usable by real customers.",
      },
      {
        title: "Evaluation and guardrails",
        body: "A test set built from your real inputs, structured outputs validated with Zod, fallbacks for when the model fails or times out, and input checks, so prompt and model changes are tested before they ship.",
      },
      {
        title: "Cost and usage controls",
        body: "Model routing, trimmed context, caching, output caps and per-user rate limits, with token spend logged per feature so you can see exactly what each part of the product costs to run.",
      },
    ],
    forWho: [
      "Founders with an AI product idea who need a working version real users can try",
      "SaaS teams that want AI search, summaries or an assistant inside their existing product",
      "Companies with documents, tickets or knowledge bases that their team or customers struggle to search",
      "Agencies that need a dependable developer to build the AI part of a client project",
      "Operations teams that want repetitive multi-step work handled by an agent with human checkpoints",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "Gemini API",
      "Anthropic API",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "PostgreSQL + pgvector",
      "MCP",
    ],
    process: [
      {
        title: "Use-case call",
        body: "You get a reply within 48 hours, then a short call to pin down what the AI should do, what data it will touch and what a good answer looks like for your users.",
      },
      {
        title: "Model, data and cost plan",
        body: "Before any work starts, I send a written plan on model choice, retrieval approach, data handling and how API costs will scale, with a fixed-scope quote attached.",
      },
      {
        title: "Prototype on real data",
        body: "I build the core AI flow first and run it against examples from your business, so we judge real outputs early and settle prompts, retrieval and model choice before the full interface exists.",
      },
      {
        title: "Build and harden",
        body: "Then comes the product around it: streaming interface, auth, database, guardrails, evaluation runs, usage limits and logging. You can test progress yourself at each milestone.",
      },
      {
        title: "Launch and hand over",
        body: "I deploy, document the prompts, data flows and test sets, and hand everything over. You own the code and the API and database accounts, and I can stay on for improvements if you want.",
      },
    ],
    projects: ["Krillo"],
    whyMe: [
      {
        title: "AI already in production",
        body: "Krillo is live, and its Gemini step runs on whatever site someone submits, not a curated demo set, so its fixes have to be specific enough to act on. I build for what happens after the demo.",
      },
      {
        title: "AI is my field of study",
        body: "I'm doing a B.Tech in AI at Newton School of Technology, Rishihood University, and I work hands-on with RAG, LangChain, LangGraph, LlamaIndex, MCP and vector databases. I pick tools for the problem, not the trend.",
      },
      {
        title: "Full-stack, not just prompts",
        body: "The model is a small part of an AI app. I also build the Next.js front end, database, auth, payments and deployment, as on Maison Rivina, so one person is accountable for the whole product.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to build an AI app?",
        a: "There's no fixed price until the use case is clear, so I send a written fixed-scope quote after a short call. What moves the price in AI app development is whether it is a feature in an existing app or a new product, whether it needs RAG over your data and how messy that data is, how many tools an agent must use, and the quality bar. Model API usage is a separate running cost paid to the provider, and the plan explains how it scales.",
      },
      {
        q: "Do I need to train my own model to build an AI product?",
        a: "Almost certainly not. Hosted models from Google, Anthropic and OpenAI handle most text and reasoning tasks well with good prompts and structured outputs. When answers depend on your own content, RAG adds that knowledge at query time. Fine-tuning is worth considering only when you need a consistent format or tone on a narrow task and have good labelled examples. Training from scratch is a research project, not a first product step.",
      },
      {
        q: "Which LLM should I use: OpenAI, Gemini or Claude?",
        a: "Use the one that passes your test cases at the lowest cost and latency, which is why I test before committing. All three are strong, and the differences show up per task: long documents, tool use, structured output, speed, price and data terms. Krillo runs on Gemini, and I also build with the Anthropic API. I keep model calls behind a thin layer in your code, so switching providers later means re-running the tests, not rewriting the app.",
      },
      {
        q: "What is RAG, and does my product need it?",
        a: "RAG, or retrieval-augmented generation, means finding the relevant pieces of your own content and giving them to the model with the question, so answers come from your data instead of the model's memory. You need it if users ask about your documents, products, policies or records, or if that content changes often. You don't need it for generic tasks like rewriting text or classifying tickets. Good RAG is mostly about chunking, retrieval quality, permissions and showing sources.",
      },
      {
        q: "How long does it take to build an AI MVP?",
        a: "That depends mostly on your data and your quality bar, and the written plan you get before work starts includes a timeline with milestones. The biggest variables are how ready your data is, how many systems the AI has to connect to, and how many rounds of testing it takes to reach acceptable answers. Because I prototype the core AI flow on real examples first, you see actual outputs early instead of waiting for the full build to judge the idea.",
      },
      {
        q: "Can you add AI features to my existing website or app?",
        a: "Yes, and it is often the quickest way to get value from AI. I add LLM calls on the server side of your current stack, whether that is Next.js, React with a Node.js or Express backend, or a Python service. API keys never reach the browser, responses stream into your interface, and usage is logged. If your app runs on a stack I'm less suited to, I'll read the codebase first and tell you plainly.",
      },
      {
        q: "How do you keep AI API costs under control?",
        a: "I design for cost from the start instead of reacting to the first large invoice. That means using the smallest model that passes your tests, sending only hard requests to larger models, retrieving the relevant passages rather than whole documents, caching repeated answers, capping output length and rate-limiting each user. Token usage is logged per feature, and I set spend limits or budget alerts wherever the provider supports them, so a spike shows up before the invoice does.",
      },
      {
        q: "Is my data safe when using LLM APIs?",
        a: "It can be, if the system is designed for it. Paid API plans from the major providers generally state that they do not train on your requests by default, but terms vary by plan and free tiers can differ, so I check the exact plan you will use. I send only the fields a task needs, mask personal data where possible, keep calls server-side, store embeddings in your own database and enforce permissions at retrieval. If data must never leave your servers, we can discuss self-hosted open-weight models.",
      },
      {
        q: "Who owns the code, prompts and AI accounts?",
        a: "You do, including the parts specific to AI. Model API keys, the vector database and hosting sit under your own accounts, so nothing depends on me to keep running. Prompts, evaluation test sets and notes on why each prompt is written the way it is are part of the handover, so another developer can change them safely. If you'd like me to keep improving the product after launch, post-launch support can be arranged.",
      },
    ],
  },
  {
    slug: "landing-page-development",
    hero: { id: "v1792906975/image_6f41d61ce27b_tuzuvi.jpg", position: "center" },
    name: "Landing Page Development",
    summary: "Custom landing page design and development for SaaS launches, startups and campaigns, with editorial layouts, purposeful motion and Next.js builds that load fast.",
    linkLabel: "Landing pages",
    primaryKeyword: "landing page developer",
    secondaryKeywords: [
      "freelance landing page developer",
      "landing page designer and developer",
      "hire landing page designer",
      "custom landing page design and development",
      "custom landing page development",
      "high-converting landing page",
      "SaaS landing page developer",
      "startup landing page design",
      "Next.js landing page",
      "landing page developer India",
      "animated landing page",
      "GSAP landing page",
      "Framer Motion landing page",
    ],
    metaTitle: "Landing Page Developer for SaaS & Startups | Akhilesh Kumar",
    metaDescription: "Freelance landing page designer and developer. Custom-coded Next.js landing pages for SaaS launches, startups and campaigns, with motion that still loads fast.",
    eyebrow: "Custom landing page development",
    h1: "Landing Page Developer: Fast, Custom-Coded Pages Built to Convert",
    intro: "I design and build custom-coded landing pages for SaaS founders, startups and agencies: launch pages, product pages, waitlists and campaign pages with editorial layouts and GSAP or Framer Motion animation. Each one is built in Next.js to load fast on a phone, and you own the code when it ships.",
    overviewHeading: "Custom Code, Webflow or Framer?",
    overview: [
      "A landing page has one job: get the right visitor to take one action. That depends on four things: a message they understand in the first screen, proof placed next to the claim it supports, a page that loads fast on a mid-range phone, and a single call to action that every section leads back to. Design and motion make a product feel credible, but only when they serve those four. So when founders look for a landing page developer, the first question is not who can build it, but how it should be built.",
      "Webflow, Framer and page builders are good tools, and sometimes they are the right answer. If your marketing team will rebuild sections every week, the design fits the platform's patterns and you are happy paying for the plan, a builder is quicker to edit, and that is what I will recommend. The limits tend to show up later: scroll animation that gets heavy, platform scripts you cannot remove, form handling that runs through the platform, and a page that lives outside your product's codebase.",
      "Custom code makes sense when the page has to feel distinct or work closely with your product. I build in Next.js with Tailwind CSS, so the page is server-rendered, images are served in modern formats, and visitors download only the JavaScript the page needs. A SaaS or startup landing page can share components with your app, sit in the same repository and send signups straight to your database or CRM. Spinning up a variant for a new campaign or audience means reusing components, not rebuilding the page.",
      "Motion is where I spend the most care. On Maddworld I used GSAP with ScrollTrigger, Lenis smooth scroll and clip-path image reveals; on Emonetiser, staggered Framer Motion reveals and animated SVG beam flows. My rule is simple: content renders first, animation layers on top without delaying it, and the motion switches off for visitors who prefer reduced motion. The page should feel crafted and still open quickly on a weak connection.",
    ],
    deliverables: [
      {
        title: "Page design, not a template",
        body: "A layout designed around your message and brand, with type, spacing, section order and the mobile view planned together. If your designer or agency already has a Figma file, I build from it faithfully instead.",
      },
      {
        title: "Motion that earns its place",
        body: "Scroll reveals, staggered headlines, SVG line work and hover states in GSAP or Framer Motion, timed to pull attention toward the call to action and switched off for visitors who prefer reduced motion.",
      },
      {
        title: "Fast, responsive build",
        body: "A responsive page in Next.js and Tailwind CSS with careful font loading, compressed images and no unnecessary scripts, so it stays quick on mobile data and holds its layout on every common screen size.",
      },
      {
        title: "Forms wired to your tools",
        body: "Signup, waitlist or contact forms with React Hook Form and Zod validation, delivered to your inbox, CRM, spreadsheet, Slack or database, with spam protection and a clear success state.",
      },
      {
        title: "SEO and analytics setup",
        body: "Titles, meta descriptions, Open Graph images, structured data and a sitemap, plus analytics with events on the buttons and forms that matter, so you can see what the page is actually doing.",
      },
      {
        title: "Code you own",
        body: "The repository and hosting sit in your own accounts, typically GitHub plus Vercel or Netlify, so you are never tied to me for changes. An optional Sanity setup lets your team edit copy and images themselves.",
      },
    ],
    forWho: [
      "SaaS founders launching a product, a new feature or a waitlist before the app is ready",
      "Startups whose template site no longer matches the quality of the product behind it",
      "Agencies with a finished design that needs a developer who keeps the motion and detail intact",
      "Marketers running paid campaigns who need one focused page with tracking set up properly",
      "Founders and consultants who want a personal brand site that feels crafted, not assembled",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP + ScrollTrigger",
      "Lenis",
      "React Hook Form + Zod",
      "Sanity CMS",
      "Vercel",
    ],
    process: [
      {
        title: "Brief and short call",
        body: "Send a few lines through the form below. I reply within 48 hours, and we book a short call on the audience, the offer, the one action you want visitors to take and any launch date.",
      },
      {
        title: "Plan and fixed quote",
        body: "The plan spells out the sections, who supplies copy and images, motion ideas, integrations, the timeline and a fixed-scope quote. You approve it before I start, so we both know exactly what the page includes.",
      },
      {
        title: "Design and preview",
        body: "I lay out the page section by section, hero and message first, and you get a preview URL to check real type, spacing and motion on your own phone instead of a static mockup.",
      },
      {
        title: "Build, motion and polish",
        body: "I finish the responsive build, add the animation, connect forms and analytics, then run a performance and accessibility pass on desktop and a real mid-range phone before calling it done.",
      },
      {
        title: "Launch and hand-off",
        body: "I deploy to your domain, confirm that forms and tracking fire in production, and hand over the repository. Post-launch help with edits, new sections or campaign variants can be arranged if you need it.",
      },
    ],
    projects: ["Emonetiser", "Maddworld", "Ornovia", "Krillo"],
    whyMe: [
      {
        title: "Motion without the lag",
        body: "I have shipped GSAP ScrollTrigger, Lenis and Framer Motion work on live sites like Maddworld and Emonetiser, and I treat load time as part of the design, so animation doesn't hold back the first screen.",
      },
      {
        title: "Design and code, one person",
        body: "You deal with me directly, and the person choosing type, spacing and motion is the one writing the code. My internship at Nocage covered UI/UX alongside Next.js public pages, so design intent survives the build.",
      },
      {
        title: "Measured, not guessed",
        body: "Paid clicks are wasted on a slow or untracked page. Before launch I confirm every analytics event fires, then test speed and layout shift on a mid-range phone, the kind of performance checks I automated in Krillo.",
      },
    ],
    faqs: [
      {
        q: "How much does a custom landing page cost?",
        a: "Each landing page is priced on its own scope: once we have talked it through, I send a written fixed quote rather than a figure from a rate card. Price is driven by the number of sections, whether I design the page or build from your design, how much custom motion it needs, who writes the copy, and integrations like a CRM or CMS. The price is agreed before work starts and only changes if the scope does.",
      },
      {
        q: "How long does it take to build a landing page?",
        a: "A single focused page is one of the quicker projects I take on, but I set the exact date in the written plan rather than quote a generic turnaround. It depends on the number of sections, the amount of motion and how quickly copy and feedback come back. If you have a launch date, tell me on the call and I will say honestly whether it is realistic, and what to cut if it is tight.",
      },
      {
        q: "What makes a landing page convert?",
        a: "A landing page converts when the right visitor understands the offer quickly and sees one obvious next step. In practice that means a headline that states the outcome, evidence such as screenshots, logos or results sitting beside the promise it backs up, a short form, no competing links, and fast loading on mobile. After launch, analytics events on the main buttons show you what to change next.",
      },
      {
        q: "Should I use Webflow or Framer, or get a custom-coded landing page?",
        a: "Use Webflow or Framer if your team wants to edit and rebuild pages often without a developer and the design fits what the platform does well. Choose custom code when you want motion beyond presets, full control over performance, forms connected to any tool, the page inside your product's codebase, or no lock-in to one builder's plan. Plenty of good pages run on builders; the deciding factor is usually who will maintain the page.",
      },
      {
        q: "Do you write the copy, or do I provide it?",
        a: "Usually you provide the core message and facts, and I shape them for the page. You know your product and customers best, so I ask for the offer, the audience and the proof you have, then help with structure, headline options and button text so the words fit the layout. If you need full copywriting, we agree on that in the written plan before work starts.",
      },
      {
        q: "Will my landing page be fast and SEO-friendly?",
        a: "Yes, speed and search basics are part of every build, not extras. The page is server-rendered with optimized images and fonts, and animation loads after the content rather than in front of it. It ships with titles, meta descriptions, Open Graph images and structured data, and I run it through Lighthouse before launch. I can't promise rankings, but the technical groundwork will be done properly.",
      },
      {
        q: "Can you connect the form to my email, CRM or WhatsApp?",
        a: "Yes. Forms are validated with React Hook Form and Zod, then sent wherever you work: your inbox through a form service like Web3Forms, a CRM or spreadsheet through its API, a Slack channel, or your own database for a waitlist. For WhatsApp, I add a click-to-chat button with a prefilled message. Spam protection and a clear success message are included.",
      },
      {
        q: "Can I edit the landing page myself after launch?",
        a: "Yes, if we plan for it. I can move the page's copy and images into Sanity CMS, the headless setup behind Ornovia, so your team can change headlines, images and sections from a dashboard. If edits will be rare, a plain coded page is simpler, and post-launch support can be arranged for changes. Either way, you own the repository and can hand it to any developer.",
      },
      {
        q: "Do you work with clients outside India?",
        a: "Yes. I'm a landing page developer based in India and work remotely, so your location changes very little. We agree the scope over email and a call booked in hours that overlap with yours, and written plans and preview links let you review progress without waiting on meetings. The steps are the same in any time zone: a short call, a written plan and quote, then the build.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    hero: { id: "v1792906975/image_b5442c294896_ieg7y7.jpg", position: "bottom" },
    name: "Custom E-commerce Development",
    summary: "Custom-coded and headless online stores in Next.js, with server-validated checkout, payment integration and a CMS or admin your team can run without a developer.",
    linkLabel: "Custom e-commerce",
    primaryKeyword: "custom ecommerce website development",
    secondaryKeywords: [
      "headless ecommerce developer",
      "custom ecommerce developer",
      "Next.js ecommerce developer",
      "ecommerce website developer India",
      "custom online store development",
      "headless commerce development",
      "Sanity CMS ecommerce",
      "D2C brand website development",
      "luxury ecommerce website design",
      "payment gateway integration",
      "Razorpay integration",
    ],
    metaTitle: "Custom E-commerce Website Development | Akhilesh Kumar",
    metaDescription: "Custom and headless e-commerce website development in Next.js, with Sanity CMS, Razorpay checkout and code you own. See Maison Rivina and Ornovia live.",
    eyebrow: "Freelance e-commerce developer",
    h1: "Custom and Headless E-commerce Website Development",
    intro: "I build custom-coded online stores and headless storefronts in Next.js for D2C brands, founders and agencies who need more than a template can offer. You get the catalog, checkout and admin your business actually runs on, built for speed and search, and you own every line of the code.",
    overviewHeading: "Shopify, Custom or Headless: How to Choose",
    overview: [
      "There are three ways to get a serious online store: a hosted platform like Shopify, custom e-commerce website development from the ground up, or headless, where Next.js renders the storefront and a CMS or commerce backend holds the data. Shopify is the right call when you need to launch quickly with a standard catalog and can lean on its app ecosystem. It starts to strain when your checkout rules, product model or brand experience no longer fit a theme, and every workaround becomes another monthly app fee.",
      "A fully custom build makes sense when your business rules are what set you apart: size-level stock, coupon and shipping logic, cash on delivery, sign-in flows and an admin shaped around how your team works. Headless suits brands where presentation sells, and where editors need to change products, lookbooks and pages without waiting on a developer. Both give you full control over speed and SEO, because no theme or app layer sits between your code and the browser.",
      "Maison Rivina, a quiet-luxury Indian apparel label, is the custom route in practice. I built the platform in Next.js 16: color and size variants with per-size inventory, a server-validated checkout covering coupons, the free-shipping threshold, Razorpay and cash on delivery, email OTP and Google sign-in, wishlists, reviews with photo uploads, live search and a private admin portal. Ornovia is the headless route: a Next.js storefront for handcrafted marble goods, with content managed in Sanity and pushed live through webhook revalidation the moment an editor publishes.",
      "My approach is to pick the lightest setup that will still fit your business as it grows, not the most impressive one. On the first call I ask about your catalog, who will edit it, your payment and shipping rules, and where your customers come from. If a well-built Shopify store will do the job, I will tell you. If not, you get a written plan that names the stack, the scope and the trade-offs before any code is written. Whichever route we take, page speed, structured data and a short path to checkout are part of the build, because they decide whether traffic turns into orders.",
    ],
    deliverables: [
      {
        title: "Custom Next.js storefront",
        body: "A storefront designed and coded around your brand rather than adapted from a theme: home, collection, product and content pages, server-rendered in Next.js so they load fast and search engines can read them in full.",
      },
      {
        title: "Cart and checkout logic",
        body: "A persistent cart and a checkout where the server, not the browser, works out prices, stock, coupons, shipping thresholds and cash-on-delivery rules, so totals come from your rules rather than whatever the browser sends.",
      },
      {
        title: "Payment gateway integration",
        body: "Razorpay, Stripe or the gateway your market uses, wired in with server-side order creation and payment verification, so an order is only marked paid once the provider confirms it.",
      },
      {
        title: "Catalog and CMS setup",
        body: "Products, variants, collections and editorial pages managed in Sanity CMS or a custom admin, with images and video delivered through Cloudinary, so your team can update the store without calling a developer.",
      },
      {
        title: "Accounts, orders and admin",
        body: "Customer sign-in with email OTP or Google, order history, wishlists and reviews, plus a private admin portal for products, stock and orders, scoped to what your team actually uses every day.",
      },
      {
        title: "Technical SEO and structured data",
        body: "Clean URLs, per-page metadata, Product and BreadcrumbList JSON-LD, an image sitemap and sensible robots rules, so product pages are eligible for rich results and crawlers spend their time on pages that sell.",
      },
    ],
    forWho: [
      "D2C brands that have outgrown a template and need checkout or catalog rules a theme cannot handle",
      "Founders launching a new label who want the store to feel as considered as the product",
      "Agencies with a finished store design that need a developer to build the headless front end",
      "Luxury and design-led brands where editorial presentation sells the product as much as the price",
      "Indian sellers who need Razorpay, cash on delivery and INR pricing handled properly from launch",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "PostgreSQL",
      "Prisma ORM",
      "Razorpay",
      "Cloudinary",
      "Zustand",
      "Vercel",
    ],
    process: [
      {
        title: "Scoping call",
        body: "Tell me about the brand, the catalog and who will run the store, and I'll get back to you within 48 hours. The call then pins down scope, payment and shipping rules, and any platform you already use.",
      },
      {
        title: "Stack, scope and quote",
        body: "A written plan sets out the route (custom, headless or a hosted platform), pages, integrations and timeline, alongside a fixed-scope quote. Work begins only once you have read and approved it.",
      },
      {
        title: "Design and build",
        body: "I build the storefront, catalog and checkout in stages on a private preview link, so you click through real pages and give feedback while changes are still cheap to make.",
      },
      {
        title: "Test and launch",
        body: "Before launch I run test orders through every payment path, check stock, coupon and shipping edge cases, verify structured data and redirects, then deploy to your own hosting and domain.",
      },
      {
        title: "Handover and support",
        body: "You get the repository, the hosting and CMS accounts, and a walkthrough of managing products and orders. The code is yours, and post-launch support can be arranged if you want it.",
      },
    ],
    projects: ["Maison Rivina", "Ornovia"],
    whyMe: [
      {
        title: "I have shipped the hard parts",
        body: "Maison Rivina's checkout is code I wrote, from per-size stock and coupon rules to Razorpay and cash on delivery. That is where a store quietly loses money when the logic is wrong, so it gets the most testing.",
      },
      {
        title: "SEO built in, not bolted on",
        body: "At Nocage I worked on technical SEO and performance for Next.js public pages, and Maison Rivina ships Product and Breadcrumb structured data. Metadata, sitemaps and Core Web Vitals sit in the build plan from day one.",
      },
      {
        title: "Advice before code",
        body: "Because I also take on Shopify builds, I have no reason to push you toward the biggest project. If a theme-based store fits your catalog and budget, I will say so on the first call.",
      },
    ],
    faqs: [
      {
        q: "How much does a custom e-commerce website cost?",
        a: "I quote custom e-commerce website development as a fixed price for each store, after a short call, rather than from a price list. The main cost drivers are the number of page templates, how complex your products are (variants, per-size stock, bundles), checkout rules such as coupons, shipping thresholds and cash on delivery, customer accounts, the admin you need, and any migration from an existing store. That quote reaches you in writing, with the scope spelled out, before any work starts.",
      },
      {
        q: "Shopify or a custom e-commerce website: which should I choose?",
        a: "Choose Shopify if you want to launch quickly with a standard catalog and are happy working within its themes and apps. Choose a custom or headless build when your checkout rules, product data or brand experience do not fit a theme, when app fees keep stacking up, or when you want full control over speed and SEO. I work on both, so my recommendation follows your catalog, team and budget rather than what I would prefer to build.",
      },
      {
        q: "What is headless e-commerce?",
        a: "Headless e-commerce separates the storefront your customers see from the system that stores products, content and orders. The front end is a custom app, usually Next.js, that pulls data from a CMS such as Sanity or a commerce backend through an API. You get full design freedom and fast pages, while your team keeps a friendly dashboard. Ornovia works this way: a Next.js storefront with every product and page managed in Sanity.",
      },
      {
        q: "How long does it take to build an e-commerce website?",
        a: "A headless storefront with a CMS-managed catalog is usually the quicker build, while a full custom platform with accounts, checkout logic, payments and an admin portal takes longer. You get a specific timeline in the written plan before we start. What most often stretches a schedule is late product data, unclear shipping and returns rules, or design changes after the build begins, so we settle those early.",
      },
      {
        q: "Which payment gateways can you integrate?",
        a: "Most gateways with a proper server-side API, including Razorpay, Stripe, PayPal, Cashfree and PhonePe. Razorpay is the one I have shipped in production, on Maison Rivina, alongside cash on delivery. For international stores, Stripe or PayPal are the usual picks. Whatever the provider, I create orders on the server, verify each payment before marking an order paid, and handle failed or abandoned payments so your order records stay accurate.",
      },
      {
        q: "Can I manage products, prices and content myself after launch?",
        a: "Yes. Depending on the build, you manage products, prices, stock, collections and editorial pages in Sanity CMS or in a custom admin portal designed around your workflow. Images and video go through Cloudinary, so uploads are resized and optimized automatically. At handover I walk you through adding a product, running a sale and updating pages, and you keep full ownership of the code and every account.",
      },
      {
        q: "Is a custom e-commerce site good for SEO?",
        a: "Yes, when SEO is part of the build from the start rather than an afterthought. Product and category pages are server-rendered so crawlers see the full content, each page gets its own title and description, structured data describes products and breadcrumbs, and cart, checkout and account pages stay out of the index. Speed is handled at the source, with optimized images and lean JavaScript, rather than with yet another app.",
      },
      {
        q: "Can you move my existing store to a headless setup?",
        a: "Yes. I can keep your current platform as the backend and build a new Next.js storefront on top of it, or migrate your products and content to a fully custom setup. Either way, every old URL gets a redirect to its new address to protect the search traffic you already have, and test orders run end to end before any live traffic is switched over.",
      },
      {
        q: "Do you work with brands and agencies outside India?",
        a: "Yes. I am based in India and work remotely with founders, agencies and companies worldwide. Everything runs over email and video calls, I reply within 48 hours, and the written plan sets out scope, milestones and how we will communicate before any work starts. For Indian brands I handle INR pricing, Razorpay and cash on delivery; for international stores I set up the currency and gateway your market expects.",
      },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
