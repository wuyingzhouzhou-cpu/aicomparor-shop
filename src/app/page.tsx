import {feedIndex,liveProducts} from "@/lib/project-feed";
import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { ReaderCommentCarousel } from "@/components/reader-comment-carousel";
import { connection } from "next/server";
import { Suspense } from "react";

import { DailyProductCarousel } from "@/components/daily-product-carousel";
import { CategoryCard } from "@/components/category-card";
import { DisclosureBar } from "@/components/disclosure-bar";
import { getEditorsPicks } from "@/lib/articles";
import { homeDepartments } from "@/lib/departments";

export const metadata: Metadata = {
  title: {
    absolute: "AiComparor — Shopping guides for women",
  },
  description:
    "Compare clothing, shoes, beauty and home tech with shopping guides for women in the US.",
  alternates: {
    canonical: "https://www.aicomparor.shop/",
  },
  openGraph: {
    type: "website",
    url: "https://www.aicomparor.shop/",
    title: "AiComparor — Shopping guides for women",
    description:
      "Compare clothing, shoes, beauty and home tech with shopping guides for women in the US.",
    siteName: "AiComparor",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiComparor — Shopping guides for women",
    description:
      "Compare clothing, shoes, beauty and home tech with shopping guides for women in the US.",
  },
};

const editorialPhotos: Record<string, [string, string]> = {
  "amazon-us-b000b63o0q": ["4711 Original Eau de Cologne", "/assets/perfume/neroli-at-dusk/hero/4711-original-edc-splash.jpg"],
  "amazon-us-b08zxy1b7h": ["Mugler Alien Eau de Parfum", "/assets/perfume/jasmine-perfume-bright-vs-rich/hero.webp"],
  "amazon-us-b0chsdjd5w": ["TOCCA Mini Discovery Set", "/assets/perfume/perfume-discovery-sets-spray-vs-dabber/hero.webp"],
};

async function DailyFeature() {
  const slides = (await liveProducts()).flatMap(product => {
    const editorial = editorialPhotos[product.slug];
    const image = product.image || editorial?.[1];
    return image ? [{ slug: product.slug, title: editorial?.[0] ?? product.title, image, merchant: product.merchant }] : [];
  }).sort((a, b) => a.slug.localeCompare(b.slug));
  if (!slides.length) return null;
  await connection();
  return <DailyProductCarousel slides={slides} initialTime={new Date().getTime()} />;
}

export default async function HomePage() {
  const picks = getEditorsPicks();
  const latest=(await feedIndex()).filter(row=>row.kind==="article").slice(0,8);

  return (
    <div className="content-wrap flex flex-col gap-space-8 py-space-8">
      <div className="grid items-start gap-space-4 lg:grid-cols-[1.05fr_1fr] lg:gap-space-6">
        <section aria-labelledby="readers-heading">
          <p className="eyebrow">From Reddit</p>
          <h1 id="readers-heading" className="my-3 font-serif text-4xl leading-none tracking-tight md:text-5xl">
            What readers are asking
          </h1>
          <ReaderCommentCarousel />
        </section>
        <Suspense fallback={<div aria-label="Loading daily picks" className="aspect-square border border-line bg-surface" />}>
          <DailyFeature />
        </Suspense>
      </div>

      <section><h2 className="font-serif text-4xl">Latest articles</h2><ul className="grid gap-3 py-4 sm:grid-cols-2">{latest.map(row=><li key={row.path}><Link href={row.path}>{row.title}</Link></li>)}</ul></section>
      <section aria-labelledby="departments-heading">
        <div className="mb-space-4 max-w-[var(--article-max)]">
          <p className="eyebrow">Departments</p>
          <h2
            id="departments-heading"
            className="mt-space-2 font-serif text-4xl tracking-[-0.03em] text-ink md:text-5xl"
          >
            Explore the archives
          </h2>
        </div>
        <div className="grid gap-space-6 md:grid-cols-3">
          {homeDepartments.map((department, index) => (
            <CategoryCard key={department.category} department={department} index={index} />
          ))}
        </div>
      </section>

      <section id="editors-picks" aria-labelledby="picks-heading">
        <div className="mb-space-4 flex flex-col items-start gap-space-1 md:flex-row md:items-end md:justify-between md:gap-space-3">
          <div>
            <p className="eyebrow">The desk</p>
            <h2
              id="picks-heading"
              className="mt-space-2 font-serif text-4xl tracking-[-0.03em] text-ink md:text-5xl"
            >
              Editors’ picks
            </h2>
          </div>
          <Link
            href="/guides"
            className="inline-flex min-h-11 items-center text-[12px] font-medium uppercase tracking-[0.16em] text-ink underline decoration-line underline-offset-4 hover:text-accent"
          >
            Browse all guides
          </Link>
        </div>
        <div className="grid gap-space-6 sm:grid-cols-2">
          {picks.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section
        id="how-we-pick"
        aria-labelledby="method-heading"
        className="grid gap-space-4 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-space-8"
      >
        <div>
          <p className="eyebrow">The house</p>
          <h2
            id="method-heading"
            className="mt-space-2 font-serif text-4xl tracking-[-0.03em] text-ink md:text-5xl"
          >
            How we pick
          </h2>
        </div>
        <div className="flex max-w-[var(--article-max)] flex-col gap-space-3">
          <p className="text-lg leading-relaxed text-ink">
            We do not arrange the page by commission. A piece enters the edit when it holds up in
            ordinary life: the boot after rain, the perfume on the third hour, the brush that still
            feels right before it is washed.
          </p>
          <p className="text-lg leading-relaxed text-ink-muted">
            Price is named when it matters. If we would not keep it, it does not stay. The sentence
            below is the whole policy.
          </p>
          <DisclosureBar />
        </div>
      </section>

      <section id="letter" aria-labelledby="letter-heading" className="border-t border-line pt-space-6">
        <p className="eyebrow">The letter</p>
        <h2
          id="letter-heading"
          className="mt-space-2 max-w-[16ch] font-serif text-4xl tracking-[-0.03em] text-ink md:text-5xl"
        >
          A note, when there is something to say.
        </h2>
        <p className="mt-space-3 max-w-[var(--article-max)] text-lg leading-relaxed text-ink-muted">
          No weekly flood. We write when the edit changes. The mailing list is not open yet.
        </p>
      </section>
    </div>
  );
}
