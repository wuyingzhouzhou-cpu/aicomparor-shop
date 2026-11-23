import {feedIndex} from "@/lib/project-feed";
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
  const rows=(await feedIndex()).filter(r=>r.kind==="article" && r.path.startsWith("/"+category+"/"));
  const articles=rows.map(r=>{const slug=r.path.split("/")[2];const old=legacy.find(a=>a.slug===slug);return {...old,slug,category,title:r.title,description:r.description,updated:r.publishedAt.slice(0,10),readingMinutes:old?.readingMinutes??3,heroImage:old?.heroImage??""};});
  return (
    <CategoryListing
      department={departments[category]}
      articles={articles}
    />
  );
}
