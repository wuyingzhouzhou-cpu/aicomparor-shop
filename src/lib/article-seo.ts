import type { Metadata } from "next";

/** Public origin used by sitemap.xml and robots.txt. */
export const siteOrigin = "https://www.aicomparor.shop";

const publisher = {
  "@type": "Organization" as const,
  name: "AiComparor",
  url: siteOrigin,
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export type HowToStep = {
  name: string;
  text: string;
};

type ArticleSeoFields = {
  title: string;
  description: string;
  category: string;
  slug: string;
  updated: string;
  heroImage: string;
};

type ArticleNode = {
  "@type": "Article";
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  inLanguage: "en";
  mainEntityOfPage: string;
  author: typeof publisher;
  publisher: typeof publisher;
  image?: string;
};

type BreadcrumbNode = {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
};

type FaqNode = {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
};

type HowToNode = {
  "@type": "HowTo";
  name: string;
  description: string;
  step: Array<{
    "@type": "HowToStep";
    position: number;
    name: string;
    text: string;
  }>;
  image?: string;
};

export type ArticleJsonLd = {
  "@context": "https://schema.org";
  "@graph": Array<ArticleNode | BreadcrumbNode | FaqNode | HowToNode>;
};

function articleUrl(article: Pick<ArticleSeoFields, "category" | "slug">) {
  return `${siteOrigin}/${article.category}/${article.slug}`;
}

function absoluteAsset(path: string) {
  const trimmed = path.trim();
  if (!trimmed) return undefined;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `${siteOrigin}${trimmed.startsWith("/") ? trimmed : `/${trimmed}`}`;
}

function toPlainText(value: string) {
  return value
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,;:!?]|$)/g, "$1$2")
    .replace(/(^|[\s(])_([^_\n]+)_(?=[\s).,;:!?]|$)/g, "$1$2")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sectionBody(markdown: string, id: string) {
  const heading = new RegExp(`^<h2 id="${id}">.*</h2>\\s*$`, "m");
  const match = heading.exec(markdown);
  if (!match) return null;
  const rest = markdown.slice(match.index + match[0].length);
  const nextHeading = rest.search(/^<h2\s/m);
  return nextHeading === -1 ? rest : rest.slice(0, nextHeading);
}

export function extractFaq(markdown: string): FaqEntry[] {
  const body = sectionBody(markdown, "faq");
  if (!body) return [];

  return body
    .split(/^###\s+/m)
    .slice(1)
    .flatMap((part) => {
      const [questionLine, ...answerLines] = part.split(/\r?\n/);
      const question = toPlainText(questionLine ?? "");
      const answer = toPlainText(answerLines.join("\n"));
      if (!question || !answer) return [];
      return [{ question, answer }];
    });
}

/**
 * HowTo steps come from the wash guide's existing `#wash-routine` list.
 * Other numbered lists (buy checklists, brush cleaning) are not procedures
 * for this schema.
 */
export function extractHowToSteps(markdown: string): HowToStep[] {
  const body = sectionBody(markdown, "wash-routine");
  if (!body) return [];

  const steps: HowToStep[] = [];
  for (const line of body.split(/\r?\n/)) {
    const numbered = line.match(/^\d+\.\s+(.*)$/);
    if (!numbered?.[1]) continue;

    const named = numbered[1].match(/^\*\*(.+?)\*\*\.?\s*([\s\S]*)$/);
    if (named?.[1]) {
      const name = toPlainText(named[1].replace(/\.$/, ""));
      const text = toPlainText(named[2] ?? "") || name;
      if (name && text) steps.push({ name, text });
      continue;
    }

    const text = toPlainText(numbered[1]);
    if (!text) continue;
    const name = (text.split(/(?<=\.)\s/)[0] ?? text).replace(/\.$/, "");
    steps.push({ name, text });
  }

  return steps;
}

export function buildArticleJsonLd(
  article: ArticleSeoFields & {
    sectionTitle: string;
    faq: FaqEntry[];
    howToSteps: HowToStep[];
  },
): ArticleJsonLd {
  const pageUrl = articleUrl(article);
  const image = absoluteAsset(article.heroImage);
  const graph: ArticleJsonLd["@graph"] = [
    {
      "@type": "Article",
      headline: article.title,
      description: article.description,
      // The content model stores one date (`updated`), used as both publish and modify.
      datePublished: article.updated,
      dateModified: article.updated,
      inLanguage: "en",
      mainEntityOfPage: pageUrl,
      author: publisher,
      publisher,
      ...(image ? { image } : {}),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
        {
          "@type": "ListItem",
          position: 2,
          name: article.sectionTitle,
          item: `${siteOrigin}/${article.category}`,
        },
        { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
      ],
    },
  ];

  if (article.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: article.faq.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.answer,
        },
      })),
    });
  }

  if (article.howToSteps.length > 0) {
    graph.push({
      "@type": "HowTo",
      name: article.title,
      description: article.description,
      ...(image ? { image } : {}),
      step: article.howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildArticleMetadata(article: ArticleSeoFields): Metadata {
  const canonical = articleUrl(article);
  const image = absoluteAsset(article.heroImage);

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonical,
      siteName: "AiComparor",
      locale: "en_US",
      type: "article",
      publishedTime: article.updated,
      modifiedTime: article.updated,
      ...(image ? { images: [{ url: image, alt: article.title }] } : {}),
    },
    twitter: image
      ? {
          card: "summary_large_image",
          title: article.title,
          description: article.description,
          images: [image],
        }
      : {
          card: "summary",
          title: article.title,
          description: article.description,
        },
  };
}
