import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aurona Academy to ask about programmes, online tutoring, and enrolment.",
};

export default function ContactPage() {
  const endpoint =
    process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT ?? "";

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Contact Us</span>

            <h1>Let's talk about your learning goals.</h1>

            <p>
              Tell us which subject or programme interests you.
              We can discuss current availability, scheduling,
              and pricing.
            </p>
          </div>

          <div className="contact-layout">
            <div>
              <h2>Send an Enquiry</h2>

              <p className="contact-intro">
                Share a few details so we can understand the
                learning support you are looking for.
              </p>

              <EnquiryForm endpoint={endpoint} />
            </div>

            <aside className="contact-sidebar">
              <h2>Prefer to contact us directly?</h2>

              <a
                className="contact-method"
                href="https://wa.me/14313238372"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={22} aria-hidden="true" />

                <span>
                  <strong>WhatsApp</strong>
                  <small>Start a conversation</small>
                </span>
              </a>

              <a
                className="contact-method"
                href="tel:+14313238372"
              >
                <Phone size={22} aria-hidden="true" />

                <span>
                  <strong>Telephone</strong>
                  <small>+1 (431) 323-8372</small>
                  <small>+234 (70) 6939 6914</small>
                  <small>+234 (81) 6254 1654</small>
                </span>
              </a>

              <a
                className="contact-method"
                href="mailto:auronaacademy@gmail.com"
              >
                <Mail size={22} aria-hidden="true" />

                <span>
                  <strong>Email</strong>
                  <small>auronaacademy@gmail.com</small>
                </span>
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}