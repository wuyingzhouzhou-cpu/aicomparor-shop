import Link from "next/link";
import { ListingBrowser } from "@/components/listing-browser";
import { PageIntro } from "@/components/page-intro";
import type { Department } from "@/lib/departments";
import type { ArticleSummary, Category } from "@/lib/types";

const inlineLink =
  "text-ink underline decoration-line underline-offset-4 hover:text-accent";

function DeskNote({ category }: { category: Category }) {
  if (category === "brushes") {
    return (
      <p className="max-w-[var(--article-max)] text-pretty text-lg leading-relaxed text-ink">
        A first kit is{" "}
        <Link href="/brushes/makeup-brushes-beginners-need" className={inlineLink}>
          the only makeup brushes you need as a beginner
        </Link>
        : a small role-based set if you will wash it, or singles if you only need one or two roles.
        The suitcase version of that short list is{" "}
        <Link href="/brushes/travel-makeup-brushes" className={inlineLink}>
          travel makeup brushes
        </Link>
        —retractable cheek, dual-ended, or a mini pouch. The cheek color itself is a different fork:{" "}
        <Link href="/brushes/cream-blush-vs-powder-blush" className={inlineLink}>
          cream blush vs powder blush
        </Link>
        , a melted flush or a pressed powder that sets.
      </p>
    );
  }

  if (category === "perfume") {
    return (
      <p className="max-w-[var(--article-max)] text-pretty text-lg leading-relaxed text-ink">
        Winter comfort is splitting into two characters.{" "}
        <Link href="/perfume/skin-scent-vs-modern-vanilla" className={inlineLink}>
          Skin scent vs modern vanilla
        </Link>{" "}
        is the close musk, or the vanilla with pepper and wood. Mist versus eau de parfum is{" "}
        <Link href="/perfume/body-mist-vs-eau-de-parfum" className={inlineLink}>
          a concentration question
        </Link>
        . Fresh and warm families, which both of those lanes can sit inside, are{" "}
        <Link href="/perfume/fresh-vs-warm-perfumes" className={inlineLink}>
          the broader sort
        </Link>
        .
      </p>
    );
  }

  if (category === "articles") {
    return (
      <p className="max-w-[var(--article-max)] text-pretty text-lg leading-relaxed text-ink">
        The glossy-balm filter is{" "}
        <Link href="/articles/best-dior-lip-glow-dupes" className={inlineLink}>
          Dior Lip Glow dupes
        </Link>
        : balm versus oil, with a Korean balm for sheer natural color and daily hydration.
      </p>
    );
  }

  return null;
}

export function CategoryListing({
  department,
  articles,
}: {
  department: Department;
  articles: ArticleSummary[];
}) {
  return (
    <div className="content-wrap flex flex-col gap-space-6 py-space-8">
      <PageIntro eyebrow={department.eyebrow} title={department.title} lede={department.lede} />
      <DeskNote category={department.category} />
      <ListingBrowser articles={articles} />
    </div>
  );
}
