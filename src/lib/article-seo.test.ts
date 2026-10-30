import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import {
  buildArticleJsonLd,
  buildArticleMetadata,
  extractFaq,
  extractHowToSteps,
  serializeJsonLd,
  siteOrigin,
} from "./article-seo.ts";

const washGuide = readFileSync(
  join(process.cwd(), "src/content/guides/how-to-wash-a-makeup-bag.mdx"),
  "utf8",
);
const layFlatGuide = readFileSync(
  join(process.cwd(), "src/content/guides/lay-flat-vs-zip-tray-makeup-bags.mdx"),
  "utf8",
);
const chelseaEssay = readFileSync(
  join(process.cwd(), "src/content/boots/the-quiet-chelsea.mdx"),
  "utf8",
);
const brushesGuide = readFileSync(
  join(process.cwd(), "src/content/brushes/makeup-brushes-beginners-need.mdx"),
  "utf8",
);

test("extracts FAQ questions that follow the FAQ heading and ignores earlier headings", () => {
  const faq = extractFaq(`
<h3>Not a question</h3>
<h2 id="faq">FAQ</h2>

### Are Chelsea boots ankle boots?

Yes. They are **ankle-height** boots. See [the essay](/boots/the-quiet-chelsea).

{/* INTERNAL: /boots/the-quiet-chelsea */}

### Can you wear them to the office?

Often yes — follow *that* dress code.

<h2 id="how-we-pick">How we pick</h2>
### This is not an FAQ
`);

  assert.deepEqual(faq, [
    {
      question: "Are Chelsea boots ankle boots?",
      answer: "Yes. They are ankle-height boots. See the essay.",
    },
    {
      question: "Can you wear them to the office?",
      answer: "Often yes — follow that dress code.",
    },
  ]);
});

test("returns no FAQ when the article has no FAQ section", () => {
  assert.deepEqual(extractFaq(chelseaEssay), []);
});

test("extracts the wash routine as HowTo steps and ignores other numbered lists", () => {
  const steps = extractHowToSteps(washGuide);

  assert.equal(steps.length, 5);
  assert.equal(steps[0]?.name, "Empty completely");
  assert.match(steps[0]?.text ?? "", /^Remove every compact/);
  assert.equal(steps[3]?.name, "Choose the cycle");
  assert.match(steps[3]?.text ?? "", /30°/);
  assert.equal(steps[4]?.name, "Skip the dryer");
  assert.deepEqual(extractHowToSteps(layFlatGuide), []);
  assert.deepEqual(extractHowToSteps(brushesGuide), []);
});

test("reads the published FAQ sections from each comparison article", () => {
  assert.equal(extractFaq(washGuide).length, 4);
  assert.equal(extractFaq(layFlatGuide).length, 4);
  assert.equal(extractFaq(brushesGuide).length, 3);
  assert.match(extractFaq(brushesGuide)[0]?.answer ?? "", /^About five core roles/);
  assert.match(
    extractFaq(washGuide)[1]?.answer ?? "",
    /how drawstring mats differ from zip trays/,
  );
});

test("builds Article and BreadcrumbList, plus FAQPage and HowTo only when the body has them", () => {
  const shared = {
    title: "How to Wash a Makeup Bag Without Ruining the Shape",
    description: "A washable makeup bag still needs the right cycle.",
    category: "guides",
    slug: "how-to-wash-a-makeup-bag",
    updated: "2026-10-29",
    heroImage: "/placeholders/reading.svg",
    sectionTitle: "Guides",
  };
  const withExtras = buildArticleJsonLd({
    ...shared,
    faq: extractFaq(washGuide),
    howToSteps: extractHowToSteps(washGuide),
  });
  const essay = buildArticleJsonLd({
    ...shared,
    title: "The quiet Chelsea",
    slug: "the-quiet-chelsea",
    category: "boots",
    sectionTitle: "Boots",
    heroImage: "",
    faq: [],
    howToSteps: [],
  });

  assert.equal(withExtras["@context"], "https://schema.org");
  const types = withExtras["@graph"].map((node) => node["@type"]);
  assert.deepEqual(types, ["Article", "BreadcrumbList", "FAQPage", "HowTo"]);

  const article = withExtras["@graph"][0];
  assert.equal(article?.["@type"], "Article");
  if (article?.["@type"] !== "Article") return;
  assert.equal(
    article.mainEntityOfPage,
    `${siteOrigin}/guides/how-to-wash-a-makeup-bag`,
  );
  assert.equal(article.image, `${siteOrigin}/placeholders/reading.svg`);
  assert.equal(article.dateModified, "2026-10-29");

  const crumbs = withExtras["@graph"][1];
  assert.equal(crumbs?.["@type"], "BreadcrumbList");
  if (crumbs?.["@type"] !== "BreadcrumbList") return;
  assert.deepEqual(
    crumbs.itemListElement.map((item) => item.name),
    ["Home", "Guides", shared.title],
  );
  assert.equal(crumbs.itemListElement[0]?.item, siteOrigin);

  const howto = withExtras["@graph"][3];
  assert.equal(howto?.["@type"], "HowTo");
  if (howto?.["@type"] !== "HowTo") return;
  assert.equal(howto.step.length, 5);
  assert.equal(howto.step[0]?.position, 1);

  assert.deepEqual(
    essay["@graph"].map((node) => node["@type"]),
    ["Article", "BreadcrumbList"],
  );
  const essayArticle = essay["@graph"][0];
  assert.equal(essayArticle?.["@type"], "Article");
  if (essayArticle?.["@type"] !== "Article") return;
  assert.equal("image" in essayArticle, false);
});

test("serializes JSON-LD without raw angle brackets", () => {
  const html = serializeJsonLd({ headline: "Boots <ankles>" });
  assert.equal(html.includes("<"), false);
  assert.match(html, /\\u003cankles>/);
});

test("sets a per-article canonical and social card from heroImage", () => {
  const metadata = buildArticleMetadata({
    title: "Lay-flat vs zip tray",
    description: "Two ways a makeup bag opens.",
    category: "guides",
    slug: "lay-flat-vs-zip-tray-makeup-bags",
    updated: "2026-10-29",
    heroImage: "/assets/guides/lay-flat-vs-zip-tray-makeup-bags/hero-open-compare.jpg",
  });

  const canonical = `${siteOrigin}/guides/lay-flat-vs-zip-tray-makeup-bags`;
  const image = `${siteOrigin}/assets/guides/lay-flat-vs-zip-tray-makeup-bags/hero-open-compare.jpg`;

  assert.equal(metadata.alternates?.canonical, canonical);
  assert.equal(metadata.openGraph?.title, "Lay-flat vs zip tray");
  assert.equal(metadata.openGraph?.description, "Two ways a makeup bag opens.");
  assert.equal(metadata.openGraph?.url, canonical);
  assert.equal(metadata.openGraph?.type, "article");
  assert.deepEqual(metadata.openGraph?.images, [{ url: image, alt: "Lay-flat vs zip tray" }]);
  assert.equal(metadata.twitter?.card, "summary_large_image");
  assert.equal(metadata.twitter?.title, "Lay-flat vs zip tray");
  assert.equal(metadata.twitter?.description, "Two ways a makeup bag opens.");
  assert.deepEqual(metadata.twitter?.images, [image]);
});

test("uses a summary card when the article has no hero image", () => {
  const metadata = buildArticleMetadata({
    title: "Untitled",
    description: "No image yet.",
    category: "guides",
    slug: "draft",
    updated: "2026-10-29",
    heroImage: "  ",
  });

  assert.equal(metadata.twitter?.card, "summary");
  assert.equal(metadata.openGraph?.images, undefined);
  assert.equal(metadata.twitter?.images, undefined);
});
