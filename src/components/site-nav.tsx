"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/boots", label: "Boots" },
  { href: "/perfume", label: "Perfume" },
  { href: "/brushes", label: "Brushes" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper">
      <div className="content-wrap flex h-14 items-center justify-between gap-space-2 md:h-16">
        <Link href="/" className="inline-flex min-h-11 items-center font-serif text-2xl tracking-[-0.03em] text-ink">
          AiComparor
        </Link>

        <nav aria-label="Primary" className="hidden items-center md:flex">
          {links.map((link) => {
            const current = isCurrent(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center px-3 text-[12px] uppercase tracking-[0.16em] ${
                  current ? "text-accent" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <span className="relative block h-4 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-4 bg-ink ${open ? "top-[7px] rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-4 bg-ink ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-4 bg-ink ${open ? "top-[7px] -rotate-45" : "top-3.5"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line md:hidden">
          <ul className="content-wrap flex flex-col py-space-1">
            {links.map((link) => {
              const current = isCurrent(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`inline-flex min-h-11 w-full items-center text-[13px] uppercase tracking-[0.16em] ${
                      current ? "text-accent" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
