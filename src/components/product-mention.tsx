type ProductMentionProps = {
  name: string;
  note: string;
  href: string;
};

export function ProductMention({ name, note, href }: ProductMentionProps) {
  return (
    <aside className="product-mention border border-line bg-surface px-space-3 py-space-3">
      <p className="eyebrow">Mentioned</p>
      <p className="mt-space-2 font-serif text-2xl leading-tight text-ink">{name}</p>
      <p className="mt-space-2 text-base leading-7 text-ink-muted">{note}</p>
      <a
        href={href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-space-1 inline-flex min-h-11 items-center text-[12px] uppercase tracking-[0.16em] text-accent underline decoration-1 underline-offset-4"
      >
        View the maker
        <span className="sr-only">
          : {name} (opens in a new tab)
        </span>
      </a>
    </aside>
  );
}
