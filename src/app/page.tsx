import {feedIndex,liveProducts} from "@/lib/project-feed";
import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid, ShopTabs } from "@/components/product-grid";
import { ReaderCommentCarousel } from "@/components/reader-comment-carousel";
import { connection } from "next/server";
import { Suspense } from "react";

import { DailyProductCarousel } from "@/components/daily-product-carousel";

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
  const [products, entries] = await Promise.all([liveProducts(), feedIndex()]);
  const newest = [...products].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 8);
  const latest=entries.filter(row=>row.kind==="article").slice(0,8);

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
      <section aria-labelledby="new-products" className="grid gap-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="new-products" className="font-serif text-4xl tracking-tight md:text-5xl">New arrivals</h2>
          <Link href="/products" className="text-sm underline underline-offset-4">View all products →</Link>
        </div>
        <ShopTabs current="/" />
        <ProductGrid products={newest} />
      </section>
    </div>
  );
}
