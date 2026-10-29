"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import { ButtonSecondary } from "@/components/button";
import type { ArticleSummary } from "@/lib/types";

const sorts = [
  { id: "newest", label: "Newest" },
  { id: "longest", label: "Longest read" },
] as const;

type SortId = (typeof sorts)[number]["id"];

export function ListingBrowser({ articles }: { articles: ArticleSummary[] }) {
  const [sort, setSort] = useState<SortId>("newest");
  const [noticed, setNoticed] = useState(false);

  const ordered = useMemo(() => {
    const next = [...articles];
    next.sort((a, b) => {
      if (sort === "longest") {
        return b.readingMinutes - a.readingMinutes || b.updated.localeCompare(a.updated);
      }
      return b.updated.localeCompare(a.updated);
    });
    return next;
  }, [articles, sort]);

  return (
    <div className="flex flex-col gap-space-4">
      <div className="flex flex-wrap items-center gap-space-1" role="group" aria-label="Sort essays">
        {sorts.map((option) => {
          const active = sort === option.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              className={`min-h-11 border-b px-space-2 text-[12px] uppercase tracking-[0.16em] ${
                active ? "border-accent text-ink" : "border-transparent text-ink-muted"
              }`}
              onClick={() => setSort(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {ordered.length === 0 ? (
        <p className="max-w-[var(--article-max)] text-lg leading-relaxed text-ink-muted">
          This room is still being set. Essays will appear here when they are ready.
        </p>
      ) : (
        <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((article) => (
            <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
          ))}
        </div>
      )}

      {ordered.length > 0 ? (
        <div className="flex flex-col items-start gap-space-2">
          <ButtonSecondary type="button" onClick={() => setNoticed(true)} aria-disabled={noticed}>
            Load more
          </ButtonSecondary>
          <p role="status" className="min-h-6 text-sm text-ink-muted">
            {noticed ? "That is the full edit for now." : ""}
          </p>
        </div>
      ) : null}
    </div>
  );
}
