import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import type { Department } from "@/lib/departments";

export function CategoryCard({ department, index }: { department: Department; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/${department.category}`}
      className="group flex min-h-11 flex-col"
    >
      <ImageFrame
        src={department.image}
        ratio="aspect-[4/5]"
        sizes="(min-width: 1024px) 340px, 100vw"
      />
      <p className="eyebrow mt-space-2">{number}</p>
      <h3 className="mt-space-1 font-serif text-3xl leading-none tracking-[-0.02em] text-ink group-hover:text-accent">
        {department.title}
      </h3>
      <p className="mt-space-2 text-sm leading-6 text-ink-muted">{department.description}</p>
      <span className="mt-space-2 text-[12px] uppercase tracking-[0.16em] text-accent">
        {department.eyebrow}
      </span>
    </Link>
  );
}
