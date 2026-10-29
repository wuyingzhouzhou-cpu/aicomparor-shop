import type { ComponentType } from "react";
import type { MDXProps } from "mdx/types";
import ChelseaVsAnkle, {
  frontmatter as chelseaVsAnkle,
} from "@/content/boots/chelsea-boots-vs-ankle-boots.mdx";
import QuietChelsea, {
  frontmatter as quietChelsea,
} from "@/content/boots/the-quiet-chelsea.mdx";
import BeginnerBrushes, {
  frontmatter as beginnerBrushes,
} from "@/content/brushes/makeup-brushes-beginners-need.mdx";
import BrushWithWeight, {
  frontmatter as brushWithWeight,
} from "@/content/brushes/a-brush-with-weight.mdx";
import ReadingABoot, {
  frontmatter as readingABoot,
} from "@/content/guides/reading-a-boot.mdx";
import FreshVsWarm, {
  frontmatter as freshVsWarm,
} from "@/content/perfume/fresh-vs-warm-perfumes.mdx";
import NeroliAtDusk, {
  frontmatter as neroliAtDusk,
} from "@/content/perfume/neroli-at-dusk.mdx";
import {
  type ArticleSummary,
  type Category,
  isCategory,
} from "@/lib/types";

type ArticleContent = ComponentType<MDXProps>;

export type Article = ArticleSummary & {
  Content: ArticleContent;
};

/**
 * Register each essay here after adding its MDX file.
 * Public URL: /<category>/<slug>
 */
function entry(
  category: Category,
  slug: string,
  frontmatter: ArticleSummary,
  Content: ArticleContent,
): Article {
  if (!isCategory(frontmatter.category) || frontmatter.category !== category) {
    throw new Error(
      `${slug} is filed under ${category}, but its frontmatter category is "${frontmatter.category}".`,
    );
  }

  if (!frontmatter.title || !frontmatter.description || !frontmatter.heroImage) {
    throw new Error(`${slug} is missing title, description, or heroImage.`);
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(frontmatter.updated)) {
    throw new Error(`${slug} needs updated as YYYY-MM-DD.`);
  }

  if (typeof frontmatter.readingMinutes !== "number" || frontmatter.readingMinutes < 1) {
    throw new Error(`${slug} needs a readingMinutes number.`);
  }

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    category,
    updated: frontmatter.updated,
    readingMinutes: frontmatter.readingMinutes,
    heroImage: frontmatter.heroImage,
    toc: frontmatter.toc,
    Content,
  };
}

const registry: Article[] = [
  entry("boots", "the-quiet-chelsea", quietChelsea as ArticleSummary, QuietChelsea),
  entry(
    "boots",
    "chelsea-boots-vs-ankle-boots",
    chelseaVsAnkle as ArticleSummary,
    ChelseaVsAnkle,
  ),
  entry("perfume", "neroli-at-dusk", neroliAtDusk as ArticleSummary, NeroliAtDusk),
  entry(
    "perfume",
    "fresh-vs-warm-perfumes",
    freshVsWarm as ArticleSummary,
    FreshVsWarm,
  ),
  entry("brushes", "a-brush-with-weight", brushWithWeight as ArticleSummary, BrushWithWeight),
  entry(
    "brushes",
    "makeup-brushes-beginners-need",
    beginnerBrushes as ArticleSummary,
    BeginnerBrushes,
  ),
  entry("guides", "reading-a-boot", readingABoot as ArticleSummary, ReadingABoot),
];

function byNewest(a: ArticleSummary, b: ArticleSummary) {
  return b.updated.localeCompare(a.updated);
}

export function getArticles() {
  return [...registry].sort(byNewest);
}

export function getSummaries() {
  return getArticles().map(toSummary);
}

export function getSummariesByCategory(category: Category) {
  return getArticles()
    .filter((article) => article.category === category)
    .map(toSummary);
}

export function getArticle(category: string, slug: string) {
  return registry.find((article) => article.category === category && article.slug === slug);
}

export function getRelated(article: ArticleSummary, limit = 3) {
  const others = getSummaries().filter((item) => item.slug !== article.slug);
  const sameDesk = others.filter((item) => item.category === article.category);
  const elsewhere = others.filter((item) => item.category !== article.category);
  return [...sameDesk, ...elsewhere].slice(0, limit);
}

function toSummary(article: Article): ArticleSummary {
  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
    category: article.category,
    updated: article.updated,
    readingMinutes: article.readingMinutes,
    heroImage: article.heroImage,
    toc: article.toc,
  };
}
