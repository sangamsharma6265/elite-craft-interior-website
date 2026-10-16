import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  categories,
  consultationLink,
  designs,
  getCategory,
} from "@/lib/catalogue";
import { services } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

type SearchParams = Record<
  string,
  string | string[] | undefined
>;

type PageProps = {
  searchParams: Promise<SearchParams>;
};

type GalleryItem = {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  categoryName: string;
  href: string;
};

const PAGE_SIZE = 24;

const galleryItems: GalleryItem[] = [
  ...designs
    .filter((design) => Boolean(design.image))
    .map((design) => ({
      id: `furniture-${design.slug}`,
      code: design.code,
      name: design.name,
      description: design.summary,
      image: design.image!,
      imageAlt: design.imageAlt ?? design.name,
      category: design.category,
      categoryName:
        getCategory(design.category)?.shortName ?? "Furniture",
      href: `/designs/${design.slug}`,
    })),

  ...services.flatMap((service) =>
    service.references.map((reference) => ({
      id: `${service.slug}-${reference.slug}`,
      code: reference.code,
      name: reference.name,
      description: reference.description,
      image: reference.image,
      imageAlt: reference.imageAlt,
      category: service.slug,
      categoryName: service.shortName,
      href: `/services/${service.slug}#${reference.slug}`,
    })),
  ),
];

const galleryCategories = [
  ...categories.map((category) => ({
    slug: category.slug,
    name: category.shortName,
  })),
  ...services.map((service) => ({
    slug: service.slug,
    name: service.shortName,
  })),
];

function single(
  value: string | string[] | undefined,
): string {
  return Array.isArray(value)
    ? value[0] ?? ""
    : value ?? "";
}

function galleryLink(
  query: string,
  category: string,
  page: number = 1,
): string {
  const params = new URLSearchParams();

  if (query) params.set("q", query);
  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));

  const search = params.toString();

  return `/design-gallery${
    search ? `?${search}` : ""
  }#gallery-results`;
}

function resolveGallery(params: SearchParams) {
  const query = single(params.q).trim().slice(0, 150);
  const selectedCategory = single(params.category);

  const category = galleryCategories.some(
    (item) => item.slug === selectedCategory,
  )
    ? selectedCategory
    : "";

  const queryWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const matchingItems = galleryItems.filter((item) => {
    if (category && item.category !== category) {
      return false;
    }

    const searchable =
      `${item.name} ${item.code} ${item.description} ${item.categoryName}`
        .toLowerCase();

    return queryWords.every((word) =>
      searchable.includes(word),
    );
  });

  const totalPages = Math.max(
    1,
    Math.ceil(matchingItems.length / PAGE_SIZE),
  );

  const requestedPage = Number(single(params.page) || "1");

  const validPage =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const page = Math.min(validPage, totalPages);
  const start = (page - 1) * PAGE_SIZE;
  const visibleItems = matchingItems.slice(
    start,
    start + PAGE_SIZE,
  );

  return {
    query,
    category,
    matchingItems,
    totalPages,
    page,
    start,
    visibleItems,
  };
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const { query, category, page } = resolveGallery(params);

  const filtered = Boolean(query || category);
  const path = galleryLink(query, category, page).split("#")[0];
  const url = absoluteUrl(path);

  const title =
    "Furniture & Interior Design Gallery in Delhi NCR" +
    (page > 1 ? ` | Page ${page}` : "");

  const description =
    "Browse furniture, interior, exterior and wall-panel reference designs. Explore custom options with Elite Craft Interior, serving Delhi NCR.";

  const reference =
    galleryItems.find((item) => item.category === category) ??
    galleryItems[0];

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
          url: reference.image,
          alt: reference.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [reference.image],
    },
  };
}

export default async function DesignGalleryPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  const {
    query,
    category,
    matchingItems,
    totalPages,
    page,
    start,
    visibleItems,
  } = resolveGallery(params);

  const paginationPages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  ).filter(
    (number) =>
      number === 1 ||
      number === totalPages ||
      Math.abs(number - page) <= 1,
  );

  return (
    <main id="main-content" className="ec-gallery">
      <div className="container">
        <nav
          className="ec-gallery-breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Design Gallery</span>
        </nav>

        <header className="ec-gallery-hero">
          <p className="ec-gallery-eyebrow">
            FURNITURE · INTERIORS · EXTERIORS · WALL PANELS
          </p>
          <h1>Find a design that feels like you.</h1>
          <p>
            Explore {galleryItems.length} reference designs for your
            home, office or outdoor space. Choose a direction, note
            its code and discuss custom options with our team.
          </p>

          <div className="ec-gallery-hero-links">
            <Link href="/furniture">
              Buy custom furniture ↗
            </Link>
            <a
              href={consultationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Free initial consultation ↗
            </a>
          </div>
        </header>

        <aside className="ec-gallery-note">
          These photographs are design references, not our completed
          projects. Materials, dimensions, feasibility and the final
          scope are confirmed in your quote.
        </aside>

        <section
          id="gallery-results"
          className="ec-gallery-results"
        >
          <h2 className="ec-gallery-filter-heading">
            Explore the collection
          </h2>

          <form
            action="/design-gallery#gallery-results"
            method="get"
          >
            <div className="ec-gallery-search">
              <div>
                <label htmlFor="gallery-search">
                  Search designs
                </label>
                <input
                  id="gallery-search"
                  type="search"
                  name="q"
                  defaultValue={query}
                  maxLength={150}
                  placeholder="Try marble, wardrobe, balcony or a design code"
                />
              </div>

              <div>
                <label htmlFor="gallery-category">
                  Category
                </label>
                <select
                  id="gallery-category"
                  name="category"
                  defaultValue={category}
                >
                  <option value="">All categories</option>
                  {galleryCategories.map((item) => (
                    <option
                      key={item.slug}
                      value={item.slug}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit">Find designs</button>
            </div>
          </form>

          <nav
            className="ec-gallery-tabs"
            aria-label="Design categories"
          >
            <Link
              href={galleryLink(query, "")}
              aria-current={!category ? "page" : undefined}
            >
              All designs
            </Link>

            {galleryCategories.map((item) => (
              <Link
                key={item.slug}
                href={galleryLink(query, item.slug)}
                aria-current={
                  category === item.slug ? "page" : undefined
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="ec-gallery-result-summary">
            <p>
              {matchingItems.length > 0
                ? `Showing ${start + 1}–${
                    start + visibleItems.length
                  } of ${matchingItems.length} designs`
                : "No matching designs"}
              {query ? ` for “${query}”` : ""}
            </p>

            {(query || category) && (
              <Link href="/design-gallery#gallery-results">
                Clear filters ↗
              </Link>
            )}
          </div>

          {visibleItems.length > 0 ? (
            <div className="ec-gallery-grid">
              {visibleItems.map((item) => (
                <article
                  className="ec-gallery-card"
                  key={item.id}
                >
                  <Link
                    href={item.href}
                    className="ec-gallery-card-link"
                  >
                    <div className="ec-gallery-photo">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                      <span>Reference design</span>
                    </div>

                    <div className="ec-gallery-card-copy">
                      <p className="ec-gallery-eyebrow">
                        {item.code} · {item.categoryName}
                      </p>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <span className="ec-gallery-view">
                        View & discuss ↗
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="ec-gallery-empty">
              <h3>Try another search.</h3>
              <p>
                Use a shorter term or choose another category. You
                can also share your own design idea with us.
              </p>
              <Link href="/design-gallery#gallery-results">
                Browse all designs ↗
              </Link>
            </div>
          )}

          {totalPages > 1 && (
            <nav
              className="ec-gallery-pagination"
              aria-label="Gallery pages"
            >
              {page > 1 && (
                <Link
                  href={galleryLink(
                    query,
                    category,
                    page - 1,
                  )}
                >
                  ← Previous
                </Link>
              )}

              {paginationPages.map((number, index) => (
                <span
                  className="ec-gallery-page-item"
                  key={number}
                >
                  {index > 0 &&
                    number >
                      paginationPages[index - 1] + 1 && (
                      <span
                        className="ec-gallery-ellipsis"
                        aria-hidden="true"
                      >
                        …
                      </span>
                    )}

                  <Link
                    href={galleryLink(
                      query,
                      category,
                      number,
                    )}
                    aria-label={`Page ${number}`}
                    aria-current={
                      number === page ? "page" : undefined
                    }
                  >
                    {number}
                  </Link>
                </span>
              ))}

              {page < totalPages && (
                <Link
                  href={galleryLink(
                    query,
                    category,
                    page + 1,
                  )}
                >
                  Next →
                </Link>
              )}
            </nav>
          )}
        </section>

        <section className="ec-gallery-contact">
          <p className="ec-gallery-eyebrow">
            HAVE SOMETHING ELSE IN MIND?
          </p>
          <h2>Your inspiration is welcome.</h2>
          <p>
            Send your favourite design, room measurements and
            location. We can discuss a single furniture order or a
            wider project across Delhi NCR.
          </p>
          <a
            href={consultationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share your idea on WhatsApp ↗
          </a>
        </section>
      </div>

      <style>{`
        .ec-gallery {
          background: #202622;
          color: #f8f6f1;
          padding: 32px 0 76px;
        }
        .ec-gallery a { color: inherit; }
        .ec-gallery-breadcrumb {
          display: flex;
          gap: 12px;
          font-size: 13px;
          color: #cecfc5;
        }
        .ec-gallery-hero {
          padding: 48px 0 30px;
          max-width: 850px;
        }
        .ec-gallery h1,
        .ec-gallery h2,
        .ec-gallery h3 {
          font-family: Georgia, serif;
          font-weight: 400;
        }
        .ec-gallery h1 {
          font-size: clamp(40px, 5vw, 68px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin: 18px 0 22px;
        }
        .ec-gallery h2 {
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.2;
        }
        .ec-gallery h3 {
          font-size: 25px;
          line-height: 1.25;
          margin: 14px 0;
        }
        .ec-gallery p {
          line-height: 1.8;
          color: #cecfc5;
        }
        .ec-gallery .ec-gallery-eyebrow {
          font-size: 11px;
          letter-spacing: 1.7px;
          color: #c6a66d;
        }
        .ec-gallery-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px 28px;
          margin-top: 24px;
        }
        .ec-gallery-hero-links a { color: #c6a66d; }
        .ec-gallery-note {
          padding: 20px 24px;
          border: 1px solid #c6a66d55;
          background: #29312a;
          color: #cecfc5;
          font-size: 13px;
          line-height: 1.8;
        }
        .ec-gallery-results {
          padding-top: 40px;
          scroll-margin-top: 120px;
        }
        .ec-gallery-filter-heading { margin-bottom: 24px; }
        .ec-gallery-search {
          display: grid;
          grid-template-columns: 1.6fr 1fr auto;
          align-items: end;
          gap: 16px;
        }
        .ec-gallery-search label {
          display: block;
          margin-bottom: 9px;
          font-size: 13px;
        }
        .ec-gallery-search input,
        .ec-gallery-search select {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          min-height: 49px;
          padding: 12px 14px;
          border: 1px solid #ffffff35;
          border-radius: 0;
          background: #29312a;
          color: #f8f6f1;
          font: inherit;
          font-size: 14px;
        }
        .ec-gallery-search input::placeholder {
          color: #b8bdb2;
        }
        .ec-gallery-search button {
          min-height: 49px;
          padding: 12px 22px;
          border: 1px solid #c6a66d;
          background: #c6a66d;
          color: #202622;
          font: inherit;
          cursor: pointer;
        }
        .ec-gallery-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 24px;
        }
        .ec-gallery-tabs a {
          padding: 10px 14px;
          border: 1px solid #ffffff25;
          text-decoration: none;
          font-size: 13px;
        }
        .ec-gallery-tabs a[aria-current="page"],
        .ec-gallery-pagination a[aria-current="page"] {
          background: #c6a66d;
          color: #202622;
          border-color: #c6a66d;
        }
        .ec-gallery-result-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 20px 0;
          font-size: 14px;
        }
        .ec-gallery-result-summary a { color: #c6a66d; }
        .ec-gallery-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 28px;
        }
        .ec-gallery-card {
          background: #29312a;
          overflow: hidden;
        }
        .ec-gallery-card-link {
          display: block;
          height: 100%;
          text-decoration: none;
        }
        .ec-gallery-photo {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #30392f;
        }
        .ec-gallery-photo img {
          transition: transform .35s ease;
        }
        .ec-gallery-card-link:hover .ec-gallery-photo img {
          transform: scale(1.035);
        }
        .ec-gallery-photo > span {
          position: absolute;
          left: 16px;
          bottom: 16px;
          background: #202622e6;
          padding: 8px 11px;
          color: white;
          font-size: 11px;
        }
        .ec-gallery-card-copy { padding: 24px; }
        .ec-gallery-card-copy > p { font-size: 14px; }
        .ec-gallery .ec-gallery-view {
          display: inline-block;
          color: #c6a66d;
          margin-top: 10px;
          font-size: 14px;
        }
        .ec-gallery-empty {
          padding: 36px;
          border: 1px solid #ffffff25;
        }
        .ec-gallery-empty a { color: #c6a66d; }
        .ec-gallery-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 38px;
        }
        .ec-gallery-pagination a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-width: 44px;
          min-height: 44px;
          box-sizing: border-box;
          padding: 9px 13px;
          border: 1px solid #ffffff30;
          text-decoration: none;
          font-size: 14px;
        }
        .ec-gallery-page-item {
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }
        .ec-gallery-ellipsis { padding: 0 4px; }
        .ec-gallery-contact {
          padding: 36px;
          margin-top: 64px;
          border: 1px solid #c6a66d55;
          background: #29312a;
        }
        .ec-gallery-contact p { max-width: 750px; }
        .ec-gallery-contact > a {
          display: inline-flex;
          background: #c6a66d;
          color: #202622;
          padding: 15px 20px;
          margin-top: 14px;
          text-decoration: none;
        }
        .ec-gallery a:focus-visible,
        .ec-gallery input:focus-visible,
        .ec-gallery select:focus-visible,
        .ec-gallery button:focus-visible {
          outline: 2px solid #c6a66d;
          outline-offset: 4px;
        }
        @media (max-width: 1100px) {
          .ec-gallery-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 800px) {
          .ec-gallery-search {
            grid-template-columns: 1fr 1fr;
          }
          .ec-gallery-search > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 700px) {
          .ec-gallery-grid {
            grid-template-columns: 1fr;
          }
          .ec-gallery-hero { padding-top: 30px; }
          .ec-gallery-contact { padding: 24px; }
        }
        @media (max-width: 480px) {
          .ec-gallery-search {
            grid-template-columns: 1fr;
          }
          .ec-gallery-search > div:first-child {
            grid-column: auto;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ec-gallery-photo img { transition: none; }
          .ec-gallery-card-link:hover .ec-gallery-photo img {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}