import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how to enquire about Aurona Academy's online tutoring and educational support.",
};

const steps = [
  {
    title: "Choose a programme",
    description:
      "Identify the subject or learning area you are interested in.",
  },
  {
    title: "Tell us about your goals",
    description:
      "Share your learning needs, educational level, and preferred contact method.",
  },
  {
    title: "Discuss the arrangements",
    description:
      "Confirm available tutors, fees, scheduling, and the appropriate learning format.",
  },
  {
    title: "Complete registration",
    description:
      "Follow the registration and payment instructions agreed with the academy.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">How It Works</span>

          <h1>Getting started should be straightforward.</h1>

          <p className="page-intro">
            Begin with a conversation about your educational goals.
            We can then discuss the programmes and arrangements
            currently available.
          </p>

          <div className="process-list">
            {steps.map((step, index) => (
              <article
                className="process-item"
                key={step.title}
              >
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/contact"
            className="button button-primary"
          >
            Make an Enquiry
          </Link>
        </div>
      </section>
    </main>
  );
}