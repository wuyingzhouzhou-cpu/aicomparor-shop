import { ListingBrowser } from "@/components/listing-browser";
import { PageIntro } from "@/components/page-intro";
import type { Department } from "@/lib/departments";
import type { ArticleSummary } from "@/lib/types";

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
      <ListingBrowser articles={articles} />
    </div>
  );
}
