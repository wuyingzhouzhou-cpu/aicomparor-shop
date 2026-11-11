import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Search Console Sync",
  description: "This is a private SEO data synchronization tool.",
  alternates: {
    canonical: "https://www.aicomparor.shop/seo-sync",
  },
};

export default function SeoSyncPage() {
  return (
    <div className="content-wrap flex flex-col gap-space-5 py-space-8">
      <header className="flex max-w-[var(--article-max)] flex-col gap-space-2">
        <h1 className="text-balance font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-ink md:text-6xl">
          SEO Search Console Sync
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-ink-muted">
          This is a private SEO data synchronization tool.
        </p>
      </header>
      <div className="article-body">
        <p>It reads data from Google Search Console and saves it to Google Sheets.</p>
        <p>
          <a href="https://www.aicomparor.shop/privacy?utm_source=chatgpt.com">Privacy Policy</a>
        </p>
        <p>
          <a href="mailto:zhaoyunzhou@expression.net.cn">zhaoyunzhou@expression.net.cn</a>
        </p>
      </div>
    </div>
  );
}
