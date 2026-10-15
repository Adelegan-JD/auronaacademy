import type { Metadata } from "next";
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

          <div className="contact-grid">
            <a
              className="contact-card"
              href="https://wa.me/14313238372"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={28} aria-hidden="true" />

              <h2>WhatsApp</h2>

              <p>Start a conversation with Aurona Academy.</p>

              <span>Open WhatsApp</span>
            </a>

            <a
              className="contact-card"
              href="tel:+14313238372"
            >
              <Phone size={28} aria-hidden="true" />

              <h2>Telephone</h2>

              <p>Contact us using the number shown on our flyer.</p>

              <span>+1 (431) 323-8372</span>
            </a>

            <a
              className="contact-card"
              href="mailto:auronaacademy@gmail.com"
            >
              <Mail size={28} aria-hidden="true" />

              <h2>Email</h2>

              <p>Send us a message about your learning needs.</p>

              <span>auronaacademy@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}