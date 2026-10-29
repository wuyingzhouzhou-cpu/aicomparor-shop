import type { Metadata } from "next";
import { ButtonSecondary } from "@/components/button";
import { DisclosureBar } from "@/components/disclosure-bar";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "AiComparor is a short magazine of boots, perfume, and brushes. Essays first. Comparison later.",
};

export default function AboutPage() {
  return (
    <div className="content-wrap flex flex-col gap-space-5 py-space-8">
      <PageIntro
        eyebrow="The house"
        title="A short magazine, on purpose."
        lede="AiComparor reads boots, perfume, and brushes so the page can stay small."
      />
      <div className="article-body">
        <p>
          Comparison tables got loud, and the objects got quiet. This first edition is essays. A
          later one may set two things side by side. Until then, the writing is the comparison:
          what we kept, and the plain reason why.
        </p>
        <p>
          A piece gets here when we have worn it or held it past the first impression. The boot
          after rain. The perfume on the third hour. The brush before it meets color. If we would
          not keep it, it does not get the paragraph.
        </p>
        <p>
          There is no account on this edition. The letter on the home page does not leave your
          browser. When that changes, the privacy note will change first.
        </p>
      </div>
      <div className="max-w-[var(--article-max)]">
        <DisclosureBar />
      </div>
      <div className="flex flex-wrap gap-space-2">
        <ButtonSecondary href="/guides/reading-a-boot">Read a guide</ButtonSecondary>
        <ButtonSecondary href="/">Back to the magazine</ButtonSecondary>
      </div>
    </div>
  );
}
