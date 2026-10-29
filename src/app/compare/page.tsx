import type { Metadata } from "next";
import { ButtonPrimary } from "@/components/button";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Compare",
  description: "Side-by-side comparison is coming in a later release.",
};

export default function ComparePage() {
  return (
    <div className="content-wrap flex flex-col gap-space-5 py-space-8">
      <PageIntro
        eyebrow="Later"
        title="Coming in a later release"
        lede="Side-by-side comparison is not part of this edition. The essays are here. The table is not."
      />
      <ButtonPrimary href="/#editors-picks">Read the editors’ picks</ButtonPrimary>
    </div>
  );
}
