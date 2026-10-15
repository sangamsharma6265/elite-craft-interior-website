import type { Metadata } from "next";
import Link from "next/link";
import { consultationLink, whatsapp } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Our Factory | Custom Furniture Manufacturing in Delhi NCR",
  description:
    "Elite Craft Interior has its own factory for custom home and office furniture. Discuss dimensions, materials and finishes with a free consultation.",
};

const steps = [
  {
    title: "Your requirements",
    text: "Share the furniture type, reference ideas, dimensions and intended use.",
  },
  {
    title: "Design & specification",
    text: "Discuss the layout, material specification, hardware and finish.",
  },
  {
    title: "Order confirmation",
    text: "Confirm the quotation, agreed scope and expected manufacturing schedule.",
  },
  {
    title: "Manufacturing & handover",
    text: "We manufacture the agreed design and arrange the confirmed delivery or installation scope.",
  },
];

export default function FactoryPage() {
  return (
    <main id="main-content">
      <section className="ec-page-intro">
        <div className="container">
          <nav className="ec-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Our Factory</span>
          </nav>

          <div className="ec-factory-intro">
            <div>
              <p className="eyebrow">ELITE CRAFT INTERIOR MANUFACTURING</p>
              <h1>
                Your vision.
                <br />
                <em>Our own factory.</em>
              </h1>
              <p className="ec-lead">
                We manufacture custom furniture for homes and offices.
                Order a single piece, coordinated room furniture or a complete
                project across Delhi NCR.
              </p>
              <div className="button-row">
                <Link className="button" href="/furniture">
                  Explore Furniture ↗
                </Link>
                <a
                  className="text-link"
                  href={consultationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss your requirements ↗
                </a>
              </div>
            </div>

            <div className="ec-factory-block">
              <span className="ec-small-label">CRAFTED AROUND YOUR REQUIREMENTS</span>
              <h2>
                Dimensions.
                <br />
                Materials.
                <br />
                Finishes.
                <br />
                <em>Your choice.</em>
              </h2>
              <p>
                Custom options are reviewed for feasibility and agreed before
                manufacture. Share what you have in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section inspiration-section" aria-labelledby="capabilities-title">
        <div className="container">
          <p className="eyebrow">WHAT YOU CAN ORDER</p>
          <h2 id="capabilities-title" className="ec-heading-space">
            Furniture for <em>homes and businesses.</em>
          </h2>
          <div className="ec-detail-grid">
            <div>
              <h3>For your home</h3>
              <ul className="ec-feature-list">
                <li>Sofas, beds and coordinated room furniture</li>
                <li>Dining tables, coffee tables and consoles</li>
                <li>Wardrobes, bookshelves and storage cabinets</li>
                <li>Modular kitchen cabinets and furniture</li>
              </ul>
            </div>
            <div>
              <h3>For your business</h3>
              <ul className="ec-feature-list">
                <li>Office desks and workstations</li>
                <li>Reception desks and meeting tables</li>
                <li>Office cabinets and storage furniture</li>
                <li>Custom furniture for commercial spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="factory-process-title">
        <div className="container">
          <p className="eyebrow">HOW A CUSTOM ORDER WORKS</p>
          <h2 id="factory-process-title">
            From reference to <em>your finished furniture.</em>
          </h2>
          <div className="process-grid">
            {steps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="factory-contact-title">
        <div className="container">
          <p className="eyebrow">HAVE YOUR OWN REFERENCE?</p>
          <h2 id="factory-contact-title">
            Let&apos;s discuss <em>what we can create.</em>
          </h2>
          <p className="ec-lead">
            Send a reference photo, approximate dimensions and your project
            location. We will help you explore the next steps.
          </p>
          <div className="ec-contact-actions">
            <a
              className="button"
              href={whatsapp(
                "Hello Elite Craft Interior, I have a furniture reference and would like to discuss a custom factory order.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Your Reference on WhatsApp ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}