import {liveProducts} from "@/lib/project-feed";
import type { Metadata } from "next";
import { ProductGrid, ShopTabs } from "@/components/product-grid";
export const metadata: Metadata = {
  title: "Products",
  description: "Browse products featured on AiComparor for US shoppers.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const publishedProducts=await liveProducts();
  return (
    <section className="content-wrap flex flex-col gap-space-4 py-space-8">
      <h1 className="font-serif text-5xl text-ink">Products</h1>
      <ShopTabs current="/products" />
      <ProductGrid products={publishedProducts} />
    </section>
  );
}
