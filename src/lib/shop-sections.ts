export const shopSections = [
  { slug: "clothing", label: "Clothing", matches: /\b(jeans?|pants?|blouses?|hoodies?|tights|underwear|hipster|leggings|skirts?|dresses|dress|tops?|sweatshirts?|sweaters?|jackets?|shirts?)\b/i },
  { slug: "shoes", label: "Shoes", matches: /\b(boots?|shoes?|sneakers?|sandals?|loafers?)\b/i },
  { slug: "beauty", label: "Beauty", matches: /\b(perfumes?|cologne|parfum|toilette|brush(es)?|lip|makeup|cosmetic|toiletry|vanity|blush|concealer|skincare|fragrance)\b/i },
  { slug: "home-tech", label: "Home & Tech", matches: /\b(projectors?|screens?|tv|electronics|kitchen|bedding|lamps?|appliances?)\b/i },
];

export function shopSectionFor(title: string, path = "") {
  if (path.startsWith("/boots/")) return "shoes";
  if (path.startsWith("/perfume/") || path.startsWith("/brushes/")) return "beauty";
  return shopSections.find(section => section.matches.test(title))?.slug;
}
