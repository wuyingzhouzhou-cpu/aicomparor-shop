declare module "*.mdx" {
  export const frontmatter: {
    title: string;
    description: string;
    category: string;
    updated: string;
    readingMinutes: number;
    heroImage: string;
    toc?: { id: string; label: string }[];
  };
}
