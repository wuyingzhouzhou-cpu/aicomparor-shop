# AiComparor

Editorial magazine for [aicomparor.shop](https://aicomparor.shop). Batch 1 is a static Next.js site: paper-colored layout, MDX essays, and no database.

## Local

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

No environment variables are required.

## Routes

| Path | What it is |
| --- | --- |
| `/` | Home: nav, hero, three departments, editors’ picks, how we pick, newsletter stub, footer |
| `/boots` `/perfume` `/brushes` `/guides` | Listing shells with sort chips and a non-functional load-more control |
| `/about` | House note |
| `/compare` | Placeholder. Comparison UI comes later |
| `/privacy` `/terms` | Stubs linked from the footer |
| `/[category]/[slug]` | Essay, for example `/boots/the-quiet-chelsea` |
| `/products` and `/products/[slug]` | Published US products and individual product pages |

## Essays

MDX lives in `src/content/<category>/<slug>.mdx`. `@next/mdx` compiles it. YAML frontmatter is exported as `frontmatter` via `remark-frontmatter` and `remark-mdx-frontmatter`.

Required frontmatter:

```yaml
title: "The Quiet Chelsea"
description: "A city Chelsea after rain, and why it stayed in the edit."
category: boots
updated: "2026-04-02"
readingMinutes: 8
heroImage: "/placeholders/chelsea.svg"
```

`category` is one of `boots`, `perfume`, `brushes`, `guides`, and it must match the folder. Optional `toc` is a list of `{ id, label }` pointing at heading ids in the essay. Use it on longer pieces.

To add an essay:

1. Create `src/content/<category>/<slug>.mdx` with the frontmatter above.
2. Register the file in `src/lib/articles.ts`.
3. The public URL is `/<category>/<slug>`.

`ProductMention` is available in every essay. Its link opens in a new tab with `rel="sponsored noopener noreferrer"`.

To reference a product pushed from the research dashboard, paste the MDX shown on its dashboard card. The reference reads the product title and retailer from the catalog and links to the product page.

```mdx
<PublishedProduct slug="amazon-us-example" />
```

When previewing with the UK Home Deals research dashboard, run `npm run dev -- --port 3001` for AiComparor. Pushing from the dashboard updates `src/data/published-products.json`.

Placeholder plates are SVG files in `public/placeholders/`.

## Article publishing

1. In Codex, run the user skill **成稿 SEO 审核** (`$finished-seo-audit`) against the finished article and its sources. Review search intent, evidence, brand and SKU accuracy, affiliate disclosure, and links before publishing.
2. Open the AiComparor project in the [project dashboard](https://admin.expression.net.cn/dashboard/editorial?productId=aicomparor), save the Markdown draft, preview it and resolve review findings. Publish the approved draft in that project. Use the product editor in the same project for US products.
3. Check the public route and run `npm run seo:audit -- --live /category/slug`. New content is read from the published project feed. Deploy the website when its code changes.

## Deploy on Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **Add New… → Project**.
3. **Import** the GitHub repository.
4. Leave the framework preset as **Next.js**. The root directory is the repository root. No environment variables are needed for this scaffold.
5. Choose **Deploy**.
6. When you are ready for the real hostname, open the project **Settings → Domains**, add `aicomparor.shop`, and follow the DNS records Vercel shows.

Preview deployments work as soon as the import succeeds. The custom domain can wait.
