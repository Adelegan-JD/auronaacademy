import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Microscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Explore Aurona Academy's STEM, language, academic support, and professional learning programmes.",
};

const programmeGroups = [
  {
    title: "STEM and Digital Learning",
    icon: Microscope,
    description:
      "Explore science, mathematics, and digital learning opportunities.",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Digital Technology",
      "Data Analysis",
    ],
  },
  {
    title: "English and Language Arts",
    icon: BookOpen,
    description:
      "Develop language, literacy, reading, and writing skills.",
    subjects: [
      "English Language",
      "Literature-in-English",
      "Creative Writing",
      "Adult Literacy",
      "English for Professional Purposes",
    ],
  },
  {
    title: "Academic Support",
    icon: GraduationCap,
    description:
      "Explore support for academic development and study skills.",
    subjects: [
      "Exam Preparation",
      "Revision Support",
      "Study Skills",
      "Academic Coaching",
      "University Guidance",
    ],
  },
  {
    title: "Professional Learning",
    icon: BriefcaseBusiness,
    description:
      "Explore relevant learning opportunities for adults and professionals.",
    subjects: [
      "Professional English",
      "Communication Skills",
      "Career Guidance",
    ],
  },
];

export default function ProgrammesPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Programmes</span>

            <h1>Find the right learning path.</h1>

            <p>
              Explore our educational focus areas and contact us
              to confirm current availability, learning levels,
              schedules, and pricing.
            </p>
          </div>

          <div className="programme-grid">
            {programmeGroups.map((programme) => {
              const Icon = programme.icon;

              return (
                <article
                  className="card"
                  key={programme.title}
                >
                  <div className="icon-box">
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <h2 className="programme-heading">
                    {programme.title}
                  </h2>

                  <p>{programme.description}</p>

                  <ul className="subject-list">
                    {programme.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="text-link"
                  >
                    Enquire about this programme
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}