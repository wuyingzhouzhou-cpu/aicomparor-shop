import Image from "next/image";

type StructureFigureProps = {
  src: string;
  alt: string;
  caption: string;
  /** When true, preload the image. In-body figures stay lazy. */
  priority?: boolean;
  /** Intrinsic width. Defaults to the 16:9 guide plates (1280). */
  width?: number;
  /** Intrinsic height. Defaults to the 16:9 guide plates (720). */
  height?: number;
};

export function StructureFigure({
  src,
  alt,
  caption,
  priority = false,
  width = 1280,
  height = 720,
}: StructureFigureProps) {
  return (
    <figure className="structure-figure w-full">
      <div
        className="relative w-full overflow-hidden border border-line bg-paper"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-contain"
          unoptimized={src.endsWith(".svg")}
          {...(priority ? { preload: true } : { loading: "lazy" as const })}
        />
      </div>
      <figcaption className="mt-space-2 text-sm leading-snug text-ink-muted">{caption}</figcaption>
    </figure>
  );
}
