export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="flex max-w-[var(--article-max)] flex-col gap-space-2">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="text-balance font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-ink md:text-6xl">
        {title}
      </h1>
      {lede ? <p className="text-pretty text-lg leading-relaxed text-ink-muted">{lede}</p> : null}
    </header>
  );
}
