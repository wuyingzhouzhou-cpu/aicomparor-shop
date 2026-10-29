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

Placeholder plates are SVG files in `public/placeholders/`.

## Deploy on Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **Add New… → Project**.
3. **Import** the GitHub repository.
4. Leave the framework preset as **Next.js**. The root directory is the repository root. No environment variables are needed for this scaffold.
5. Choose **Deploy**.
6. When you are ready for the real hostname, open the project **Settings → Domains**, add `aicomparor.shop`, and follow the DNS records Vercel shows.

Preview deployments work as soon as the import succeeds. The custom domain can wait.
