import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArticleCard } from "@/components/article-card";
import { ButtonSecondary } from "@/components/button";
import { DisclosureBar } from "@/components/disclosure-bar";
import { ImageFrame } from "@/components/image-frame";
import { buildArticleJsonLd, buildArticleMetadata, serializeJsonLd } from "@/lib/article-seo";
import { getArticle, getArticles, getRelated } from "@/lib/articles";
import { departments } from "@/lib/departments";
import { formatReading, formatUpdated } from "@/lib/format";
import { isCategory } from "@/lib/types";

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

  return buildArticleMetadata(article);
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

  const jsonLd = buildArticleJsonLd({
    title: article.title,
    description: article.description,
    category: article.category,
    slug: article.slug,
    updated: article.updated,
    heroImage: article.heroImage,
    sectionTitle: department.title,
    faq: article.faq,
    howToSteps: article.howToSteps,
  });

  return (
    <article className="content-wrap flex flex-col gap-space-5 py-space-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
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
          alt={
            article.heroImage ===
            "/assets/guides/lay-flat-vs-zip-tray-makeup-bags/hero-open-compare.jpg"
              ? "Lay-n-Go COSMO drawstring mat opened flat, beside a KUSSHI Signature zip tray unzipped to a red lining."
              : ""
          }
          ratio={
            article.heroImage ===
            "/assets/guides/lay-flat-vs-zip-tray-makeup-bags/hero-open-compare.jpg"
              ? "aspect-video sm:aspect-[3/2]"
              : "aspect-[4/5] sm:aspect-[3/2]"
          }
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
