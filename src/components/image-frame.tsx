import Image from "next/image";

/**
 * Cover frame for a still that is already cropped to the slot.
 *
 * `ratio` is required. A silent `aspect-[4/5]` default was cropping
 * article heroes that belong in a 3:2 frame.
 *
 * Main slots:
 * - `aspect-[3/2]` — ArticleCard and the article-top hero
 * - `aspect-[4/3]` — method strip (ProductFigure keeps its own 4:3 frame)
 * - `aspect-[4/5]` — homepage rooms (CategoryCard)
 *
 * Fit is `object-cover` with `object-position: center`.
 */
export type ImageFrameRatio = "aspect-[3/2]" | "aspect-[4/3]" | "aspect-[4/5]";

type ImageFrameProps = {
  src: string;
  alt?: string;
  ratio: ImageFrameRatio;
  priority?: boolean;
  sizes?: string;
};

export function ImageFrame({
  src,
  alt = "",
  ratio,
  priority = false,
  sizes = "(min-width: 1024px) 540px, 100vw",
}: ImageFrameProps) {
  const decorative = alt.length === 0;

  return (
    <div
      className={`relative overflow-hidden border border-line bg-accent-soft ${ratio}`}
      {...(decorative ? { "aria-hidden": true as const } : {})}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizes}
        className="object-cover object-center"
        {...(priority ? { preload: true } : {})}
      />
    </div>
  );
}
