import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout } from "./Callout";
import { DiagramBox } from "./DiagramBox";
import { Accordion } from "./Accordion";
import React from "react";

const components = {
  Callout,
  DiagramBox,
  Accordion,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-14 mb-5 scroll-mt-24 pb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="font-heading text-lg font-bold text-zinc-200 mt-8 mb-3 scroll-mt-24" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-zinc-300 leading-[1.85] text-base md:text-[1.0625rem] mb-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-yellow-400 underline underline-offset-4 decoration-yellow-400/40 hover:decoration-yellow-400 transition-all"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="text-zinc-300 my-5 ml-5 space-y-2 list-disc marker:text-yellow-400" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="text-zinc-300 my-5 ml-5 space-y-2 list-decimal marker:text-yellow-400" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed pl-1" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="my-8 border-l-2 border-zinc-600 bg-zinc-900/60 px-6 py-4 rounded-r-lg text-zinc-400 italic text-lg leading-relaxed" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="my-8 rounded-xl border border-white/10 overflow-hidden">
      <pre className="p-5 overflow-x-auto text-sm leading-relaxed bg-zinc-950 font-mono" {...props} />
    </div>
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm text-zinc-300" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-zinc-900 border-b border-white/10 text-xs uppercase tracking-widest text-zinc-500" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-semibold" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 border-t border-white/5" {...props} />
  ),
  hr: () => null,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-foreground" {...props} />
  ),
};

interface BlogMDXProps {
  source: string;
}

export function BlogMDX({ source }: BlogMDXProps) {
  return (
    <div className="blog-content">
      <MDXRemote
        source={source}
        components={components as never}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        }}
      />
    </div>
  );
}
