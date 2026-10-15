import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  business,
  categories,
  consultationLink,
  designs,
} from "@/lib/catalogue";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Custom Furniture & Interior Services in Delhi NCR",
  description:
    "Explore custom furniture, modular kitchens, home and office interiors, exterior finishes and wall panels from Elite Craft Interior. Own factory. Free initial consultation across Delhi NCR.",
};

export default function HomePage() {
  const referenceCount =
    designs.filter((design) => design.image).length +
    services.reduce((total, service) => total + service.references.length, 0);

  const heroImage = services.find(
    (service) => service.slug === "interior-design",
  )!.references[0];

  return (
    <main id="main-content" className="ec-home">
      <section className="ec-home-hero container">
        <div className="ec-home-hero-copy">
          <p className="ec-home-eyebrow">
            DELHI NCR · OWN FACTORY · MADE FOR YOU
          </p>

          <h1>Spaces with character. Furniture made for you.</h1>

          <p className="ec-home-lead">
            From one custom sofa to a complete interior, Elite Craft Interior
            helps bring your ideas to life. Explore furniture, modular kitchens,
            wall panels and finishes for your home or business.
          </p>

          <div className="ec-home-actions">
            <a
              className="ec-home-button"
              href={consultationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free consultation ↗
            </a>

            <Link className="ec-home-outline" href="/design-gallery">
              Explore designs ↗
            </Link>
          </div>

          <p className="ec-home-small">
            Purchase individual furniture pieces or discuss a complete project.
            Serving customers throughout Delhi NCR.
          </p>
        </div>

        <div className="ec-home-hero-photo">
          <Image
            src={heroImage.image}
            alt={heroImage.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <span className="ec-home-photo-label">Interior reference design</span>
        </div>
      </section>

      <div className="container ec-home-facts">
        <div>
          <strong>Own factory</strong>
          <span>Custom furniture manufacturing</span>
        </div>
        <div>
          <strong>{referenceCount}+ references</strong>
          <span>Explore ideas for your space</span>
        </div>
        <div>
          <strong>Delhi NCR</strong>
          <span>Homes, offices and commercial spaces</span>
        </div>
      </div>

      <section id="services" className="container ec-home-section">
        <div className="ec-home-section-heading">
          <div>
            <p className="ec-home-eyebrow">OUR SERVICES</p>
            <h2>A considered approach to every space.</h2>
          </div>

          <p>
            Choose the work you need, share your requirements and discuss the
            materials, measurements and scope with our team.
          </p>
        </div>

        <div className="ec-home-service-grid">
          {services.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              className="ec-home-card"
            >
              <div className="ec-home-card-photo">
                <Image
                  src={service.references[0].image}
                  alt={service.references[0].imageAlt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="ec-home-photo-label">Reference design</span>
              </div>

              <div className="ec-home-card-copy">
                <p className="ec-home-eyebrow">
                  {service.references.length} DESIGN REFERENCES
                </p>
                <h3>{service.name}</h3>
                <p>{service.introduction}</p>
                <span className="ec-home-text-link">Explore service ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container ec-home-section">
        <div className="ec-home-section-heading">
          <div>
            <p className="ec-home-eyebrow">BUY CUSTOM FURNITURE</p>
            <h2>One piece. One room. Your choice.</h2>
          </div>

          <p>
            You can order furniture directly from us. Explore sofas, beds,
            dining tables, wardrobes, office furniture and more, then discuss
            the size, finish and details you want.
          </p>
        </div>

        <div className="ec-home-furniture-grid">
          {categories.map((category) => {
            const count = designs.filter(
              (design) => design.category === category.slug,
            ).length;

            return (
              <Link
                key={category.slug}
                href={`/furniture/${category.slug}`}
                className="ec-home-card"
              >
                <div className="ec-home-card-photo">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="ec-home-photo-label">Reference design</span>
                </div>

                <div className="ec-home-card-copy">
                  <p className="ec-home-eyebrow">{count} DESIGN IDEAS</p>
                  <h3>{category.shortName}</h3>
                  <span className="ec-home-text-link">View collection ↗</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container ec-home-section">
        <div className="ec-home-feature">
          <div>
            <p className="ec-home-eyebrow">YOUR IDEA. OUR FACTORY.</p>
            <h2>Furniture that fits your requirements.</h2>
            <p>
              Found a design you like? Share its reference code or send your own
              inspiration. We will discuss what can be made, suitable materials,
              dimensions, finishes and a quote for the agreed work.
            </p>

            <div className="ec-home-actions">
              <Link className="ec-home-button" href="/our-factory">
                Discover our factory ↗
              </Link>
              <Link className="ec-home-outline" href="/furniture">
                Browse furniture ↗
              </Link>
            </div>
          </div>

          <ol className="ec-home-process">
            <li>
              <span>01</span>
              <div>
                <h3>Choose your direction</h3>
                <p>Browse our references or share your own idea.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Discuss the details</h3>
                <p>Confirm measurements, materials, scope and budget.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Approve your quote</h3>
                <p>Review the agreed specifications and proposed schedule.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="container ec-home-section">
        <p className="ec-home-eyebrow">HELPFUL ANSWERS</p>
        <h2>Before we begin.</h2>

        <div className="ec-home-faqs">
          <details>
            <summary>Can I buy just one furniture item?</summary>
            <p>
              Yes. You can enquire about a single sofa, bed, dining table,
              wardrobe or other custom furniture item without booking a full
              interior project.
            </p>
          </details>

          <details>
            <summary>Can you customise a design?</summary>
            <p>
              We can discuss changes to dimensions, finishes, storage and other
              details. Final options depend on the design, available materials
              and the agreed specifications.
            </p>
          </details>

          <details>
            <summary>Do you serve my location?</summary>
            <p>
              We provide services throughout Delhi NCR. Share your location and
              requirements so we can confirm arrangements for your project.
            </p>
          </details>

          <details>
            <summary>Are these photographs your completed projects?</summary>
            <p>
              Images marked as reference designs are inspiration photographs.
              They show design directions and are not presented as our completed
              projects. Materials and final specifications are confirmed in
              your quote.
            </p>
          </details>
        </div>
      </section>

      <section id="contact" className="container ec-home-section">
        <div className="ec-home-contact">
          <p className="ec-home-eyebrow">LET’S DISCUSS YOUR SPACE</p>
          <h2>A new piece or a new beginning.</h2>
          <p>
            Share your location, requirements and favourite references. Your
            initial consultation is free.
          </p>

          <div className="ec-home-actions">
            <a
              className="ec-home-button"
              href={consultationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss on WhatsApp ↗
            </a>
            <a className="ec-home-outline" href={`tel:+91${business.phone}`}>
              Call {business.phone}
            </a>
          </div>

          <div className="ec-home-contact-links">
            <a href={`tel:+91${business.secondPhone}`}>
              {business.secondPhone}
            </a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <span>Delhi · Serving Delhi NCR</span>
          </div>
        </div>
      </section>

      <style>{`
        .ec-home {
          background: #202622;
          color: #f8f6f1;
          padding-bottom: 48px;
        }
        .ec-home a { color: inherit; }
        .ec-home h1, .ec-home h2, .ec-home h3 {
          font-family: Georgia, serif;
          font-weight: 400;
        }
        .ec-home h1 {
          font-size: clamp(42px, 5.4vw, 76px);
          line-height: 1.06;
          margin: 18px 0 24px;
          letter-spacing: -2px;
        }
        .ec-home h2 {
          font-size: clamp(32px, 3.4vw, 48px);
          line-height: 1.15;
          margin: 12px 0 20px;
        }
        .ec-home h3 {
          font-size: 25px;
          line-height: 1.25;
          margin: 12px 0;
        }
        .ec-home p {
          color: #cecfc5;
          line-height: 1.8;
        }
        .ec-home .ec-home-eyebrow {
          color: #c6a66d;
          font-size: 11px;
          letter-spacing: 2px;
          line-height: 1.6;
        }
        .ec-home-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
          padding-top: 64px;
          padding-bottom: 64px;
        }
        .ec-home-lead { font-size: 17px; }
        .ec-home-small { font-size: 13px; margin-top: 22px; }
        .ec-home-hero-photo {
          position: relative;
          min-height: 580px;
          overflow: hidden;
          background: #30392f;
        }
        .ec-home-photo-label {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: #202622e6;
          color: #fff;
          padding: 8px 11px;
          font-size: 11px;
        }
        .ec-home-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }
        .ec-home-button, .ec-home-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 20px;
          text-decoration: none;
          font-size: 14px;
          border: 1px solid #c6a66d;
        }
        .ec-home .ec-home-button {
          background: #c6a66d;
          color: #202622;
        }
        .ec-home-outline { background: transparent; }
        .ec-home-facts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #ffffff20;
          border-bottom: 1px solid #ffffff20;
        }
        .ec-home-facts > div { padding: 26px 18px; }
        .ec-home-facts strong {
          display: block;
          font-size: 20px;
          font-weight: 500;
        }
        .ec-home-facts span {
          display: block;
          color: #cecfc5;
          font-size: 13px;
          margin-top: 8px;
        }
        .ec-home-section {
          padding-top: 76px;
          scroll-margin-top: 120px;
        }
        .ec-home-section-heading {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: end;
          gap: 44px;
          margin-bottom: 28px;
        }
        .ec-home-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ec-home-furniture-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .ec-home-card {
          display: block;
          background: #29312a;
          text-decoration: none;
          overflow: hidden;
        }
        .ec-home-card-photo {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #30392f;
        }
        .ec-home-card-photo img {
          transition: transform .35s ease;
        }
        .ec-home-card:hover .ec-home-card-photo img {
          transform: scale(1.035);
        }
        .ec-home-card-copy { padding: 22px; }
        .ec-home-card-copy > p { font-size: 14px; }
        .ec-home .ec-home-text-link { color: #c6a66d; font-size: 14px; }
        .ec-home-feature {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          padding: 40px;
          border: 1px solid #c6a66d55;
        }
        .ec-home-process {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .ec-home-process li {
          display: flex;
          gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid #ffffff20;
        }
        .ec-home-process li > span {
          color: #c6a66d;
          padding-top: 14px;
          font-size: 13px;
        }
        .ec-home-process h3 { font-size: 23px; }
        .ec-home-process p { font-size: 14px; }
        .ec-home-faqs details {
          padding: 22px 0;
          border-bottom: 1px solid #ffffff20;
        }
        .ec-home-faqs summary {
          cursor: pointer;
          font-size: 17px;
        }
        .ec-home-faqs p { max-width: 850px; }
        .ec-home-contact {
          padding: 44px;
          background: #29312a;
          border: 1px solid #ffffff15;
        }
        .ec-home-contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px 26px;
          margin-top: 26px;
          font-size: 14px;
          overflow-wrap: anywhere;
        }
        .ec-home a:focus-visible, .ec-home summary:focus-visible {
          outline: 2px solid #c6a66d;
          outline-offset: 5px;
        }
        @media (max-width: 1100px) {
          .ec-home-furniture-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .ec-home-hero, .ec-home-section-heading, .ec-home-feature {
            grid-template-columns: 1fr;
          }
          .ec-home-hero { gap: 28px; padding-top: 38px; }
          .ec-home-hero-photo { min-height: 420px; }
          .ec-home-section-heading { gap: 0; }
          .ec-home-service-grid, .ec-home-furniture-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .ec-home-service-grid, .ec-home-furniture-grid, .ec-home-facts {
            grid-template-columns: 1fr;
          }
          .ec-home-facts > div { padding: 18px 0; }
          .ec-home-hero-photo { min-height: 340px; }
          .ec-home-feature, .ec-home-contact { padding: 24px; }
          .ec-home-section { padding-top: 50px; }
          .ec-home h1 { letter-spacing: -1px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ec-home-card-photo img { transition: none; }
          .ec-home-card:hover .ec-home-card-photo img { transform: none; }
        }
      `}</style>
    </main>
  );
}