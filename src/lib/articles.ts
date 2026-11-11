import type { ComponentType } from "react";
import type { MDXProps } from "mdx/types";
import BestDiorLipGlowDupes, {
  frontmatter as bestDiorLipGlowDupes,
} from "@/content/articles/best-dior-lip-glow-dupes.mdx";
import BestProjectorForBedroom, {
  frontmatter as bestProjectorForBedroom,
} from "@/content/articles/best-projector-for-bedroom.mdx";
import ChelseaVsAnkle, {
  frontmatter as chelseaVsAnkle,
} from "@/content/boots/chelsea-boots-vs-ankle-boots.mdx";
import SlimKneeHighVsChelsea, {
  frontmatter as slimKneeHighVsChelsea,
} from "@/content/boots/slim-knee-high-vs-chelsea-boots.mdx";
import WaterproofAnkleVsChelsea, {
  frontmatter as waterproofAnkleVsChelsea,
} from "@/content/boots/waterproof-ankle-vs-chelsea-boots.mdx";
import QuietChelsea, {
  frontmatter as quietChelsea,
} from "@/content/boots/the-quiet-chelsea.mdx";
import BeginnerBrushes, {
  frontmatter as beginnerBrushes,
} from "@/content/brushes/makeup-brushes-beginners-need.mdx";
import BrushWithWeight, {
  frontmatter as brushWithWeight,
} from "@/content/brushes/a-brush-with-weight.mdx";
import TravelMakeupBrushes, {
  frontmatter as travelMakeupBrushes,
} from "@/content/brushes/travel-makeup-brushes.mdx";
import CreamBlushVsPowder, {
  frontmatter as creamBlushVsPowder,
} from "@/content/brushes/cream-blush-vs-powder-blush.mdx";
import ClearCosmeticCaseVsNeoprene, {
  frontmatter as clearCosmeticCaseVsNeoprene,
} from "@/content/guides/clear-cosmetic-case-vs-neoprene-toiletry.mdx";
import HangingToiletryBagVsVanityCase, {
  frontmatter as hangingToiletryBagVsVanityCase,
} from "@/content/guides/hanging-toiletry-bag-vs-vanity-case.mdx";
import HowToWashMakeupBag, {
  frontmatter as howToWashMakeupBag,
} from "@/content/guides/how-to-wash-a-makeup-bag.mdx";
import LayFlatVsZipTray, {
  frontmatter as layFlatVsZipTray,
} from "@/content/guides/lay-flat-vs-zip-tray-makeup-bags.mdx";
import BrushHoldersSlotsVsMesh, {
  frontmatter as brushHoldersSlotsVsMesh,
} from "@/content/guides/makeup-bag-brush-holders-slots-vs-mesh.mdx";
import ReadingABoot, {
  frontmatter as readingABoot,
} from "@/content/guides/reading-a-boot.mdx";
import FreshVsWarm, {
  frontmatter as freshVsWarm,
} from "@/content/perfume/fresh-vs-warm-perfumes.mdx";
import HowToLayer, {
  frontmatter as howToLayer,
} from "@/content/perfume/how-to-layer-perfume.mdx";
import NeroliAtDusk, {
  frontmatter as neroliAtDusk,
} from "@/content/perfume/neroli-at-dusk.mdx";
import SolidPerfumeVsRollerball, {
  frontmatter as solidPerfumeVsRollerball,
} from "@/content/perfume/solid-perfume-vs-rollerball.mdx";
import BodyMistVsEauDeParfum, {
  frontmatter as bodyMistVsEauDeParfum,
} from "@/content/perfume/body-mist-vs-eau-de-parfum.mdx";
import SkinScentVsModernVanilla, {
  frontmatter as skinScentVsModernVanilla,
} from "@/content/perfume/skin-scent-vs-modern-vanilla.mdx";
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
    seoTitle: frontmatter.seoTitle,
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
  entry(
    "articles",
    "best-dior-lip-glow-dupes",
    bestDiorLipGlowDupes as ArticleSummary,
    BestDiorLipGlowDupes,
  ),
  entry(
    "articles",
    "best-projector-for-bedroom",
    bestProjectorForBedroom as ArticleSummary,
    BestProjectorForBedroom,
  ),
  entry("boots", "the-quiet-chelsea", quietChelsea as ArticleSummary, QuietChelsea),
  entry(
    "boots",
    "chelsea-boots-vs-ankle-boots",
    chelseaVsAnkle as ArticleSummary,
    ChelseaVsAnkle,
  ),
  entry(
    "boots",
    "slim-knee-high-vs-chelsea-boots",
    slimKneeHighVsChelsea as ArticleSummary,
    SlimKneeHighVsChelsea,
  ),
  entry(
    "boots",
    "waterproof-ankle-vs-chelsea-boots",
    waterproofAnkleVsChelsea as ArticleSummary,
    WaterproofAnkleVsChelsea,
  ),
  entry("perfume", "neroli-at-dusk", neroliAtDusk as ArticleSummary, NeroliAtDusk),
  entry(
    "perfume",
    "fresh-vs-warm-perfumes",
    freshVsWarm as ArticleSummary,
    FreshVsWarm,
  ),
  entry(
    "perfume",
    "how-to-layer-perfume",
    howToLayer as ArticleSummary,
    HowToLayer,
  ),
  entry(
    "perfume",
    "solid-perfume-vs-rollerball",
    solidPerfumeVsRollerball as ArticleSummary,
    SolidPerfumeVsRollerball,
  ),
  entry(
    "perfume",
    "body-mist-vs-eau-de-parfum",
    bodyMistVsEauDeParfum as ArticleSummary,
    BodyMistVsEauDeParfum,
  ),
  entry(
    "perfume",
    "skin-scent-vs-modern-vanilla",
    skinScentVsModernVanilla as ArticleSummary,
    SkinScentVsModernVanilla,
  ),
  entry("brushes", "a-brush-with-weight", brushWithWeight as ArticleSummary, BrushWithWeight),
  entry(
    "brushes",
    "makeup-brushes-beginners-need",
    beginnerBrushes as ArticleSummary,
    BeginnerBrushes,
  ),
  entry(
    "brushes",
    "travel-makeup-brushes",
    travelMakeupBrushes as ArticleSummary,
    TravelMakeupBrushes,
  ),
  entry(
    "brushes",
    "cream-blush-vs-powder-blush",
    creamBlushVsPowder as ArticleSummary,
    CreamBlushVsPowder,
  ),
  entry("guides", "reading-a-boot", readingABoot as ArticleSummary, ReadingABoot),
  entry(
    "guides",
    "lay-flat-vs-zip-tray-makeup-bags",
    layFlatVsZipTray as ArticleSummary,
    LayFlatVsZipTray,
  ),
  entry(
    "guides",
    "clear-cosmetic-case-vs-neoprene-toiletry",
    clearCosmeticCaseVsNeoprene as ArticleSummary,
    ClearCosmeticCaseVsNeoprene,
  ),
  entry(
    "guides",
    "hanging-toiletry-bag-vs-vanity-case",
    hangingToiletryBagVsVanityCase as ArticleSummary,
    HangingToiletryBagVsVanityCase,
  ),
  entry(
    "guides",
    "how-to-wash-a-makeup-bag",
    howToWashMakeupBag as ArticleSummary,
    HowToWashMakeupBag,
  ),
  entry(
    "guides",
    "makeup-bag-brush-holders-slots-vs-mesh",
    brushHoldersSlotsVsMesh as ArticleSummary,
    BrushHoldersSlotsVsMesh,
  ),
];

/** Homepage Editors’ picks, in desk order. Other essays stay on their department pages. */
const editorsPickKeys = [
  ["boots", "chelsea-boots-vs-ankle-boots"],
  ["perfume", "fresh-vs-warm-perfumes"],
  ["brushes", "makeup-brushes-beginners-need"],
  ["guides", "lay-flat-vs-zip-tray-makeup-bags"],
  ["guides", "how-to-wash-a-makeup-bag"],
  ["guides", "makeup-bag-brush-holders-slots-vs-mesh"],
] as const satisfies ReadonlyArray<readonly [Category, string]>;

function byNewest(a: ArticleSummary, b: ArticleSummary) {
  return b.updated.localeCompare(a.updated);
}

export function getArticles() {
  return [...registry].sort(byNewest);
}

export function getSummaries() {
  return getArticles().map(toSummary);
}

export function getEditorsPicks() {
  return editorsPickKeys.map(([category, slug]) => {
    const article = registry.find((item) => item.category === category && item.slug === slug);

    if (!article) {
      throw new Error(`Editors’ pick ${category}/${slug} is not in the registry.`);
    }

    return toSummary(article);
  });
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
