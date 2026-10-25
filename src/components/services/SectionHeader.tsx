interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  id?: string;
  className?: string;
}

/** Numbered eyebrow + heading used to give the long service pages a clear rhythm */
export default function SectionHeader({ index, label, title, id, className = "mb-12 md:mb-16" }: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 mb-4">
        <span>{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-white/20" />
        <span>{label}</span>
      </p>
      <h2 id={id} className="font-heading text-3xl md:text-[44px] font-bold tracking-tight leading-[1.1] text-foreground text-balance">
        {title}
      </h2>
    </div>
  );
}
