import { ButtonSecondary } from "@/components/button";
import { getPublishedProduct, productPath } from "@/lib/published-products";

export function PublishedProduct({ slug }: { slug: string }) {
  const product = getPublishedProduct(slug);
  if (!product) return null;

  return (
    <aside className="border border-line bg-surface px-space-3 py-space-3">
      <p className="font-serif text-2xl text-ink">{product.title}</p>
      <p className="text-sm text-ink-muted">{product.merchant}</p>
      <div className="mt-space-2">
        <ButtonSecondary href={productPath(slug)}>
          View product<span className="sr-only"> {product.title}</span>
        </ButtonSecondary>
      </div>
    </aside>
  );
}
