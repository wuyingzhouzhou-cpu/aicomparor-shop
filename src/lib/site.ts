/** Canonical site origin (matches sitemap). */
export const siteUrl = "https://www.aicomparor.shop";

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}
