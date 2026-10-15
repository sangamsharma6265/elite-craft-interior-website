import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DesignCard } from "@/components/SiteUI";
import {
  designs,
  getCategory,
  getDesign,
  whatsapp,
} from "@/lib/catalogue";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return designs.map((design) => ({ slug: design.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const design = getDesign(slug);

  if (!design) return {};

  const category = getCategory(design.category)!;

  return {
    title: `${design.name} | Custom Furniture in Delhi NCR`,
    description: `${design.summary} Request a custom quotation from Elite Craft Interior. Reference ${design.code}.`,
    openGraph: {
      title: `${design.name} | Elite Craft Interior`,
      description: design.summary,
      images: [
        {
          url: design.image ?? category.image,
          alt: design.imageAlt ?? category.imageAlt,
        },
      ],
    },
  };
}

export default async function DesignPage({ params }: Props) {
  const { slug } = await params;
  const design = getDesign(slug);

  if (!design) notFound();

  const category = getCategory(design.category)!;
  const image = design.image ?? category.image;
  const imageAlt = design.imageAlt ?? category.imageAlt;

  const related = designs
    .filter(
      (item) =>
        item.category === design.category &&
        item.slug !== design.slug,
    )
    .slice(0, 3);

  const quoteLink = whatsapp(
    `Hello Elite Craft Interior, I liked ${design.name} (${design.code}) on your website. Please help me with a quotation for a similar custom design. My location and dimensions are:`,
  );

  const customiseLink = whatsapp(
    `Hello Elite Craft Interior, I would like to customise the ${design.name} reference (${design.code}). I can share my dimensions, preferred materials and budget.`,
  );

  return (
    <main id="main-content">
      <section className="ec-page-intro">
        <div className="container">
          <nav className="ec-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/furniture">Furniture</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/furniture/${category.slug}`}>
              {category.shortName}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{design.name}</span>
          </nav>

          <div className="ec-product-grid">
            <figure className="ec-product-photo">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                priority
                className="cover-image"
              />
              <figcaption>
                {design.image
                  ? "Reference image for discussing a similar custom design."
                  : "Category inspiration image for discussing your custom order."}
                {" "}Not a completed Elite Craft Interior project.
              </figcaption>
            </figure>

            <div className="ec-product-copy">
              <p className="eyebrow">
                {design.code} · DESIGN REFERENCE
              </p>

              <h1>{design.name}</h1>
              <p>{design.description}</p>

              <dl className="ec-facts">
                <div>
                  <dt>Order type</dt>
                  <dd>Custom manufacture</dd>
                </div>
                <div>
                  <dt>Manufacturing</dt>
                  <dd>Our own factory</dd>
                </div>
                <div>
                  <dt>Sizes & finishes</dt>
                  <dd>Discuss your preferences</dd>
                </div>
                <div>
                  <dt>Price</dt>
                  <dd>Quotation after specifications</dd>
                </div>
                <div>
                  <dt>Service area</dt>
                  <dd>Delhi NCR</dd>
                </div>
              </dl>

              <div className="button-row">
                <a
                  className="button"
                  href={quoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Price ↗
                </a>
                <a
                  className="text-link"
                  href={customiseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customise This Design ↗
                </a>
              </div>

              <p>
                Share the reference number, room measurements and your location.
                The initial consultation is free.
              </p>

              {design.sourceUrl && (
                <p>
                  <a
                    className="text-link"
                    href={design.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reference image source: Pexels ↗
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section inspiration-section"
        aria-label="Customisation information"
      >
        <div className="container">
          <div className="ec-detail-grid">
            <div>
              <p className="eyebrow">PLAN YOUR ORDER</p>
              <h2>Consider the useful details.</h2>
              <ul className="ec-feature-list">
                {design.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">MAKE IT YOUR OWN</p>
              <h2>Discuss your options.</h2>
              <ul className="ec-feature-list">
                {design.choices.map((choice) => (
                  <li key={choice}>{choice}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="ec-notice">{design.planning}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="order-title">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">BEFORE YOU ORDER</p>
            <h2 id="order-title">
              Your design.
              <br />
              <em>Clearly agreed.</em>
            </h2>
          </div>

          <div className="faq-list">
            <details>
              <summary>Will my furniture look exactly like the photograph?</summary>
              <p>
                The photograph establishes a reference direction. We discuss
                a similar design adapted to your dimensions and chosen materials.
                Confirm the final design and specifications before manufacture.
              </p>
            </details>

            <details>
              <summary>Are chairs and other pictured items included?</summary>
              <p>
                Only items listed in your confirmed quotation are included.
                Matching chairs, accessories, delivery and installation can be
                discussed separately.
              </p>
            </details>

            <details>
              <summary>How do I get the final price?</summary>
              <p>
                Send the reference number, approximate dimensions, preferred
                materials and project location. We will discuss the specifications
                needed for a quotation.
              </p>
            </details>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section
          className="ec-catalogue-section"
          aria-labelledby="related-title"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="related-title">
                More to <em>explore.</em>
              </h2>
              <Link
                className="text-link"
                href={`/furniture/${category.slug}`}
              >
                View the full collection ↗
              </Link>
            </div>

            <div className="design-grid">
              {related.map((item) => (
                <DesignCard key={item.slug} design={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}