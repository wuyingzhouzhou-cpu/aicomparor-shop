import { shopSections } from "@/lib/shop-sections";
import {feedIndex} from "@/lib/project-feed";
import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { getArticles } from "@/lib/articles";
import { productPath, publishedProducts } from "@/lib/published-products";
import { articlePath } from "@/lib/types";

const baseUrl = "https://www.aicomparor.shop";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();
  const current=(await feedIndex()).map(row=>({url:baseUrl+row.path,lastModified:row.publishedAt}));
  const pages: MetadataRoute.Sitemap = [
    ...shopSections.map(section => ({ url: baseUrl + "/shop/" + section.slug })),
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/boots`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/perfume`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/brushes`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/products`, changeFrequency: "weekly" },
    { url: `${baseUrl}/articles`, changeFrequency: "weekly" },
    { url: `${baseUrl}/guides`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/compare`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/seo-sync`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articles: MetadataRoute.Sitemap = getArticles().map((article) => ({
    url: `${baseUrl}${articlePath(article)}`,
    lastModified: article.updated,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const products: MetadataRoute.Sitemap = publishedProducts.map((product) => ({
    url: `${baseUrl}${productPath(product.slug)}`,
    lastModified: product.publishedAt,
  }));

  return [...pages,...current,...[...articles,...products].filter(old=>!current.some(row=>row.url===old.url))];
}
