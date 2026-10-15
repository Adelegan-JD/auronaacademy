import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Aurona Academy's programmes and enrolment process.",
};

const questions = [
  {
    question: "Which subjects does Aurona Academy cover?",
    answer:
      "Our advertised subject areas include STEM, English Language, Literature-in-English, Creative Writing, Adult Literacy, and selected academic and professional learning services. Contact us to confirm current availability.",
  },
  {
    question: "Are lessons delivered online?",
    answer:
      "Aurona Academy's stated delivery model includes online classes and one-on-one tutoring. Contact us to discuss the available arrangement for your programme.",
  },
  {
    question: "Can students in Canada and Nigeria enquire?",
    answer:
      "Aurona Academy intends to serve customers in Canada and Nigeria. Contact us to confirm programme availability, scheduling, and payment arrangements for your location.",
  },
  {
    question: "How much do lessons cost?",
    answer:
      "Pricing varies by subject, educational level, and country. Contact the academy for the current price of your preferred programme.",
  },
  {
    question: "How do I get started?",
    answer:
      "Visit the Contact page to submit an enquiry or use the WhatsApp contact option to discuss your learning needs.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FAQs</span>
            <h1>Questions? Start here.</h1>
          </div>

          <div className="faq-list">
            {questions.map((item) => (
              <details
                className="faq-item"
                key={item.question}
              >
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="center-action">
            <Link
              href="/contact"
              className="button button-primary"
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}