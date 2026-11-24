import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import { formatProductPrice, productPath, type PublishedProduct } from "@/lib/published-products";
import { shopSections } from "@/lib/shop-sections";

export function ShopTabs({ current }: { current: string }) {
  const tabs = [{ href: "/products", label: "All products" }, ...shopSections.map(section => ({
    href: "/shop/" + section.slug, label: section.label,
  }))];
  return <nav aria-label="Shop departments" className="flex flex-wrap gap-x-4 border-b border-line">
    {tabs.map(tab => <Link key={tab.href} href={tab.href} aria-current={current === tab.href ? "page" : undefined}
      className="inline-flex min-h-11 items-center border-b-2 border-transparent text-sm text-ink-muted hover:text-ink aria-[current=page]:border-accent aria-[current=page]:text-ink">{tab.label}</Link>)}
  </nav>;
}

export function ProductGrid({ products }: { products: PublishedProduct[] }) {
  if (!products.length) return <p>No products have been published here yet.</p>;
  return <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
    {products.map(product => <li key={product.slug} className="min-w-0">
      <Link href={productPath(product.slug)} className="group block">
        {product.image && <ImageFrame src={product.image} contain ratio="aspect-[4/3]" sizes="(min-width: 1024px) 250px, 48vw" />}
        <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-ink-muted">
          <span>{product.merchant}</span>
          {product.price !== null && <span className="font-semibold text-ink">{formatProductPrice(product.price)}</span>}
        </div>
        <span className="mt-1 line-clamp-3 font-serif text-lg leading-tight text-ink group-hover:underline sm:text-xl">{product.title}</span>
      </Link>
    </li>)}
  </ul>;
}
