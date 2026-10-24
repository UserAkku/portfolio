import { getAllPosts } from "@/lib/blog";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";
import { SITE_URL, PERSON } from "@/lib/site";

// /llms.txt (llmstxt.org): a plain-markdown summary for AI answer engines and agents
export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();

  const body = [
    `# ${PERSON.name}`,
    "",
    `> ${PERSON.name} is a freelance full-stack developer based in India who builds custom Shopify stores, Next.js websites, SaaS products, AI-powered apps, landing pages and custom-coded e-commerce for founders, agencies and companies worldwide. He is also a B.Tech (AI) student at Newton School of Technology, Rishihood University (2024–2028).`,
    "",
    `- Website: ${SITE_URL}`,
    `- Email: ${PERSON.email}`,
    `- GitHub: ${PERSON.github}`,
    `- LinkedIn: ${PERSON.linkedin}`,
    "",
    "## Services",
    "",
    ...SERVICES.map((s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.summary}`),
    "",
    "## Projects",
    "",
    ...PROJECTS.map((p) => `- [${p.title}](${p.live}): ${p.summary} Stack: ${p.stack.join(", ")}.`),
    "",
    "## Writing",
    "",
    ...posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`),
    "",
    "## Contact",
    "",
    `- Project inquiries: ${SITE_URL}/#contact or ${PERSON.email}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
