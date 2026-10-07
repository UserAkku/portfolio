import React from "react";

type CalloutType = "note" | "tip" | "warning" | "insight" | "quote";

interface CalloutProps {
  type?: CalloutType;
  children: React.ReactNode;
}

const config: Record<CalloutType, { label: string; border: string; bg: string; text: string }> = {
  note: {
    label: "Note",
    border: "border-blue-500/40",
    bg: "bg-blue-500/5",
    text: "text-blue-400",
  },
  tip: {
    label: "Tip",
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/5",
    text: "text-emerald-400",
  },
  warning: {
    label: "Warning",
    border: "border-yellow-500/40",
    bg: "bg-yellow-500/5",
    text: "text-yellow-400",
  },
  insight: {
    label: "Key Insight",
    border: "border-yellow-400/60",
    bg: "bg-yellow-400/5",
    text: "text-yellow-300",
  },
  quote: {
    label: "",
    border: "border-zinc-600",
    bg: "bg-zinc-900/60",
    text: "text-zinc-400",
  },
};

export function Callout({ type = "note", children }: CalloutProps) {
  const c = config[type];
  return (
    <div className={`my-8 border-l-2 ${c.border} ${c.bg} px-6 py-4 rounded-r-lg`}>
      {c.label && (
        <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${c.text}`}>
          {c.label}
        </p>
      )}
      <div className="text-zinc-300 leading-relaxed text-base [&>p]:m-0">{children}</div>
    </div>
  );
}
