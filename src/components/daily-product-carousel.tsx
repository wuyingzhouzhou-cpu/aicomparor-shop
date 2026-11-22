"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type Slide = { slug: string; title: string; image: string; merchant: string };

const easternDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit",
});

export function DailyProductCarousel({ slides, initialTime }: { slides: Slide[]; initialTime: number }) {
  const [now, setNow] = useState(initialTime);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const date = easternDate.format(now);
  const day = Math.floor(Date.parse(date + "T00:00:00Z") / 86400000);
  const count = Math.min(3, slides.length);
  const slot = offset % count;
  const product = slides[(day + slot) % slides.length];

  useEffect(() => {
    const clock = window.setInterval(() => setNow(Date.now()), 30000);
    return () => window.clearInterval(clock);
  }, []);
  useEffect(() => {
    if (paused || hover || count < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setOffset(value => (value + 1) % count);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, hover, count]);

  function step(direction: number) {
    setPaused(true);
    setOffset(value => (value + count + direction) % count);
  }

  return (
    <section aria-label="Daily product picks" aria-roledescription="carousel"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocusCapture={() => setPaused(true)} className="min-w-0 border border-line bg-surface">
      <div className="flex items-baseline justify-between gap-2 px-5 pt-5">
        <h2 className="font-serif text-3xl">Today’s picks</h2>
        <time className="eyebrow" dateTime={date}>{new Intl.DateTimeFormat("en-US", {timeZone:"America/New_York",month:"short",day:"numeric"}).format(now)}</time>
      </div>
      <Link href={'/products/' + product.slug} className="group block p-5">
        <div className="relative aspect-[4/3] bg-paper">
          <Image unoptimized fill src={product.image} alt={product.title} className="object-contain" />
        </div>
        <p className="eyebrow mt-5">{product.merchant}</p>
        <h3 className="mt-2 font-serif text-3xl leading-tight group-hover:underline">{product.title}</h3>
        <span className="mt-3 inline-block text-sm underline underline-offset-4">View product →</span>
      </Link>
      {count > 1 && <div className="flex items-center gap-2 border-t border-line px-5 py-1 text-sm">
        <span className="mr-auto tabular-nums">{slot + 1} / {count}</span>
        <button className="min-h-11 px-2 motion-reduce:hidden" onClick={() => setPaused(!paused)}>{paused ? "Play" : "Pause"}</button>
        <button className="size-11 text-xl" aria-label="Previous product" onClick={() => step(-1)}>←</button>
        <button className="size-11 text-xl" aria-label="Next product" onClick={() => step(1)}>→</button>
      </div>}
    </section>
  );
}
