import {feedIndex, liveProducts, managedArticle} from "@/lib/project-feed";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CategoryListing } from "@/components/category-listing";
import { getSummariesByCategory } from "@/lib/articles";
import { departments } from "@/lib/departments";
import { categoryMetadata } from "@/lib/seo";
import { categories, isCategory } from "@/lib/types";

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  if (!isCategory(category)) {
    return { title: "Not found" };
  }

  return categoryMetadata(category);
}

function ListingFallback() {
  return (
    <div className="content-wrap flex flex-col gap-space-4 py-space-8" aria-hidden="true">
      <div className="h-3 w-24 bg-accent-soft" />
      <div className="h-14 w-48 bg-accent-soft" />
      <div className="h-6 w-full max-w-xl bg-accent-soft" />
    </div>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  return (
    <Suspense fallback={<ListingFallback />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!isCategory(category)) {
    notFound();
  }

  const legacy=getSummariesByCategory(category);
  const [entries, products] = await Promise.all([feedIndex(), liveProducts()]);
  const rows = entries.filter(row => row.kind === "article" && row.path.startsWith("/" + category + "/"));
  const articles = await Promise.all(rows.map(async row => {
    const slug = row.path.split("/")[2];
    const old = legacy.find(article => article.slug === slug);
    let heroImage = old?.heroImage ?? "";
    if (!heroImage && row.managed) {
      const doc = await managedArticle(row.path);
      for (const match of (doc?.body ?? "").matchAll(/\]\((?:https:\/\/(?:www\.)?aicomparor\.shop)?\/products\/([a-z0-9-]+)\)/g)) {
        const product = products.find(item => item.slug === match[1]);
        if (product?.image) {
          heroImage = product.image;
          break;
        }
      }
    }
    return { ...old, slug, category, title: row.title, description: row.description,
      updated: row.publishedAt.slice(0, 10), readingMinutes: old?.readingMinutes ?? 3,
      heroImage, productCover: !old?.heroImage && Boolean(heroImage) };
  }));
  return (
    <CategoryListing
      department={departments[category]}
      articles={articles}
    />
  );
}
