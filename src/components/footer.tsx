import Link from "next/link";

const editLinks = [
  { href: "/boots", label: "Boots" },
  { href: "/perfume", label: "Perfume" },
  { href: "/brushes", label: "Brushes" },
  { href: "/guides", label: "Guides" },
  { href: "/guides/reading-a-boot", label: "How to Read a Boot" },
];

const houseLinks = [
  { href: "/about", label: "About" },
  { href: "/compare", label: "Compare" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function LinkList({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="mt-space-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="inline-flex min-h-11 items-center text-sm text-ink">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="content-wrap grid gap-space-6 py-space-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl tracking-[-0.03em]">AiComparor</p>
          <p className="mt-space-2 max-w-sm text-sm leading-6 text-ink-muted">
            A magazine of boots, perfume, and brushes. Written slowly, for aicomparor.shop.
          </p>
        </div>
        <div>
          <p className="eyebrow">The edit</p>
          <LinkList links={editLinks} />
        </div>
        <div>
          <p className="eyebrow">The house</p>
          <LinkList links={houseLinks} />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="content-wrap flex flex-col gap-space-1 py-space-3 text-sm leading-6 text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 AiComparor</p>
          <p>We may earn a commission from links on this page.</p>
        </div>
      </div>
    </footer>
  );
}
