import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DesignCard } from "@/components/SiteUI";
import {
  categories,
  consultationLink,
  designs,
  getCategory,
} from "@/lib/catalogue";
import { absoluteUrl, site } from "@/lib/site";

type SearchValues = Record<
  string,
  string | string[] | undefined
>;

type PageProps = {
  searchParams: Promise<SearchValues>;
};

const PAGE_SIZE = 24;

function first(
  value: string | string[] | undefined,
): string {
  return Array.isArray(value)
    ? value[0] ?? ""
    : value ?? "";
}

function resolveFurniture(params: SearchValues) {
  const query = first(params.q).trim().slice(0, 120);
  const requestedCategory = first(params.category);
  const selectedCategory =
    getCategory(requestedCategory)?.slug ?? "";
  const searchTerm = query.toLowerCase();

  const filteredDesigns = designs.filter((design) => {
    if (
      selectedCategory &&
      design.category !== selectedCategory
    ) {
      return false;
    }

    if (!searchTerm) return true;

    const category = getCategory(design.category);

    const searchableText = [
      design.name,
      design.code,
      design.summary,
      category?.name ?? "",
      ...design.choices,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchTerm);
  });

  const pageCount = Math.max(
    1,
    Math.ceil(filteredDesigns.length / PAGE_SIZE),
  );

  const requestedPage = Number(first(params.page) || "1");

  const page = Math.min(
    pageCount,
    Math.max(
      1,
      Number.isSafeInteger(requestedPage)
        ? requestedPage
        : 1,
    ),
  );

  const startIndex = (page - 1) * PAGE_SIZE;

  const visibleDesigns = filteredDesigns.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  return {
    query,
    selectedCategory,
    filteredDesigns,
    pageCount,
    page,
    startIndex,
    visibleDesigns,
  };
}

function canonicalFurnitureUrl(
  query: string,
  category: string,
  page: number,
): string {
  const values = new URLSearchParams();

  if (query) values.set("q", query);
  if (category) values.set("category", category);
  if (page > 1) values.set("page", String(page));

  const search = values.toString();

  return absoluteUrl(
    `/furniture${search ? `?${search}` : ""}`,
  );
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const { query, selectedCategory, page } =
    resolveFurniture(params);

  const filtered = Boolean(query || selectedCategory);

  const url = canonicalFurnitureUrl(
    query,
    selectedCategory,
    page,
  );

  const title =
    "Custom Furniture & Design Catalogue in Delhi NCR" +
    (page > 1 ? ` | Page ${page}` : "");

  const description =
    "Browse sofas, beds, wardrobes, dining tables, TV units, office furniture and modular kitchens from Elite Craft Interior. Own factory and free initial consultation across Delhi NCR.";

  const category =
    getCategory(selectedCategory) ?? categories[0];

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !filtered,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url,
      title: `${title} | ${site.name}`,
      description,
      images: [
        {
          url: category.image,
          alt: category.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [category.image],
    },
  };
}

export default async function FurniturePage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  const {
    query,
    selectedCategory,
    filteredDesigns,
    pageCount,
    page,
    startIndex,
    visibleDesigns,
  } = resolveFurniture(params);

  function pageHref(nextPage: number): string {
    const values = new URLSearchParams();

    if (query) values.set("q", query);

    if (selectedCategory) {
      values.set("category", selectedCategory);
    }

    if (nextPage > 1) {
      values.set("page", String(nextPage));
    }

    const search = values.toString();

    return `/furniture${search ? `?${search}` : ""}#designs`;
  }

  return (
    <main id="main-content">
      <style>{`
        .ec-browse-form {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr) minmax(180px, 260px) auto;
          gap: 16px;
          align-items: end;
          margin: 28px 0;
        }
        .ec-browse-field {
          display: grid;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
        }
        .ec-browse-field input,
        .ec-browse-field select {
          width: 100%;
          min-height: 50px;
          border: 1px solid #d7d0c4;
          border-radius: 0;
          padding: 12px 14px;
          background: #fffdf8;
          color: #202622;
          font: inherit;
          font-weight: 400;
        }
        .ec-browse-field input:focus-visible,
        .ec-browse-field select:focus-visible {
          outline: 2px solid #927340;
          outline-offset: 3px;
        }
        .ec-collection-photo {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #e8e2d8;
        }
        .ec-collection-photo img {
          object-fit: cover;
          transition: transform 250ms ease;
        }
        .ec-collection-card:hover .ec-collection-photo img {
          transform: scale(1.025);
        }
        .ec-collection-copy { padding: 22px; }
        .ec-collection-copy h3 { margin: 8px 0 12px; }
        .ec-collection-copy p { line-height: 1.7; }
        .ec-results-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin: 24px 0;
        }
        .ec-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 40px;
        }
        .ec-page-link {
          min-width: 42px;
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border: 1px solid #d7d0c4;
          text-decoration: none;
        }
        .ec-page-link[aria-current="page"] {
          background: #202622;
          color: #fffdf8;
          border-color: #202622;
        }
        .ec-empty-results {
          padding: 40px;
          border: 1px solid #d7d0c4;
          background: #fffdf8;
        }
        @media (max-width: 800px) {
          .ec-browse-form {
            grid-template-columns: 1fr 1fr;
          }
          .ec-browse-form button {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 560px) {
          .ec-browse-form {
            grid-template-columns: 1fr;
          }
          .ec-empty-results { padding: 24px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ec-collection-photo img { transition: none; }
        }
      `}</style>

      <section className="section ec-page-intro">
        <div className="container">
          <nav
            className="ec-breadcrumbs"
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Furniture</span>
          </nav>

          <p className="eyebrow">
            OUR OWN FACTORY · CUSTOM ORDERS · DELHI NCR
          </p>

          <h1>Furniture made for your space.</h1>

          <p className="ec-lead">
            Choose a design direction, then make it your own. Order
            individual furniture pieces or plan a coordinated room
            with Elite Craft Interior.
          </p>

          <div className="button-row">
            <a
              className="button button-primary"
              href="#collections"
            >
              Explore collections
            </a>

            <a
              className="button button-secondary"
              href={consultationLink}
            >
              Free consultation
            </a>
          </div>

          <p className="ec-notice">
            Catalogue images are design references. Final materials,
            dimensions, construction and price are confirmed in your
            quotation. They are not photographs of our completed
            work.
          </p>
        </div>
      </section>

      <section
        className="section inspiration-section"
        id="collections"
        aria-labelledby="collections-heading"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BROWSE BY PRODUCT</p>
              <h2 id="collections-heading">
                Find your starting point.
              </h2>
            </div>

            <p className="section-intro">
              Explore a collection, compare the references and send
              us the design code you like.
            </p>
          </div>

          <div className="ec-category-grid">
            {categories.map((category) => {
              const count = designs.filter(
                (design) => design.category === category.slug,
              ).length;

              return (
                <Link
                  key={category.slug}
                  href={`/furniture/${category.slug}`}
                  className="ec-category-card ec-collection-card"
                  style={{
                    padding: 0,
                    overflow: "hidden",
                  }}
                >
                  <div className="ec-collection-photo">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </div>

                  <div className="ec-collection-copy">
                    <p className="eyebrow">
                      {count}{" "}
                      {count === 1
                        ? "REFERENCE"
                        : "REFERENCES"}
                    </p>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <span className="text-link">
                      Explore collection ↗
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section ec-catalogue-section"
        id="designs"
        aria-labelledby="designs-heading"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                YOUR DESIGN SHORTLIST STARTS HERE
              </p>
              <h2 id="designs-heading">
                Browse the catalogue.
              </h2>
            </div>

            <p className="section-intro">
              Search by a design name, style word or enquiry code.
              Try “marble”, “glass”, “sectional” or “EC-CT-04”.
            </p>
          </div>

          <form
            action="/furniture#designs"
            method="get"
            className="ec-browse-form"
            role="search"
            aria-label="Search furniture designs"
          >
            <label
              className="ec-browse-field"
              htmlFor="furniture-search"
            >
              Search designs
              <input
                id="furniture-search"
                type="search"
                name="q"
                defaultValue={query}
                placeholder="Design name, finish or code"
                maxLength={120}
              />
            </label>

            <label
              className="ec-browse-field"
              htmlFor="furniture-category"
            >
              Product collection
              <select
                id="furniture-category"
                name="category"
                defaultValue={selectedCategory}
              >
                <option value="">All collections</option>
                {categories.map((category) => (
                  <option
                    key={category.slug}
                    value={category.slug}
                  >
                    {category.shortName}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="button button-primary"
              type="submit"
            >
              Find designs
            </button>
          </form>

          <div className="ec-results-bar">
            <p>
              {filteredDesigns.length === 0
                ? "No matching designs"
                : `Showing ${startIndex + 1}–${
                    startIndex + visibleDesigns.length
                  } of ${filteredDesigns.length} references`}
            </p>

            {(query || selectedCategory) && (
              <Link
                href="/furniture#designs"
                className="text-link"
              >
                Clear filters
              </Link>
            )}
          </div>

          {visibleDesigns.length > 0 ? (
            <div className="design-grid">
              {visibleDesigns.map((design) => (
                <DesignCard
                  key={design.slug}
                  design={design}
                />
              ))}
            </div>
          ) : (
            <div className="ec-empty-results">
              <h3>Have another design in mind?</h3>
              <p>
                Try a shorter search or send us your reference
                image. We can discuss a custom piece for your room.
              </p>
              <a
                className="button button-primary"
                href={consultationLink}
              >
                Discuss a custom design
              </a>
            </div>
          )}

          {pageCount > 1 && (
            <nav
              className="ec-pagination"
              aria-label="Catalogue pagination"
            >
              {page > 1 && (
                <Link
                  href={pageHref(page - 1)}
                  className="ec-page-link"
                  rel="prev"
                >
                  ← Previous
                </Link>
              )}

              {Array.from(
                { length: pageCount },
                (_, index) => {
                  const number = index + 1;

                  return (
                    <Link
                      key={number}
                      href={pageHref(number)}
                      className="ec-page-link"
                      aria-current={
                        number === page ? "page" : undefined
                      }
                      aria-label={`Catalogue page ${number}`}
                    >
                      {number}
                    </Link>
                  );
                },
              )}

              {page < pageCount && (
                <Link
                  href={pageHref(page + 1)}
                  className="ec-page-link"
                  rel="next"
                >
                  Next →
                </Link>
              )}
            </nav>
          )}

          <p className="ec-notice">
            Explore {designs.length} references across{" "}
            {categories.length} furniture collections. Choose a
            collection above to browse all its designs.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <p className="eyebrow">
            ORDER DIRECTLY FROM OUR OWN FACTORY
          </p>
          <h2>One piece or a complete room.</h2>

          <p className="ec-lead">
            Share a design code, your room measurements and your
            preferences. We’ll discuss a suitable custom solution and
            prepare a quotation.
          </p>

          <div className="button-row">
            <a
              className="button button-gold"
              href={consultationLink}
            >
              Discuss your furniture
            </a>
            <Link
              className="text-link"
              href="/our-factory"
            >
              Explore our factory approach ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}