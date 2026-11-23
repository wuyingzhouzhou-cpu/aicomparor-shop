import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const buildDir = resolve(".next");
const origin = "https://www.aicomparor.shop";
const args = process.argv.slice(2);
const live = args.includes("--live");
const requested = args.filter((arg) => arg !== "--live");
const manifest = live ? { routes: {} } : JSON.parse(await readFile(resolve(buildDir, "prerender-manifest.json"), "utf8"));
const appPaths = live ? {} : JSON.parse(await readFile(resolve(buildDir, "app-path-routes-manifest.json"), "utf8"));
const articles = live ? (await (await fetch("https://admin.expression.net.cn/feeds/aicomparor")).json()).filter(row=>row.kind==="article").map(row=>row.path) : Object.keys(manifest.routes)
  .filter((route) => manifest.routes[route].srcRoute === "/[category]/[slug]");
const routes = requested.length ? requested : articles;

async function rendered(path, extension = ".html") {
  if (live) {
    const response = await fetch(origin + path, {
      redirect: "error",
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (/\bnoindex\b/i.test(response.headers.get("x-robots-tag") ?? "")) {
      throw new Error("X-Robots-Tag contains noindex");
    }
    return response.text();
  }
  try {
    return await readFile(resolve(buildDir, "server/app", path.slice(1) + extension), "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    // Next deployment adapters store prerendered responses under route-cache.
    const source = manifest.routes[path]?.srcRoute ?? path;
    const entry = Object.keys(appPaths).find((key) => appPaths[key] === source);
    if (!entry) throw error;
    const { getRouteCacheKey } = await import("next/dist/server/lib/route-cache-key.js");
    const key = getRouteCacheKey(path, {
      kind: entry.endsWith("/route") ? "APP_ROUTE" : "APP_PAGE",
      sourceRoute: entry,
    });
    return readFile(resolve(buildDir, "server", key.slice(1) + extension), "utf8");
  }
}

// Next serializes attributes in double quotes in the rendered HTML.
function tags(html, name) {
  return Array.from(html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi")), ([tag]) =>
    Object.fromEntries(Array.from(tag.matchAll(/([\w:-]+)="([^"]*)"/g), ([, key, value]) => [key, value])),
  );
}

const sitemap = await rendered("/sitemap.xml", ".body");
const usedTitles = new Map();
const usedDescriptions = new Map();
let errors = 0;

function check(condition, route, message) {
  if (condition) return;
  errors += 1;
  console.error(`${route}: ${message}`);
}

if (!live && !requested.length) {
  const files = await readdir("src/content", { recursive: true });
  for (const file of files.filter((file) => file.endsWith(".mdx"))) {
    const route = "/" + file.slice(0, -4);
    check(articles.includes(route), route, "MDX file has no prerendered article route");
  }
}

for (const route of routes) {
  const before = errors;
  if (!articles.includes(route)) {
    check(false, route, "not a prerendered article route");
    continue;
  }

  try {
    const html = await rendered(route);
    const url = origin + route;
    const meta = tags(html, "meta");
    const title = html.match(/<title>([^<]*)<\/title>/i)?.[1];
    const description = meta.find(({ name }) => name === "description")?.content;
    const canonicals = tags(html, "link").filter(({ rel }) => rel === "canonical");
    check(title?.trim(), route, "missing document title");
    check(description?.trim(), route, "missing meta description");
    check(canonicals.length === 1 && canonicals[0].href === url, route, "canonical differs from the article URL");
    check(!meta.some(({ name, content }) =>
      /^(robots|googlebot)$/i.test(name ?? "") && /\bnoindex\b/i.test(content ?? ""),
    ), route, "robots metadata contains noindex");
    check(tags(html, "h1").length === 1, route, "expected exactly one H1");
    check(sitemap.includes(`<loc>${url}</loc>`), route, "missing from sitemap");

    for (const [values, value, label] of [
      [usedTitles, title, "title"],
      [usedDescriptions, description, "description"],
    ]) {
      if (!value) continue;
      check(!values.has(value), route, `duplicate ${label} from ${values.get(value)}`);
      values.set(value, route);
    }

    const ids = new Set(Array.from(html.matchAll(/<[^>]+\sid="([^"]+)"/g), ([, id]) => id));
    for (const { href = "", rel = "" } of tags(html, "a")) {
      if (href.startsWith("#") && href.length > 1) {
        check(ids.has(href.slice(1)), route, `missing anchor ${href}`);
      }
      if (/^https:\/\/(?:www\.|old\.)?reddit\.com\//i.test(href)) {
        check(!rel.split(/\s+/).includes("sponsored"), route, "Reddit source link is marked sponsored");
      }
      if (/^https:\/\/(?:www\.)?amazon\.com\/[^#]*[?&](?:amp;)?tag=/i.test(href)) {
        check(rel.split(/\s+/).includes("sponsored"), route, "Amazon US affiliate link is missing rel=sponsored");
      }
    }

    const schema = Array.from(html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([^<]*)<\/script>/g),
      ([, json]) => JSON.parse(json));
    const article = schema.flatMap((item) => item["@graph"] ?? [item])
      .find((item) => item["@type"] === "Article");
    check(article?.mainEntityOfPage?.["@id"] === url, route, "Article JSON-LD is missing or points to another URL");
    if (errors === before) console.log(`PASS ${route}`);
  } catch (error) {
    check(false, route, error.message);
  }
}

console.log(`SEO audit: ${routes.length} articles, ${errors} issues (${live ? "live" : "build"})`);
if (errors) process.exitCode = 1;
