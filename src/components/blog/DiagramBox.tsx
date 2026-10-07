import React from "react";

interface DiagramBoxProps {
  children?: React.ReactNode;
  text?: string;
  title?: string;
  base64Text?: string;
}

export function DiagramBox({ children, text, title, base64Text }: DiagramBoxProps) {
  let content = text || "";
  
  if (base64Text) {
    try {
      content = Buffer.from(base64Text, 'base64').toString('utf-8');
    } catch (e) {
      content = "Error decoding base64";
    }
  } else if (!content && typeof children === "string") {
    content = children;
  } else if (!content && Array.isArray(children)) {
    content = children.join("");
  }

  const lines = content ? content.split("\n") : [];

  return (
    <div className="my-10 rounded-xl border border-zinc-800/80 bg-[#09090b] overflow-hidden shadow-2xl">
      {title && (
        <div className="px-5 py-3 border-b border-zinc-800/80 bg-zinc-900/30">
          <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
            {title}
          </span>
        </div>
      )}
      <div className="p-6 md:p-8 overflow-x-auto">
        <pre className="font-mono text-[13px] leading-[1.6] text-zinc-200 min-w-max selection:bg-zinc-800">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {parseLine(line)}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

function parseLine(line: string) {
  if (!line.trim()) return <div className="h-4" />;
  
  // Match:
  // 1. Structural characters: │ ├ ─ └ ┌ ┐ ┘ ┼ ┬ ┴ ▼ ▲ → ←
  // 2. Standalone pipes and arrows: | v -> <- (surrounded by spaces or string boundaries)
  // 3. Parentheses comments: (hash of...)
  const tokenRegex = /([│├─└┌┐┘┼┬┴▼▲→←]+)|(?<=\s|^)(\||v|->|<-)(?=\s|$)|(\(.*?\))/g;
  
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  line.replace(tokenRegex, (match, box, arrow, parens, index) => {
    if (index > lastIndex) {
      elements.push(<span key={`${index}-text`} className="text-zinc-200">{line.slice(lastIndex, index)}</span>);
    }

    if (parens) {
      elements.push(<span key={index} className="text-zinc-500 italic">{match}</span>);
    } else if (box || arrow) {
      elements.push(<span key={index} className="text-zinc-600">{match}</span>);
    }

    lastIndex = index + match.length;
    return match;
  });

  if (lastIndex < line.length) {
    elements.push(<span key={`${lastIndex}-end`} className="text-zinc-200">{line.slice(lastIndex)}</span>);
  }

  return elements.length > 0 ? elements : <span className="text-zinc-200">{line}</span>;
}
