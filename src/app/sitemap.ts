import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { articlePath } from "@/lib/types";

const baseUrl = "https://www.aicomparor.shop";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/boots`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/perfume`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/brushes`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/guides`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/compare`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articles: MetadataRoute.Sitemap = getArticles().map((article) => ({
    url: `${baseUrl}${articlePath(article)}`,
    lastModified: article.updated,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
