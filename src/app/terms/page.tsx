import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Terms",
  description: "A placeholder terms note for the first edition of AiComparor.",
};

export default function TermsPage() {
  return (
    <div className="content-wrap flex flex-col gap-space-5 py-space-8">
      <PageIntro
        eyebrow="Stub"
        title="Terms"
        lede="A placeholder. The essays are for reading, not a promise that a product will suit you."
      />
      <div className="article-body">
        <p>
          AiComparor publishes opinion and observation about boots, perfume, and brushes. A
          paragraph is not a warranty, a fit guarantee, or an instruction to buy.
        </p>
        <p>
          Names of products and houses belong to their makers. Links to those houses may earn a
          commission later. They do not transfer ownership of the name.
        </p>
        <p>This site is published as AiComparor, at aicomparor.shop.</p>
      </div>
    </div>
  );
}
