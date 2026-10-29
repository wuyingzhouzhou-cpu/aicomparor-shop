import Image from "next/image";

type ImageFrameProps = {
  src: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageFrame({
  src,
  ratio = "aspect-[4/5]",
  priority = false,
  sizes = "(min-width: 1024px) 540px, 100vw",
}: ImageFrameProps) {
  return (
    <div
      className={`relative overflow-hidden border border-line bg-accent-soft ${ratio}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        unoptimized
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
