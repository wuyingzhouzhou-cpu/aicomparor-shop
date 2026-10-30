/** Essay heroes that must stay biased toward the brush head. */
const centerTwentyHeroes = new Set([
  "/assets/brushes/a-brush-with-weight/hero/brush-weight-hero-recrop-3x2.jpg",
  "/assets/brushes/a-brush-with-weight/hero/brush-weight-hero-recrop-3x2.webp",
  "/assets/brushes/a-brush-with-weight/hero/hakuhodo-202-finishing.jpg",
]);

export function isBrushWeightHero(src: string) {
  return centerTwentyHeroes.has(src);
}

/** Keeps a bottom size scale out of a 3:2 cover crop if an older square still is used. */
export function objectPositionClass(src: string) {
  return isBrushWeightHero(src) ? "object-[center_20%]" : undefined;
}
