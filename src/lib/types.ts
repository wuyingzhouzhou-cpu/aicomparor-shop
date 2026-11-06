export const categories = ["boots", "perfume", "brushes", "guides", "articles"] as const;

export type Category = (typeof categories)[number];

export type TocItem = {
  id: string;
  label: string;
};

export type ArticleSummary = {
  slug: string;
  title: string;
  /** Document `<title>` when it should differ from the on-page H1 (`title`). */
  seoTitle?: string;
  description: string;
  category: Category;
  updated: string;
  readingMinutes: number;
  heroImage: string;
  toc?: TocItem[];
};

export function isCategory(value: string): value is Category {
  return (categories as readonly string[]).includes(value);
}

export function articlePath(article: Pick<ArticleSummary, "category" | "slug">) {
  return `/${article.category}/${article.slug}`;
}
