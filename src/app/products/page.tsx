import type { Metadata } from "next";
import Link from "next/link";
import { formatProductPrice, productPath, publishedProducts } from "@/lib/published-products";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse products featured on AiComparor for US shoppers.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <section className="content-wrap flex flex-col gap-space-4 py-space-8">
      <h1 className="font-serif text-5xl text-ink">Products</h1>
      {publishedProducts.length ? (
        <ul className="divide-y divide-line border-y border-line">
          {publishedProducts.map((product) => (
            <li key={product.slug} className="py-space-3">
              <Link href={productPath(product.slug)} className="font-serif text-2xl text-ink underline-offset-4 hover:underline">
                {product.title}
              </Link>
              <p className="mt-1 text-sm text-ink-muted">
                {product.merchant}
                {product.price !== null ? ` · ${formatProductPrice(product.price)}` : ""}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-ink-muted">No products have been published yet.</p>
      )}
    </section>
  );
}
