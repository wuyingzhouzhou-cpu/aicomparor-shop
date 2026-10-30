import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import { departments } from "@/lib/departments";
import { formatReading, formatUpdated } from "@/lib/format";
import { articlePath, type ArticleSummary } from "@/lib/types";

export function ArticleCard({ article }: { article: ArticleSummary }) {
  const department = departments[article.category];

  return (
    <article className="group relative flex flex-col">
      <ImageFrame
        src={article.heroImage}
        ratio="aspect-[3/2]"
        sizes="(min-width: 1024px) 340px, 100vw"
      />
      <p className="eyebrow mt-space-2">{department.title}</p>
      <h3 className="mt-space-1 font-serif text-[1.7rem] leading-tight tracking-[-0.02em] text-ink group-hover:text-accent">
        <Link href={articlePath(article)} className="after:absolute after:inset-0">
          {article.title}
        </Link>
      </h3>
      <p className="mt-space-2 text-sm leading-6 text-ink-muted">{article.description}</p>
      <p className="mt-space-2 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
        {formatReading(article.readingMinutes)}
        <span aria-hidden="true"> · </span>
        <span className="sr-only">, updated </span>
        {formatUpdated(article.updated)}
      </p>
    </article>
  );
}
