import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageFrame } from "@/components/image-frame";
import { feedIndex, liveProducts } from "@/lib/project-feed";
import { shopSectionFor, shopSections } from "@/lib/shop-sections";

type Props = { params: Promise<{ section: string }> };

export function generateStaticParams() {
  return shopSections.map(({ slug }) => ({ section: slug }));
}

export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const group = shopSections.find(item => item.slug === section);
  if (!group) notFound();
  return { title: group.label, alternates: { canonical: "/shop/" + section } };
}

export default async function ShopSection({ params }: Props) {
  const { section } = await params;
  const group = shopSections.find(item => item.slug === section);
  if (!group) notFound();
  const [products, entries] = await Promise.all([liveProducts(), feedIndex()]);
  const picks = products.filter(product => shopSectionFor(product.title) === section);
  const articles = entries.filter(entry => entry.kind === "article" && shopSectionFor(entry.title, entry.path) === section);
  return <div className="content-wrap flex flex-col gap-space-4 py-space-8">
    <h1 className="font-serif text-5xl">{group.label}</h1>
    <h2 className="font-serif text-3xl">Shop products</h2>
    <ul className="grid gap-space-4 sm:grid-cols-2 lg:grid-cols-3">
      {picks.map(product => <li key={product.slug}><Link href={"/products/" + product.slug}>
        {product.image && <ImageFrame src={product.image} contain ratio="aspect-[3/2]" />}
        <span className="mt-3 block font-serif text-xl">{product.title}</span>
      </Link></li>)}
    </ul>
    <Link href="/products" className="underline">Browse all products</Link>
    {articles.length > 0 && <section><h2 className="mb-3 font-serif text-3xl">Articles &amp; guides</h2>
      <ul className="divide-y divide-line">{articles.map(article => <li key={article.path} className="py-3">
        <Link className="hover:underline" href={article.path}>{article.title}</Link>
      </li>)}</ul></section>}
  </div>;
}
