import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aurona Academy collects and uses information submitted through its website.",
};

export default function PrivacyPage() {
  return (
    <main><section className="section"><div className="container policy-content">
      <span className="eyebrow">Your Information Matters</span>
      <h1>Privacy Policy</h1>
      <p className="page-intro">This notice explains how Aurona Academy handles information you submit through this website. It applies to website enquiries and is not a substitute for any separate terms that may apply when you enrol in a programme.</p>
      <p><strong>Last updated: 23 November 2026</strong></p>
      <h2>1. Information we collect</h2>
      <p>When you submit an enquiry, we collect the information in the form: your name, email address, country, programme of interest, educational level (if provided), preferred contact method, message (if provided), and your privacy acknowledgement. The website also processes a salted, one-way hash derived from your network address for basic abuse prevention. We do not store the raw network address in the enquiry record.</p>
      <h2>2. How we use your information</h2>
      <p>We use enquiry information to understand your learning needs, respond to your questions, discuss programme availability and arrangements, and maintain records of enquiries. We use the hashed network identifier to limit automated or repeated submissions. We do not use enquiry form data to make automated decisions about learners.</p>
      <h2>3. Storage and service providers</h2>
      <p>Enquiry records are designed to be stored in a managed PostgreSQL database hosted by Supabase. If email notifications are configured, the notification is sent using Resend to Aurona Academy. These providers process information to provide their services and may process it in locations outside your country. Production storage and email services will only operate after the relevant accounts and configuration have been enabled.</p>
      <h2>4. Sharing</h2>
      <p>We do not sell personal information. We share only the information needed with service providers that support website hosting, enquiry storage, and email delivery, or where disclosure is required by law. We do not publish enquiry details.</p>
      <h2>5. Retention and security</h2>
      <p>We keep enquiry information only for as long as it is reasonably needed to respond, manage the relationship, meet legitimate record-keeping needs, or comply with legal obligations. Access to stored enquiries is restricted to authorised service credentials and is not exposed through a public database endpoint. No internet service can guarantee absolute security.</p>
      <h2>6. Your choices and requests</h2>
      <p>You may contact us to ask about, correct, or request deletion of information you submitted, subject to applicable legal and operational requirements. We may need to verify your request before acting on it.</p>
      <h2>7. Children and enquiries</h2>
      <p>Parents or guardians should submit enquiries on behalf of younger learners where appropriate. Please do not include sensitive personal information, medical details, passwords, or identity-document numbers in the message field.</p>
      <h2>8. Contact</h2>
      <p>For privacy questions or requests, email <a href="mailto:auronaacademy@gmail.com">auronaacademy@gmail.com</a>.</p>
      <p>This notice should be reviewed by the business owner before launch to confirm the actual provider configuration, retention schedule, and legal obligations applicable in the countries served.</p>
      <Link href="/contact" className="button button-primary">Contact Aurona Academy</Link>
    </div></section></main>
  );
}
