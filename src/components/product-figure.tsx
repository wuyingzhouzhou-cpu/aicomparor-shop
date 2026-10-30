import Image from "next/image";
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { ButtonSecondary } from "@/components/button";

const outboundRel = "sponsored noopener noreferrer";

export type ProductFigureProps = {
  src: string;
  alt: string;
  name: string;
  productUrl: string;
  /** Future affiliate hop. Null or omitted keeps both links on productUrl. */
  affiliateUrl?: string | null;
  caption?: string;
  /** When true, preload the image. In-body figures stay lazy. */
  priority?: boolean;
  sizes?: string;
};

function shopHref(productUrl: string, affiliateUrl?: string | null) {
  if (typeof affiliateUrl === "string" && affiliateUrl.length > 0) {
    return affiliateUrl;
  }

  return productUrl;
}

export function ProductFigure({
  src,
  alt,
  name,
  productUrl,
  affiliateUrl = null,
  caption,
  priority = false,
  sizes = "(min-width: 768px) 720px, 100vw",
}: ProductFigureProps) {
  const href = shopHref(productUrl, affiliateUrl);

  return (
    <figure className="product-figure flex h-full min-w-0 flex-col">
      <a
        href={href}
        target="_blank"
        rel={outboundRel}
        aria-label={`${alt} (opens in a new tab)`}
        className="product-photo block"
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover"
            {...(priority ? { preload: true } : { loading: "lazy" as const })}
          />
        </div>
      </a>
      <figcaption className="mt-space-2 flex flex-1 flex-col items-start">
        <span className="font-serif text-lg leading-tight text-ink">{name}</span>
        {caption ? (
          <span className="mt-space-1 text-sm leading-snug text-ink-muted">{caption}</span>
        ) : null}
        <div className="mt-auto pt-space-2">
          <ButtonSecondary href={href}>
            Shop
            <span className="sr-only"> {name} (opens in a new tab)</span>
          </ButtonSecondary>
        </div>
      </figcaption>
    </figure>
  );
}

type ProductCompareProps = {
  caption?: string;
  children: ReactNode;
};

const compareSizes = "(min-width: 768px) 340px, 46vw";

export function ProductCompare({ caption, children }: ProductCompareProps) {
  const figures = Children.map(children, (child) => {
    if (!isValidElement<ProductFigureProps>(child)) {
      return child;
    }

    const figure = child as ReactElement<ProductFigureProps>;

    return cloneElement(figure, {
      sizes: figure.props.sizes ?? compareSizes,
    });
  });

  return (
    <figure className="product-compare">
      <div className="grid grid-cols-2 items-stretch gap-space-2 sm:gap-space-3">{figures}</div>
      {caption ? (
        <figcaption className="mt-space-2 text-sm leading-snug text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
