import { ButtonPrimary } from "@/components/button";
import { PageIntro } from "@/components/page-intro";

export default function NotFound() {
  return (
    <div className="content-wrap flex flex-col items-start gap-space-4 py-space-8">
      <PageIntro
        eyebrow="404"
        title="This page is not in the edit."
        lede="The essay may have moved, or it was never set in type."
      />
      <ButtonPrimary href="/">Back to the magazine</ButtonPrimary>
    </div>
  );
}
