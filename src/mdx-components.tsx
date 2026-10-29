import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ProductMention } from "@/components/product-mention";

function MdxAnchor({ href, children, ...rest }: ComponentPropsWithoutRef<"a">) {
  const url = typeof href === "string" ? href : "";

  if (/^https?:\/\//.test(url)) {
    return (
      <a href={url} target="_blank" rel="sponsored noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  if (url.startsWith("/")) {
    return (
      <Link href={url} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={url || undefined} {...rest}>
      {children}
    </a>
  );
}

const components = {
  a: MdxAnchor,
  ProductMention,
} satisfies MDXComponents;

export function useMDXComponents(overrides: MDXComponents = {}): MDXComponents {
  return {
    ...components,
    ...overrides,
  };
}
