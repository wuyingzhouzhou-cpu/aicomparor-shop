import catalog from "@/data/published-products.json";

export type PublishedProduct = {
  slug: string;
  merchant: string;
  title: string;
  price: number | null;
  note: string;
  productUrl: string;
  affiliateUrl: string | null;
  image: string | null;
  publishedAt: string;
};

export const publishedProducts: readonly PublishedProduct[] = catalog;

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function formatProductPrice(price: number) {
  return usd.format(price);
}

export function productPath(slug: string) {
  return `/products/${slug}`;
}

export function getPublishedProduct(slug: string) {
  return publishedProducts.find((product) => product.slug === slug);
}
