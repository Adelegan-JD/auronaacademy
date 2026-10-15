import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Laptop,
  MessageCircle,
  Microscope,
  PenTool,
  Target,
} from "lucide-react";

const programmes = [
  {
    title: "STEM & Digital Learning",
    description:
      "Explore science, mathematics, and digital learning opportunities tailored to the learner's level.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Data Analysis"],
    icon: Microscope,
  },
  {
    title: "English & Language Arts",
    description:
      "Develop language, reading, writing, and communication skills through guided learning.",
    subjects: [
      "English Language",
      "Literature-in-English",
      "Creative Writing",
      "Adult Literacy",
    ],
    icon: PenTool,
  },
  {
    title: "Academic Support",
    description:
      "Build stronger study habits with personalised academic guidance and revision support.",
    subjects: [
      "Exam Preparation",
      "Study Skills",
      "Academic Coaching",
      "University Guidance",
    ],
    icon: GraduationCap,
  },
  {
    title: "Professional Development",
    description:
      "Explore learning opportunities designed around professional communication and personal development.",
    subjects: [
      "Professional English",
      "Communication Skills",
      "Career Guidance",
    ],
    icon: BriefcaseBusiness,
  },
];

const audiences = [
  {
    title: "School Students",
    description:
      "Subject tutoring, guided practice, and academic support.",
    icon: BookOpen,
  },
  {
    title: "University Students",
    description:
      "Academic coaching, study skills, and subject support.",
    icon: GraduationCap,
  },
  {
    title: "Adults & Professionals",
    description:
      "Language development, literacy, and professional learning.",
    icon: BriefcaseBusiness,
  },
];

const learningBenefits = [
  {
    title: "Personalised Learning",
    description:
      "Learning support shaped around the student's needs, goals, and current level.",
    icon: Target,
  },
  {
    title: "Online Convenience",
    description:
      "Access tutoring remotely, subject to agreed schedules and programme availability.",
    icon: Laptop,
  },
  {
    title: "Guided Academic Support",
    description:
      "Explore subjects, develop study habits, and identify appropriate learning goals.",
    icon: Brain,
  },
];

const steps = [
  {
    number: "01",
    title: "Explore",
    description: "Choose a subject or programme that interests you.",
  },
  {
    number: "02",
    title: "Enquire",
    description: "Tell us about your learning needs and goals.",
  },
  {
    number: "03",
    title: "Plan",
    description: "Discuss suitable lessons, scheduling, and fees.",
  },
  {
    number: "04",
    title: "Get Started",
    description: "Complete the agreed registration process and begin learning.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Aurona Academy homepage"
          >
            <Image
              src="/images/aurona-logo.png"
              alt="Aurona Academy"
              width={180}
              height={110}
              className="brand-logo"
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link className="button button-primary nav-cta" href="/contact">
            Enquire Now
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                Personalised Online Learning
              </span>

              <h1>
                Learn with Confidence.
                <span className="hero-highlight">
                  {" "}
                  Grow with Purpose.
                </span>
              </h1>

              <p className="hero-description">
                Personalised online tutoring and academic support for
                students and professionals at different stages of their
                learning journey.
              </p>

              <div className="hero-actions">
                <Link
                  href="/programmes"
                  className="button button-primary"
                >
                  Explore Programmes
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  href="/contact"
                  className="button button-secondary"
                >
                  Enquire About Classes
                </Link>
              </div>

              <div className="hero-note">
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                />
                <span>
                  Learning support for school, university, and beyond.
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/images/learning-hero.jpg"
                  alt="Students studying together in an educational setting"
                  width={900}
                  height={1050}
                  className="hero-image"
                  priority
                />

                <div className="hero-image-caption">
                  <span className="caption-icon">
                    <GraduationCap
                      size={24}
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <strong>Every learner matters.</strong>
                    <p>Find a learning path that fits your goals.</p>
                  </div>
                </div>
              </div>

              <div className="hero-accent hero-accent-one" />
              <div className="hero-accent hero-accent-two" />
            </div>
          </div>
        </section>

        <section className="section audience-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Learning for Every Stage</span>
              <h2>A learning path for your next step.</h2>
              <p>
                Whether you are building academic foundations or
                developing professional skills, start with the learning
                support that fits your goals.
              </p>
            </div>

            <div className="audience-grid">
              {audiences.map((audience) => {
                const Icon = audience.icon;

                return (
                  <article
                    className="audience-card"
                    key={audience.title}
                  >
                    <div className="icon-box">
                      <Icon size={25} aria-hidden="true" />
                    </div>

                    <h3>{audience.title}</h3>

                    <p>{audience.description}</p>

                    <Link
                      href="/programmes"
                      className="text-link"
                    >
                      Explore programmes
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Explore Our Programmes</span>
              <h2>Learning designed around your goals.</h2>
              <p>
                Explore our educational support areas and find the
                programme most relevant to your learning needs.
              </p>
            </div>

            <div className="programme-grid">
              {programmes.map((programme) => {
                const Icon = programme.icon;

                return (
                  <article
                    className="programme-card card"
                    key={programme.title}
                  >
                    <div className="icon-box icon-box-gold">
                      <Icon size={25} aria-hidden="true" />
                    </div>

                    <h3>{programme.title}</h3>

                    <p>{programme.description}</p>

                    <ul className="subject-list">
                      {programme.subjects.map((subject) => (
                        <li key={subject}>{subject}</li>
                      ))}
                    </ul>

                    <Link
                      href="/programmes"
                      className="text-link"
                    >
                      View programme details
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="center-action">
              <Link
                href="/programmes"
                className="button button-secondary"
              >
                View All Programmes
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container benefits-layout">
            <div className="benefits-intro">
              <span className="eyebrow">The Aurona Approach</span>

              <h2>More than lessons. A guided learning experience.</h2>

              <p>
                Learning is personal. Our approach centres on
                understanding the learner's needs and helping them
                identify practical next steps.
              </p>

              <Link
                href="/how-it-works"
                className="button button-primary"
              >
                Discover How It Works
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="benefits-list">
              {learningBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    className="benefit-item"
                    key={benefit.title}
                  >
                    <div className="icon-box">
                      <Icon size={24} aria-hidden="true" />
                    </div>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section journey-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Simple Steps</span>
              <h2>Your learning journey starts here.</h2>
              <p>
                Begin with a conversation about your goals, then
                explore the learning options available to you.
              </p>
            </div>

            <div className="journey-grid">
              {steps.map((step) => (
                <article className="journey-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="center-action">
              <Link
                href="/contact"
                className="button button-primary"
              >
                Start an Enquiry
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section tutor-section">
          <div className="container tutor-panel">
            <div className="tutor-icon">
              <GraduationCap size={42} aria-hidden="true" />
            </div>

            <div>
              <span className="eyebrow">Personalised Support</span>
              <h2>Learning guided by people who care about teaching.</h2>
              <p>
                Discover our tutoring approach and ask us about the
                subjects and learning support currently available.
              </p>
            </div>

            <Link
              href="/about"
              className="button button-secondary"
            >
              About Aurona
            </Link>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-panel">
            <div>
              <span className="eyebrow">Take the Next Step</span>
              <h2>Let's find the right learning path for you.</h2>
              <p>
                Tell us what you want to learn, and we will help you
                explore the available options.
              </p>
            </div>

            <div className="cta-actions">
              <Link
                href="/contact"
                className="button button-primary"
              >
                Enquire About Classes
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <a
                href="https://wa.me/14313238372"
                className="button button-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Aurona Academy homepage">
              <Image
                src="/images/aurona-logo.png"
                alt="Aurona Academy"
                width={160}
                height={98}
              />
            </Link>

            <p>
              Better Guidance. Brighter Futures.
            </p>

            <p>
              Education, Research and Consultancy.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link href="/about">About Us</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/how-it-works">How It Works</Link>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>
            <a href="tel:+14313238372">
              +1 (431) 323-8372
            </a>
            <a href="mailto:auronaacademy@gmail.com">
              auronaacademy@gmail.com
            </a>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Aurona Academy.
            All rights reserved.
          </p>

          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
}