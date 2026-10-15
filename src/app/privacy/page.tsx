import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Aurona Academy handles personal information submitted through its website.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Privacy</span>

          <h1>Privacy Policy</h1>

          <p>
            This page must explain how Aurona Academy collects,
            uses, stores, shares, and retains personal information.
          </p>

          <p>
            Before launch, replace this preliminary text with a
            policy that accurately reflects the website's actual
            data practices and applicable legal requirements.
          </p>

          <h2>Information We Collect</h2>

          <p>
            Describe the information collected through enquiry,
            registration, analytics, and any other enabled features.
          </p>

          <h2>How We Use Information</h2>

          <p>
            Explain the purposes for which personal information
            is used and the applicable lawful basis where required.
          </p>

          <h2>Data Retention and Security</h2>

          <p>
            Describe actual retention practices, security measures,
            and relevant service providers.
          </p>

          <h2>Contact</h2>

          <p>
            Provide a verified contact channel for privacy questions
            and applicable rights requests.
          </p>
        </div>
      </section>
    </main>
  );
}