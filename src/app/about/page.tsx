import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aurona Academy's educational focus and approach to personalised online learning.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">About Aurona Academy</span>

          <h1>Better Guidance. Brighter Futures.</h1>

          <p className="page-intro">
            Aurona Academy focuses on education, research, and
            consultancy, with learning support designed around
            students' and professionals' educational goals.
          </p>

          <div className="content-panel">
            <h2>Our Educational Focus</h2>

            <p>
              Our programme areas include STEM subjects, English
              Language, Literature-in-English, creative writing,
              adult literacy, academic coaching, and professional
              learning.
            </p>

            <p>
              We aim to make it easier for learners to identify
              relevant support and understand their next steps.
            </p>
          </div>

          <div className="content-panel">
            <h2>Our Approach</h2>

            <p>
              We believe that effective learning begins with
              understanding the learner's needs, current level,
              and goals.
            </p>

            <p>
              Contact us to discuss available subjects, teaching
              arrangements, and the support appropriate to your
              learning needs.
            </p>
          </div>

          <Link
            href="/contact"
            className="button button-primary"
          >
            Contact Aurona Academy
          </Link>
        </div>
      </section>
    </main>
  );
}