import Image from "next/image";

type ImageFrameProps = {
  src: string;
  alt?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  /** Contain keeps a square product plate intact inside a wider card. */
  fit?: "cover" | "contain";
};

export function ImageFrame({
  src,
  alt = "",
  ratio = "aspect-[4/5]",
  priority = false,
  sizes = "(min-width: 1024px) 540px, 100vw",
  fit = "cover",
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
        sizes={sizes}
        unoptimized={src.endsWith(".svg")}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        {...(priority ? { preload: true } : { loading: "lazy" as const })}
      />
    </div>
  );
}
