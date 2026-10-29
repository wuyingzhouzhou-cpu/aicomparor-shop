import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { ButtonPrimary } from "@/components/button";
import { CategoryCard } from "@/components/category-card";
import { DisclosureBar } from "@/components/disclosure-bar";
import { ImageFrame } from "@/components/image-frame";
import { NewsletterForm } from "@/components/newsletter-form";
import { homeDepartments } from "@/lib/departments";
import { getSummaries } from "@/lib/articles";

export const metadata: Metadata = {
  title: {
    absolute: "AiComparor — A magazine of boots, perfume, and brushes",
  },
  description:
    "AiComparor reads boots, perfume, and brushes slowly. A short edit of what is worth wearing, and wearing again.",
};

export default function HomePage() {
  const picks = getSummaries();

  return (
    <div className="content-wrap flex flex-col gap-space-8 py-space-8">
      <section className="grid items-end gap-space-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:gap-space-8">
        <div className="flex flex-col items-start gap-space-3">
          <p className="eyebrow">Volume 01</p>
          <h1 className="text-balance font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-ink md:text-6xl lg:text-7xl">
            What is worth wearing, and wearing again.
          </h1>
          <p className="max-w-[42rem] text-pretty text-lg leading-relaxed text-ink-muted">
            AiComparor is a small magazine of boots, perfume, and brushes. We live with a thing
            before we give it a paragraph. The list stays short on purpose.
          </p>
          <ButtonPrimary href="#editors-picks">Read the editors’ picks</ButtonPrimary>
        </div>
        <figure>
          <ImageFrame
            src="/placeholders/hero.svg"
            ratio="aspect-[3/2] lg:aspect-[4/5]"
            priority
            sizes="(min-width: 1024px) 460px, 100vw"
          />
          <figcaption className="mt-space-2 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            Opening plate
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="departments-heading">
        <div className="mb-space-4 max-w-[var(--article-max)]">
          <p className="eyebrow">Departments</p>
          <h2
            id="departments-heading"
            className="mt-space-2 font-serif text-4xl tracking-[-0.03em] text-ink md:text-5xl"
          >
            Three rooms
          </h2>
        </div>
        <div className="grid gap-space-6 md:grid-cols-3">
          {homeDepartments.map((department, index) => (
            <CategoryCard key={department.category} department={department} index={index} />
          ))}
        </div>
      </section>

      <section id="editors-picks" aria-labelledby="picks-heading">
        <div className="mb-space-4 flex items-end justify-between gap-space-3">
          <div>
            <p className="eyebrow">The desk</p>
            <h2
              id="picks-heading"
              className="mt-space-2 font-serif text-4xl tracking-[-0.03em] text-ink md:text-5xl"
            >
              Editors’ picks
            </h2>
          </div>
        </div>
        <div className="grid gap-space-6 sm:grid-cols-2">
          {picks.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section
        id="how-we-pick"
        aria-labelledby="method-heading"
        className="grid gap-space-4 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-space-8"
      >
        <div>
          <p className="eyebrow">The house</p>
          <h2
            id="method-heading"
            className="mt-space-2 font-serif text-4xl tracking-[-0.03em] text-ink md:text-5xl"
          >
            How we pick
          </h2>
        </div>
        <div className="flex max-w-[var(--article-max)] flex-col gap-space-3">
          <p className="text-lg leading-relaxed text-ink">
            We do not arrange the page by commission. A piece enters the edit when it holds up in
            ordinary life: the boot after rain, the perfume on the third hour, the brush that still
            feels right before it is washed.
          </p>
          <p className="text-lg leading-relaxed text-ink-muted">
            Price is named when it matters. If we would not keep it, it does not stay. The sentence
            below is the whole policy.
          </p>
          <DisclosureBar />
        </div>
      </section>

      <section id="letter" aria-labelledby="letter-heading" className="border-t border-line pt-space-6">
        <p className="eyebrow">The letter</p>
        <h2
          id="letter-heading"
          className="mt-space-2 max-w-[16ch] font-serif text-4xl tracking-[-0.03em] text-ink md:text-5xl"
        >
          A note, when there is something to say.
        </h2>
        <p className="mt-space-3 max-w-[var(--article-max)] text-lg leading-relaxed text-ink-muted">
          No weekly flood. We write when the edit changes. The list is not open yet, and this field
          does not send your address anywhere.
        </p>
        <NewsletterForm />
      </section>
    </div>
  );
}
