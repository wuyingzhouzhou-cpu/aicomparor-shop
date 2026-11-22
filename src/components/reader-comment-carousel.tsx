"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import comments from "@/data/home-comments.json";
import styles from "./reader-comment-carousel.module.css";

export function ReaderCommentCarousel() {
  const [turn, setTurn] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reading, setReading] = useState(false);

  useEffect(() => {
    if (paused || reading) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!document.hidden && !motion.matches) setTurn(n => n + 1);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, reading]);

  return (
    <div className="mt-5" role="region" aria-label="Reader comments" aria-roledescription="carousel">
      <div className={styles.window} onMouseEnter={() => setReading(true)} onMouseLeave={() => setReading(false)}
        onFocus={() => setPaused(true)}>
        <div key={turn} className={turn ? styles.advance : undefined}>
          {(turn ? [-1, 0, 1] : [0, 1]).map(position => {
            const comment = comments[(turn + position) % comments.length];
            return (
              <div className={styles.row} key={comment.slug} inert={position < 0}>
                <a href={comment.url} className="block w-full focus-visible:outline-offset-[-3px]">
                  <Image src={`/assets/home/comments/${comment.slug}.png`} width={960} height={comment.height}
                    alt={`${comment.topic} — u/${comment.author} on r/Perfumes: “${comment.text}” Read the Reddit discussion.`}
                    sizes="(min-width:1024px) 520px, 100vw" className="h-auto w-full" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 border-t border-line text-sm">
        <button className="min-h-11 px-2 motion-reduce:hidden" onClick={() => setPaused(value => !value)}>
          {paused ? "Play" : "Pause"}
        </button>
        <button className="min-h-11 px-2" onClick={() => { setPaused(true); setTurn(n => n + 1); }}>
          Next comment ↑
        </button>
      </div>
    </div>
  );
}
