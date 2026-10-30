import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArticleCard } from "@/components/article-card";
import { ButtonSecondary } from "@/components/button";
import { DisclosureBar } from "@/components/disclosure-bar";
import { ImageFrame } from "@/components/image-frame";
import { getArticle, getArticles, getRelated } from "@/lib/articles";
import { departments } from "@/lib/departments";
import { formatReading, formatUpdated } from "@/lib/format";
import { JsonLd } from "@/components/json-ld";
import { articleMetadata, buildArticleJsonLd } from "@/lib/seo";
import { isCategory } from "@/lib/types";

const layFlatHero =
  "/assets/guides/lay-flat-vs-zip-tray-makeup-bags/hero-open-compare.jpg";
const brushHolderHero =
  "/assets/guides/brush-holders/hero/hero-layngo-cosmo-open-closed.png";

function heroFrame(src: string) {
  if (src === layFlatHero) {
    return {
      alt: "Lay-n-Go COSMO drawstring mat opened flat, beside a KUSSHI Signature zip tray unzipped to a red lining.",
      ratio: "aspect-video sm:aspect-[3/2]",
    };
  }

  if (src === brushHolderHero) {
    return {
      alt: "Lay-n-Go COSMO drawstring bag opened into a round mat with brushes held in elastic loops, and the cinched pouch behind it.",
      ratio: "aspect-square",
    };
  }

  return { alt: "", ratio: "aspect-[4/5] sm:aspect-[3/2]" };
}

export function generateStaticParams() {
  return getArticles().map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    return { title: "Not found" };
  }

  return articleMetadata(article);
}

function ArticleFallback() {
  return (
    <div className="content-wrap flex flex-col gap-space-4 py-space-8" aria-hidden="true">
      <div className="h-3 w-24 bg-accent-soft" />
      <div className="h-16 w-full max-w-xl bg-accent-soft" />
      <div className="aspect-[3/2] max-w-[var(--article-max)] bg-accent-soft" />
    </div>
  );
}

export default function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  return (
    <Suspense fallback={<ArticleFallback />}>
      <ArticleContent params={params} />
    </Suspense>
  );
}

async function ArticleContent({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  if (!isCategory(category)) {
    notFound();
  }

  const article = getArticle(category, slug);

  if (!article) {
    notFound();
  }

  const department = departments[article.category];
  const related = getRelated(article);
  const Content = article.Content;

  return (
    <article className="content-wrap flex flex-col gap-space-5 py-space-8">
      <JsonLd data={buildArticleJsonLd(article)} />
      <header className="flex max-w-[var(--article-max)] flex-col gap-space-2">
        <Link
          href={`/${article.category}`}
          className="eyebrow inline-flex min-h-11 items-center hover:text-accent"
        >
          {department.title}
        </Link>
        <h1 className="text-balance font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-ink md:text-6xl">
          {article.title}
        </h1>
        <p className="text-sm uppercase tracking-[0.14em] text-ink-muted">
          Updated {formatUpdated(article.updated)}
          <span aria-hidden="true"> · </span>
          {formatReading(article.readingMinutes)}
        </p>
      </header>

      <div className="max-w-[var(--article-max)]">
        <ImageFrame
          src={article.heroImage}
          alt={heroFrame(article.heroImage).alt}
          ratio={heroFrame(article.heroImage).ratio}
          priority
          sizes="(min-width: 768px) 720px, 100vw"
        />
      </div>

      {article.toc && article.toc.length > 0 ? (
        <nav aria-label="Contents" className="max-w-[var(--article-max)] border-y border-line py-space-2">
          <p className="eyebrow">In this essay</p>
          <ol className="mt-space-1">
            {article.toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex min-h-11 items-center font-serif text-xl text-ink underline decoration-line underline-offset-4 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      <div className="article-body">
        <Content />
      </div>

      <div className="max-w-[var(--article-max)]">
        <DisclosureBar />
      </div>

      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="mt-space-3">
          <h2
            id="related-heading"
            className="font-serif text-3xl tracking-[-0.03em] text-ink md:text-4xl"
          >
            Further reading
          </h2>
          <div className="mt-space-4 grid gap-space-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      ) : null}

      <div>
        <ButtonSecondary href={`/${article.category}`}>Back to {department.title}</ButtonSecondary>
      </div>
    </article>
  );
}
