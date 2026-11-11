import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SEO Search Console Sync retrieves website search performance data from Google Search Console and organizes it in Google Sheets.",
};

export default function PrivacyPage() {
  return (
    <div className="content-wrap flex flex-col gap-space-5 py-space-8">
      <PageIntro
        eyebrow="Application: SEO Search Console Sync"
        title="Privacy Policy"
        lede="Last Updated: November 11, 2026"
      />
      <div className="article-body">
        <h2>1. About This Application</h2>
        <p>
          SEO Search Console Sync is a private SEO reporting tool designed to retrieve website
          search performance data from Google Search Console and organize it in Google Sheets.
        </p>
        <p>The application is intended for personal website management and SEO performance monitoring.</p>

        <h2>2. Information We Access</h2>
        <p>
          With the user&apos;s authorization, the application accesses Google Search Console data
          associated with websites the user is permitted to view.
        </p>
        <p>This information may include:</p>
        <ul>
          <li>Website properties and page URLs</li>
          <li>Search queries</li>
          <li>Search clicks</li>
          <li>Search impressions</li>
          <li>Click-through rates (CTR)</li>
          <li>Average search positions</li>
          <li>Reporting dates</li>
        </ul>
        <p>The application requests read-only access to Google Search Console.</p>
        <p>
          It also requests permission to write reporting data to the Google spreadsheet in which the
          script is installed.
        </p>

        <h2>3. How We Use the Information</h2>
        <p>The information is used exclusively to:</p>
        <ul>
          <li>Collect website search performance metrics</li>
          <li>Generate historical SEO reports</li>
          <li>Monitor keyword and page performance</li>
          <li>Compare search performance across authorized websites</li>
          <li>Automate reporting in Google Sheets</li>
        </ul>
        <p>Google user data is not used for advertising, profiling, or unrelated commercial purposes.</p>

        <h2>4. Data Storage</h2>
        <p>Retrieved reporting data is stored in the Google Sheets document authorized by the user.</p>
        <p>
          The current application does not independently store Google account passwords, OAuth client
          secrets, or access tokens in an external database.
        </p>
        <p>Google manages authentication and authorization through its OAuth services.</p>
        <p>The application does not send Search Console reporting data to a separate developer-operated server.</p>

        <h2>5. Data Sharing</h2>
        <p>
          We do not sell, rent, or share Google Search Console reporting data with advertisers, data
          brokers, or unrelated third parties.
        </p>
        <p>
          Data is processed using Google services, including Google Apps Script, Google Search
          Console API, and Google Sheets.
        </p>
        <p>The application does not transfer reporting data to external analytics or advertising platforms.</p>

        <h2>6. Data Retention and Deletion</h2>
        <p>Reporting data remains in the user&apos;s Google Sheets document until the user deletes it.</p>
        <p>Users can delete individual records, worksheets, or the entire spreadsheet.</p>
        <p>
          Users can also revoke the application&apos;s access through their{" "}
          <a
            href="https://support.google.com/accounts/answer/3466521"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Account security settings
          </a>.
        </p>
        <p>
          Revoking access prevents further authorized synchronization but does not automatically
          delete previously exported spreadsheet data.
        </p>

        <h2>7. Data Security</h2>
        <p>The application uses Google&apos;s OAuth 2.0 authorization mechanism.</p>
        <p>Google Search Console access is read-only.</p>
        <p>Access to the resulting spreadsheet is controlled through Google Sheets sharing and account permissions.</p>
        <p>The application is designed to use only the permissions necessary for its reporting functionality.</p>

        <h2>8. Google API Services</h2>
        <p>
          The application&apos;s use of information received from Google APIs will comply with the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>, including applicable Limited Use requirements.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated when the application&apos;s functionality or
          data-handling practices change.
        </p>
        <p>The latest version will be published on this page, together with its revision date.</p>

        <h2>10. Contact</h2>
        <p>
          For questions concerning this Privacy Policy or the application&apos;s handling of Google
          user data, contact:
        </p>
        <p>
          <a href="mailto:zhaoyunzhou@expression.net.cn">zhaoyunzhou@expression.net.cn</a>
        </p>
      </div>
    </div>
  );
}
