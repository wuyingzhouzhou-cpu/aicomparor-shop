import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Privacy",
  description: "A placeholder privacy note for the first edition of AiComparor.",
};

export default function PrivacyPage() {
  return (
    <div className="content-wrap flex flex-col gap-space-5 py-space-8">
      <PageIntro
        eyebrow="Stub"
        title="Privacy"
        lede="A placeholder for the first edition. It will be replaced before the site begins to collect anything."
      />
      <div className="article-body">
        <p>This edition does not ask you to create an account.</p>
        <p>
          The newsletter field on the home page does not send your address to a server. It stays in
          the browser and tells you the list is not open.
        </p>
        <p>
          There is no analytics SDK and no affiliate tracking SDK in this version. Product links
          leave the site in a new tab. When measurement is added, this page will say so in plain
          language before it happens.
        </p>
      </div>
    </div>
  );
}
