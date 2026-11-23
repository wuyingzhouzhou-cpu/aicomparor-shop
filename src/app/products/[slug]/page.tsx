import {liveProducts} from "@/lib/project-feed";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonPrimary } from "@/components/button";
import { DisclosureBar } from "@/components/disclosure-bar";
import {
  formatProductPrice,
  productPath,
  publishedProducts,
} from "@/lib/published-products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedProducts.length
    ? publishedProducts.map(({ slug }) => ({ slug }))
    : [{ slug: "__catalog-empty__" }];
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const {slug}=await params;
  const product=(await liveProducts()).find(item=>item.slug===slug);
  if (!product) return { title: "Product not found" };

  return {
    title: product.title,
    description: product.note || `View ${product.title} at ${product.merchant}.`,
    alternates: { canonical: productPath(product.slug) },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<p className="content-wrap py-space-6" role="status">Loading product…</p>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}

async function ProductDetails({ params }: ProductPageProps) {
  const {slug}=await params;
  const product=(await liveProducts()).find(item=>item.slug===slug);
  if (!product) notFound();

  const reviewed = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeZone: "America/New_York",
  }).format(new Date(product.publishedAt));

  return (
    <article className="content-wrap flex flex-col gap-space-4 py-space-8">
      <Link href="/products" className="self-start text-sm text-accent underline">
        All products
      </Link>
      <div className={product.image ? "grid items-start gap-space-6 md:grid-cols-2" : "max-w-[var(--article-max)]"}>
        {product.image ? (
          <div className="relative aspect-square border border-line bg-surface">
            <Image unoptimized fill src={product.image} alt={product.title} className="object-contain p-4" />
          </div>
        ) : null}
        <div className="flex flex-col items-start gap-space-3">
          <p className="eyebrow">{product.merchant}</p>
          <h1 className="font-serif text-4xl leading-tight text-ink md:text-5xl">{product.title}</h1>
          {product.note ? <p className="whitespace-pre-line leading-relaxed text-ink-muted">{product.note}</p> : null}
          {product.price !== null ? (
            <div>
              <p className="font-serif text-3xl text-ink">{formatProductPrice(product.price)}</p>
              <p className="text-sm text-ink-muted">
                Price reviewed {reviewed}. Check the retailer for the current price and delivery.
              </p>
            </div>
          ) : null}
          {product.affiliateUrl ? (
            <DisclosureBar>
              {product.merchant === "Amazon US"
                ? "As an Amazon Associate, we earn from qualifying purchases."
                : "We may earn a commission from this link."}
            </DisclosureBar>
          ) : null}
          <ButtonPrimary href={product.affiliateUrl ?? product.productUrl}>
            View at {product.merchant}
          </ButtonPrimary>
        </div>
      </div>
    </article>
  );
}
