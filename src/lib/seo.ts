import type { Metadata } from "next";
import { departments } from "@/lib/departments";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { articlePath, type ArticleSummary, type Category } from "@/lib/types";

export type FaqItem = { question: string; answer: string };

/** Editorial FAQs mirrored from article FAQ sections (for FAQPage JSON-LD). */
const articleFaqs: Record<string, FaqItem[]> = {
  "makeup-bag-brush-holders-slots-vs-mesh": [
    {
      question: "What does a makeup bag with a brush holder usually include?",
      answer:
        "Usually elastic slots or an elastic holder, mesh and/or a zip compartment, or an optional snap-in, removable, or standup insert. The listing phrase alone does not say which.",
    },
    {
      question: "When do elastic brush slots help versus mesh pockets?",
      answer:
        "Elastic gives upright, one-place control on a mat or rim. Mesh gives flexible volume for mixed or changing tools in a tray or zip sleeve. Match the hold to how you grab brushes.",
    },
    {
      question: "Should I buy by the number of brush slots?",
      answer:
        "No. Slot count is not a cross-brand score. One type example publishes 8 elastic slots; another an elastic holder with no count; a third double mesh plus an optional snap-in. Compare system type.",
    },
    {
      question: "Do brush holders work the same in lay-flat and zip-tray bags?",
      answer:
        "No. Mats often use rim elastic; zip trays more often use an interior zip, mesh, and sometimes a snap-in. The grab path follows the open style.",
    },
  ],
  "how-to-wash-a-makeup-bag": [
    {
      question: "Can I put a machine washable makeup bag in the dryer?",
      answer:
        "Almost never if you follow the care lines in common type examples. Cosmo-style and Flat Lay Co–style copy say hang dry and do not tumble dry. Heat collapses shape and cooks elastic.",
    },
    {
      question: "How do I wash a drawstring / lay-flat bag?",
      answer:
        "Empty it, pretreat stains, tuck or cinch the cord, use cold or brand-stated 30° on gentle, then hang dry. While damp, open the mat into a full circle so it dries in shape. The wash steps stay gentle either way.",
    },
    {
      question: "Can leather makeup bags go in the washing machine?",
      answer:
        "Not the leather exterior—spot clean only when that is the brand line. Zip-out liners marked machine washable can usually go alone on gentle; hang dry the liner and keep water off the leather shell.",
    },
    {
      question: "Do brush slots need special care?",
      answer:
        "Yes: protect the elastic. Avoid hot water and the dryer. Pretreat makeup on the loops gently; do not stretch wet elastic to open slots.",
    },
    {
      question: "How often should I wash a makeup bag?",
      answer:
        "After a spill, before or after a trip, or when the lining looks or smells dingy—not on a fear-based monthly schedule. Heavy cream users may wash more often than powder-only kits.",
    },
  ],
  "lay-flat-vs-zip-tray-makeup-bags": [
    {
      question: "Is a flat lay makeup bag the same as a drawstring bag?",
      answer:
        "Not always. Flat lay describes opening behavior. Many listings are drawstring mats that open into a circle, but a three-sided zip tray can also open flat. Read the closure.",
    },
    {
      question: "Do zip-tray bags count as lay-flat?",
      answer:
        "In everyday shopping language, often yes if the three-sided zip unfolds for visibility. Structurally they are a different open mode from drawstring mats.",
    },
    {
      question: "Can I machine-wash a lay-flat makeup bag?",
      answer:
        "Only if that SKU’s care line says so—and only the way it says so. Fabric drawstring mats may publish machine-wash + hang-dry guidance; leather zip-tray versions may require spot-clean exteriors.",
    },
    {
      question: "Should I buy by brush-slot count?",
      answer:
        "No. Compare system type (elastic slots vs mesh/organizer). Slot counts are a poor cross-brand score when brands count differently.",
    },
    {
      question: "Do I still need a TSA liquids bag?",
      answer:
        "Yes. TSA liquids rules still belong in a quart bag; a lay-flat makeup bag does not replace that. Drawstring mats usually compress flatter; zip trays keep their shape but claim more cube space.",
    },
  ],
  "chelsea-boots-vs-ankle-boots": [
    {
      question: "Are Chelsea boots ankle boots?",
      answer:
        "Yes. Chelsea boots are ankle-height boots defined by elastic side panels and a pull-on design. Zip and lace styles are siblings, not a different height class.",
    },
    {
      question: "Can you wear Chelsea boots to the office?",
      answer:
        "Often yes—especially smooth leather Chelseas with a clean toe and a low or modest heel. Confirm workplace norms; rugged lug soles may read more casual.",
    },
    {
      question: "Are zip ankle boots more comfortable?",
      answer:
        "They can be easier to put on and adjust, especially for high insteps or thick socks. Comfort still depends on the last, toe shape, and heel height—not the zipper alone.",
    },
    {
      question: "Do Chelsea boots work with wide calves?",
      answer:
        "Often less well than an adjustable zip or lace ankle boot. Elastic width and shaft height are fixed once you pull on. If the top line bites mid-calf, choose a zip ankle boot or a lower petite shaft.",
    },
  ],
  "fresh-vs-warm-perfumes": [
    {
      question: "Is fresh better for summer?",
      answer:
        "Often yes for comfort in heat—citrus, green, and aquatic impressions feel lighter. A soft warm scent can still work in summer evenings if sprayed sparingly.",
    },
    {
      question: "Can a warm perfume work in the office?",
      answer:
        "Yes if it stays relatively quiet and you keep the dose low. Soft woods, light amber, and clean warm musks are easier desk companions than heavy spice.",
    },
    {
      question: "EDP or EDT for everyday?",
      answer:
        "Either can work. Many people default to EDT for a lighter everyday feel and reach for EDP for a denser impression. Judge the specific scent on your skin.",
    },
    {
      question: "Is clean-girl the same as fresh?",
      answer:
        "Overlap is high—musk, citrus, and tea show up in both—but clean-girl is a vibe filter, not a lab category. A clean-girl bottle can still lean warm if the base is soft vanilla or skin musk. Test on skin for 30+ minutes.",
    },
  ],
  "makeup-brushes-beginners-need": [
    {
      question: "How many brushes do beginners need?",
      answer:
        "About five core roles—foundation/base, powder, cheek, flat shader, and blending—cover most everyday makeup. You can start with four if one powder brush doubles for cheek color.",
    },
    {
      question: "Can I use fingers instead?",
      answer:
        "Yes for cream products and some base application. Brushes help with powder control, even foundation edges, and eyeshadow placement.",
    },
    {
      question: "Brush set or singles?",
      answer:
        "A small well-chosen set can be convenient if each piece has a clear role. Singles let you upgrade the hardest-working brush first without paying for fillers.",
    },
  ],
};

export function getArticleFaqs(slug: string): FaqItem[] {
  return articleFaqs[slug] ?? [];
}

export function articleMetadata(article: ArticleSummary): Metadata {
  const path = articlePath(article);
  const url = absoluteUrl(path);
  const image = absoluteUrl(article.heroImage);

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      siteName: "AiComparor",
      locale: "en_US",
      images: [
        {
          url: image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image],
    },
  };
}

export function categoryMetadata(category: Category): Metadata {
  const department = departments[category];
  const url = absoluteUrl(`/${category}`);
  const image = absoluteUrl(department.image);

  return {
    title: department.title,
    description: department.lede,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: department.title,
      description: department.lede,
      siteName: "AiComparor",
      locale: "en_US",
      images: [{ url: image, alt: department.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: department.title,
      description: department.lede,
      images: [image],
    },
  };
}

export function buildArticleJsonLd(article: ArticleSummary) {
  const path = articlePath(article);
  const url = absoluteUrl(path);
  const image = absoluteUrl(article.heroImage);
  const department = departments[article.category];
  const faqs = getArticleFaqs(article.slug);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.description,
      image: [image],
      dateModified: article.updated,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      author: {
        "@type": "Organization",
        name: "AiComparor",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "AiComparor",
        url: siteUrl,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "AiComparor",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: department.title,
          item: absoluteUrl(`/${article.category}`),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: url,
        },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (article.slug === "how-to-wash-a-makeup-bag") {
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto`,
      name: "How to wash a makeup bag without ruining the shape",
      description: article.description,
      step: [
        {
          "@type": "HowToStep",
          name: "Empty",
          text: "Empty the bag completely and remove loose debris before washing.",
        },
        {
          "@type": "HowToStep",
          name: "Pretreat",
          text: "Spot-treat makeup stains gently; protect elastic brush slots.",
        },
        {
          "@type": "HowToStep",
          name: "Wash",
          text: "Use cold or brand-stated 30° water on a gentle / delicate cycle when the care line allows machine wash.",
        },
        {
          "@type": "HowToStep",
          name: "Hang dry",
          text: "Hang dry; reshape while damp. Do not tumble dry unless the care line explicitly allows it.",
        },
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
