import { ImageFrame } from "@/components/image-frame";

const thumbs = [
  "/assets/home/method-strip/boots-4x3.webp",
  "/assets/home/method-strip/perfume-4x3.webp",
  "/assets/home/method-strip/brushes-4x3.webp",
] as const;

const steps = [
  {
    number: "01",
    title: "How we compare",
    body: "We compare structure and wear notes—not a paid shelf.",
  },
  {
    number: "02",
    title: "How you decide",
    body: "You decide by the life you already live.",
  },
  {
    number: "03",
    title: "Where the evidence comes from",
    body: "Evidence is lived notes and published specs—named when it matters.",
  },
] as const;

export function MethodPlate() {
  return (
    <figure>
      <div className="border border-line bg-surface p-space-3">
        <div className="grid grid-cols-3 gap-space-1">
          {thumbs.map((src) => (
            <ImageFrame
              key={src}
              src={src}
              alt=""
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 140px, 30vw"
            />
          ))}
        </div>
        <p className="eyebrow mt-space-3">The method</p>
        <ol className="mt-space-3 list-none">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={index > 0 ? "mt-space-3 border-t border-line pt-space-3" : undefined}
            >
              <p className="eyebrow">{step.number}</p>
              <h3 className="mt-space-1 font-serif text-xl leading-tight tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="mt-space-1 text-sm leading-6 text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-space-2 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
        The method
      </figcaption>
    </figure>
  );
}
