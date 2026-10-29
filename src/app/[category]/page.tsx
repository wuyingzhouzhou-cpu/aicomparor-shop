import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CategoryListing } from "@/components/category-listing";
import { getSummariesByCategory } from "@/lib/articles";
import { departments } from "@/lib/departments";
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

  const department = departments[category];

  return {
    title: department.title,
    description: department.lede,
  };
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

  return (
    <CategoryListing
      department={departments[category]}
      articles={getSummariesByCategory(category)}
    />
  );
}
