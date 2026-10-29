import Image from "next/image";

type ImageFrameProps = {
  src: string;
  alt?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageFrame({
  src,
  alt = "",
  ratio = "aspect-[4/5]",
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
        priority={priority}
        unoptimized
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
