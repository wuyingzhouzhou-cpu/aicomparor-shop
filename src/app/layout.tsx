import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aicomparor.shop"),
  title: {
    default: "AiComparor",
    template: "%s · AiComparor",
  },
  description:
    "AiComparor is a magazine of boots, perfume, and brushes. A short edit of what is worth keeping.",
  applicationName: "AiComparor",
  openGraph: {
    title: "AiComparor",
    description:
      "A magazine of boots, perfume, and brushes. A short edit of what is worth keeping.",
    siteName: "AiComparor",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:bg-surface focus:px-3 focus:text-ink"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
