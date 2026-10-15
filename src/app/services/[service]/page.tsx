import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { business, categories } from "@/lib/catalogue";
import {
  getService,
  serviceEnquiryLink,
  services,
} from "@/lib/services";

type PageProps = {
  params: Promise<{ service: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "website",
      images: [
        {
          url: service.references[0].image,
          alt: service.references[0].imageAlt,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main id="main-content" className="ec-service-page">
      <div className="container">
        <nav className="ec-service-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{service.shortName}</span>
        </nav>

        <nav className="ec-service-tabs" aria-label="Interior and exterior services">
          {services.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              aria-current={item.slug === service.slug ? "page" : undefined}
            >
              {item.shortName}
            </Link>
          ))}
          <Link href="/furniture">Buy furniture ↗</Link>
        </nav>

        <section className="ec-service-hero">
          <p className="ec-service-eyebrow">
            ELITE CRAFT INTERIOR · DELHI NCR
          </p>

          <h1>{service.name}</h1>
          <p className="ec-service-heading">{service.heading}</p>
          <p className="ec-service-introduction">{service.introduction}</p>

          <div className="ec-service-actions">
            <a
              className="ec-service-button"
              href={serviceEnquiryLink(service)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Free consultation ↗
            </a>

            <a className="ec-service-secondary" href="#service-designs">
              Explore {service.references.length} references ↓
            </a>
          </div>

          <div className="ec-service-highlights">
            <div>
              <strong>{service.references.length}</strong>
              <span>Design references</span>
            </div>
            <div>
              <strong>Delhi NCR</strong>
              <span>Service area</span>
            </div>
            <div>
              <strong>Own factory</strong>
              <span>Custom furniture orders</span>
            </div>
          </div>
        </section>

        <section
          className="ec-service-planning"
          aria-labelledby="service-scope-heading"
        >
          <div>
            <p className="ec-service-eyebrow">YOUR PROJECT</p>
            <h2 id="service-scope-heading">What we can discuss</h2>
            <ul>
              {service.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="ec-service-eyebrow">BEFORE WE QUOTE</p>
            <h2>Help us understand your space</h2>
            <ul>
              {service.planning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="service-designs" className="ec-service-gallery">
          <div className="ec-service-section-heading">
            <p className="ec-service-eyebrow">DESIGN DIRECTIONS</p>
            <h2>Explore the possibilities.</h2>
            <p>{service.galleryIntroduction}</p>
          </div>

          <p className="ec-service-reference-note">
            {service.referenceNote}
          </p>

          <div className="ec-service-grid">
            {service.references.map((reference) => (
              <article
                key={reference.code}
                id={reference.slug}
                className="ec-service-card"
              >
                <div className="ec-service-photo">
                  <Image
                    src={reference.image}
                    alt={reference.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="ec-service-cover"
                  />
                  <span>Reference design</span>
                </div>

                <div className="ec-service-card-content">
                  <p className="ec-service-eyebrow">{reference.code}</p>
                  <h3>{reference.name}</h3>
                  <p>{reference.description}</p>

                  <details className="ec-service-details">
                    <summary>View reference details</summary>
                    <p>
                      Share this reference code and your measurements.
                      We will discuss the suitable design, available
                      materials and quotation for your space.
                    </p>
                    <a
                      href={reference.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View original photo source ↗
                    </a>
                  </details>

                  <a
                    className="ec-service-card-enquiry"
                    href={serviceEnquiryLink(service, reference)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Discuss ${reference.name} on WhatsApp`}
                  >
                    Discuss this design ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="ec-service-furniture"
          aria-labelledby="service-furniture-heading"
        >
          <p className="ec-service-eyebrow">MADE FOR YOUR SPACE</p>
          <h2 id="service-furniture-heading">
            You can buy furniture from us too.
          </h2>
          <p>
            Order individual pieces or discuss furniture for a complete
            project. Explore our factory-made furniture references.
          </p>

          <div className="ec-service-furniture-links">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/furniture/${category.slug}`}
              >
                {category.shortName} ↗
              </Link>
            ))}
          </div>

          <Link className="ec-service-secondary" href="/our-factory">
            Learn about our factory ↗
          </Link>
        </section>

        <section
          className="ec-service-faq"
          aria-labelledby="service-faq-heading"
        >
          <p className="ec-service-eyebrow">COMMON QUESTIONS</p>
          <h2 id="service-faq-heading">Before we begin.</h2>

          {service.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        <section className="ec-service-contact">
          <p className="ec-service-eyebrow">LET’S DISCUSS YOUR SPACE</p>
          <h2>Start with a free consultation.</h2>
          <p>
            Send your location, measurements and the reference codes
            you like. We will help you discuss the next step.
          </p>

          <div className="ec-service-actions">
            <a
              className="ec-service-button"
              href={serviceEnquiryLink(service)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp your requirements ↗
            </a>
            <a
              className="ec-service-secondary"
              href={`tel:${business.phone}`}
            >
              Call {business.phone}
            </a>
          </div>

          <p className="ec-service-contact-links">
            <a href={`tel:${business.secondPhone}`}>
              {business.secondPhone}
            </a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </section>
      </div>

      <style>{`
        .ec-service-page {
          background: #202622;
          color: #f8f6f1;
          padding: 28px 0 80px;
        }

        .ec-service-page a {
          color: inherit;
        }

        .ec-service-page h1,
        .ec-service-page h2,
        .ec-service-page h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
        }

        .ec-service-page h1 {
          max-width: 980px;
          margin: 18px 0 20px;
          font-size: clamp(38px, 5.5vw, 72px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .ec-service-page h2 {
          margin: 12px 0 20px;
          font-size: clamp(28px, 3.5vw, 42px);
          line-height: 1.16;
        }

        .ec-service-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          color: #c4c9c1;
          font-size: 13px;
          margin-bottom: 26px;
        }

        .ec-service-breadcrumb a,
        .ec-service-tabs a,
        .ec-service-furniture-links a,
        .ec-service-button,
        .ec-service-secondary,
        .ec-service-card-enquiry {
          text-decoration: none;
        }

        .ec-service-tabs,
        .ec-service-furniture-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ec-service-tabs a,
        .ec-service-furniture-links a {
          padding: 11px 17px;
          border: 1px solid #4b544b;
          border-radius: 3px;
          font-size: 14px;
          transition: background 160ms ease, border-color 160ms ease;
        }

        .ec-service-tabs a:hover,
        .ec-service-furniture-links a:hover {
          background: #313a32;
          border-color: #c6a66d;
        }

        .ec-service-tabs a[aria-current="page"] {
          background: #c6a66d;
          border-color: #c6a66d;
          color: #202622;
        }

        .ec-service-hero {
          padding: 65px 0 55px;
        }

        .ec-service-eyebrow {
          color: #c6a66d;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.6;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ec-service-heading {
          color: #e8dfcd;
          font-size: clamp(20px, 2.3vw, 28px);
          margin-bottom: 16px;
        }

        .ec-service-introduction,
        .ec-service-section-heading > p:last-child,
        .ec-service-contact > p,
        .ec-service-furniture > p {
          max-width: 760px;
          color: #c4c9c1;
          line-height: 1.8;
        }

        .ec-service-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px;
          margin-top: 26px;
        }

        .ec-service-page .ec-service-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 48px;
          padding: 13px 22px;
          background: #c6a66d;
          color: #202622;
          border-radius: 3px;
          font-size: 14px;
          font-weight: 600;
        }

        .ec-service-button:hover {
          background: #d7bb8a;
        }

        .ec-service-page .ec-service-secondary {
          display: inline-block;
          color: #e8dfcd;
          font-size: 14px;
          padding: 8px 0;
          border-bottom: 1px solid #8e7952;
        }

        .ec-service-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          max-width: 850px;
          margin-top: 42px;
          border-top: 1px solid #465047;
          border-bottom: 1px solid #465047;
        }

        .ec-service-highlights > div {
          padding: 23px 15px 23px 0;
        }

        .ec-service-highlights strong,
        .ec-service-highlights span {
          display: block;
        }

        .ec-service-highlights strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(21px, 2.5vw, 30px);
          font-weight: 400;
        }

        .ec-service-highlights span {
          margin-top: 7px;
          color: #adb6ac;
          font-size: 12px;
          line-height: 1.6;
        }

        .ec-service-planning {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 38px;
          padding: 35px 0 55px;
        }

        .ec-service-planning > div {
          background: #29312a;
          border: 1px solid #414b42;
          border-radius: 4px;
          padding: 28px;
        }

        .ec-service-planning h2 {
          font-size: clamp(25px, 2.8vw, 34px);
        }

        .ec-service-planning ul {
          padding-left: 20px;
          color: #c4c9c1;
          line-height: 1.8;
        }

        .ec-service-planning li + li {
          margin-top: 7px;
        }

        .ec-service-gallery {
          scroll-margin-top: 120px;
          padding: 30px 0 65px;
        }

        .ec-service-reference-note {
          padding: 17px 20px;
          margin: 24px 0 30px;
          border-left: 3px solid #c6a66d;
          background: #29312a;
          color: #c4c9c1;
          font-size: 13px;
          line-height: 1.8;
        }

        .ec-service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .ec-service-card {
          min-width: 0;
          overflow: hidden;
          background: #29312a;
          border: 1px solid #414b42;
          border-radius: 4px;
          scroll-margin-top: 120px;
        }

        .ec-service-photo {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #364037;
        }

        .ec-service-cover {
          object-fit: cover;
          transition: transform 250ms ease;
        }

        .ec-service-card:hover .ec-service-cover {
          transform: scale(1.025);
        }

        .ec-service-photo > span {
          position: absolute;
          bottom: 13px;
          left: 13px;
          padding: 6px 9px;
          background: rgba(25, 31, 26, 0.88);
          color: #f8f6f1;
          font-size: 10px;
          letter-spacing: 0.04em;
        }

        .ec-service-card-content {
          padding: 23px;
        }

        .ec-service-card h3 {
          margin: 10px 0 14px;
          font-size: 25px;
          line-height: 1.25;
        }

        .ec-service-card-content > p:not(.ec-service-eyebrow),
        .ec-service-details p {
          color: #c4c9c1;
          font-size: 14px;
          line-height: 1.8;
        }

        .ec-service-details {
          margin: 18px 0;
          border-top: 1px solid #465047;
          padding-top: 14px;
          font-size: 13px;
          line-height: 1.7;
        }

        .ec-service-details summary {
          cursor: pointer;
          color: #e8dfcd;
        }

        .ec-service-details p {
          margin: 14px 0;
        }

        .ec-service-page .ec-service-details a {
          color: #d7bb8a;
        }

        .ec-service-page .ec-service-card-enquiry {
          display: inline-block;
          margin-top: 5px;
          color: #d7bb8a;
          font-size: 14px;
          font-weight: 600;
        }

        .ec-service-furniture {
          padding: 45px 0;
          border-top: 1px solid #465047;
          border-bottom: 1px solid #465047;
        }

        .ec-service-furniture-links {
          margin: 24px 0;
        }

        .ec-service-faq {
          max-width: 900px;
          padding: 65px 0;
        }

        .ec-service-faq details {
          border-bottom: 1px solid #465047;
          padding: 20px 0;
        }

        .ec-service-faq summary {
          cursor: pointer;
          font-size: 17px;
          line-height: 1.6;
        }

        .ec-service-faq details p {
          margin-top: 16px;
          color: #c4c9c1;
          line-height: 1.8;
        }

        .ec-service-contact {
          background: #29312a;
          border: 1px solid #465047;
          border-radius: 4px;
          padding: clamp(24px, 4vw, 48px);
        }

        .ec-service-contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 24px;
          margin-top: 24px;
          overflow-wrap: anywhere;
          font-size: 14px;
        }

        .ec-service-page a:focus-visible,
        .ec-service-page summary:focus-visible {
          outline: 2px solid #d7bb8a;
          outline-offset: 5px;
        }

        @media (max-width: 1100px) {
          .ec-service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .ec-service-hero {
            padding: 42px 0 35px;
          }

          .ec-service-planning,
          .ec-service-grid {
            grid-template-columns: 1fr;
          }

          .ec-service-planning {
            gap: 18px;
          }

          .ec-service-highlights {
            gap: 8px;
          }

          .ec-service-highlights > div {
            padding: 18px 6px 18px 0;
          }

          .ec-service-highlights strong {
            font-size: 20px;
          }

          .ec-service-tabs a {
            padding: 10px 13px;
            font-size: 13px;
          }

          .ec-service-card-content {
            padding: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ec-service-cover,
          .ec-service-tabs a,
          .ec-service-furniture-links a {
            transition: none;
          }

          .ec-service-card:hover .ec-service-cover {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}