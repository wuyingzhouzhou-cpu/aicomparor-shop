import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What the AiComparor magazine site does with the newsletter field, product links, and Google Search Console. No reader account, and no Search Console connection in this site.",
};

export default function PrivacyPage() {
  return (
    <div className="content-wrap flex flex-col gap-space-5 py-space-8">
      <PageIntro
        eyebrow="11 November 2026"
        title="Privacy"
        lede="This page describes the public magazine at aicomparor.shop. It replaces the earlier note on this URL."
      />
      <div className="article-body">
        <h2>Who publishes this site</h2>
        <p>
          AiComparor publishes a magazine of boots, perfume, and brushes at{" "}
          <a href="https://www.aicomparor.shop">www.aicomparor.shop</a> and aicomparor.shop. The
          pages are essays. Readers do not place orders or make payments here. The footer copyright
          line is © 2026 AiComparor.
        </p>
        <p>
          The name published on the site is AiComparor. A legal entity name, a postal address, and
          a privacy email are not published with it.
        </p>

        <h2>The magazine</h2>
        <p>
          You can read the essays, the department pages, <Link href="/about">About</Link>, and{" "}
          <Link href="/terms">Terms</Link> without an account. This edition has no sign-in, no
          reader profile, and no order history.
        </p>
        <p>
          The home page has a field for a letter that is not open yet. The form does not submit the
          address. Choosing “Request a note” stays in the browser, cancels the submit, and shows:
          “This address stayed in the browser. The letter is not open yet.” The address is not sent
          to a server by this page.
        </p>

        <h2>Cookies and measurement</h2>
        <p>
          This application does not set its own cookies. It does not include an analytics SDK, an
          advertising SDK, or an affiliate tracking SDK. The pages do not load a third-party
          measurement script.
        </p>
        <p>
          The site is a Next.js app deployed on Vercel, on www.aicomparor.shop and aicomparor.shop.
          On 11 November 2026 that Vercel project had no environment variables. This repository does
          not configure the host’s request logs, so this page does not state how long the host keeps
          them.
        </p>

        <h2>Product links and commissions</h2>
        <p>
          Some essays link to a product. The product image, the shop button, and “View the maker”
          open in a new tab with <code>rel=&quot;sponsored noopener noreferrer&quot;</code>.
        </p>
        <p>
          Some of those links are affiliate links. Amazon links in the essays carry the Associates
          tag <code>aicomparor-20</code>. Other essays use affiliate short links at{" "}
          <code>invl.me</code>. A click leaves this site. The site you land on — Amazon, the
          short-link host, or the maker — then handles that visit under its own policy. Where an
          essay has no affiliate URL, the link goes to the product page directly.
        </p>
        <p>
          The footer says we may earn a commission from links on the page. The same sentence
          appears on pages that use the disclosure bar. Commission is disclosed there. It is not a
          reader account and it is not a tracker installed on this site.
        </p>

        <h2>Google Search Console and an SEO sync tool</h2>
        <p>
          This public magazine does not offer an SEO sync tool, and it does not connect you to
          Google Search Console. The application has no Google sign-in, no OAuth client, and no
          Search Console API call. Nothing in this site requests a Search Console scope, reads
          queries, pages, clicks, impressions, click-through rate, or position, or stores a Google
          access token or refresh token.
        </p>
        <p>
          Search Console metrics describe how a property appears in Google Search. They are
          aggregated query and page figures. They are not the name, account, or identity of the
          person who searched. This site does not receive those figures.
        </p>
        <p>
          An SEO sync tool is not part of this repository, and it is not linked from the magazine.
          This page does not describe scopes, token storage, encryption, a retention period, a
          deletion control, or who can read Google data, because those mechanisms are not in this
          site. Writing them here would be a guess.
        </p>
        <p>
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google’s API Services User Data Policy
          </a>, including its Limited Use requirements, is Google’s rule for applications that access
          the Google user data that policy covers. This magazine does not request that access. If a
          later feature asks anyone to connect a Google account, this page will change first, and
          the change will describe the access, use, storage, sharing, and deletion that the feature
          actually performs.
        </p>

        <h2>Deleting data and removing Google access</h2>
        <p>
          There is no reader account on this site to delete, and there is no Google connection here
          to disconnect. The newsletter address is not stored by the site.
        </p>
        <p>
          If some other application has access to a Google Account, that access is removed in the
          Google Account permissions page:{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            myaccount.google.com/permissions
          </a>. This magazine does not hold a copy of that grant, so it has nothing of its own to erase
          when that access is removed.
        </p>

        <h2>Changes</h2>
        <p>
          This page was updated on <time dateTime="2026-11-11">11 November 2026</time>. If the
          magazine adds an account, sends the newsletter address to a server, adds measurement, or
          asks for a Google connection, this page will be updated before that ships. The{" "}
          <Link href="/about">About</Link> page states the same order for accounts and the letter.
        </p>

        <h2>Contact</h2>
        <p>
          A privacy contact email is not published on this site. The name on the site is
          AiComparor, at aicomparor.shop. The address <code>name@example.com</code> in the
          newsletter field is sample text in the form. It is not a contact address.
        </p>
        <p>
          The footer links to <Link href="/about">About</Link>,{" "}
          <Link href="/compare">Compare</Link>, <Link href="/privacy">Privacy</Link>, and{" "}
          <Link href="/terms">Terms</Link>.
        </p>
      </div>
    </div>
  );
}
