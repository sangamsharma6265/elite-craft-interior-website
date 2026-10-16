import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryLinks, DesignCard } from "@/components/SiteUI";
import {
  categories,
  designs,
  getCategory,
  whatsapp,
} from "@/lib/catalogue";
import { absoluteUrl, site } from "@/lib/site";

type Props = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const url = absoluteUrl(`/furniture/${category.slug}`);
  const title = `${category.name} | Custom Orders in Delhi NCR`;
  const description =
    `${category.description} Book a free consultation with Elite Craft Interior.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url,
      title: `${category.name} | Elite Craft Interior`,
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
      title: `${category.name} | Elite Craft Interior`,
      description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const categoryDesigns = designs.filter(
    (design) => design.category === category.slug,
  );

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Furniture",
        item: absoluteUrl("/furniture"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.shortName,
        item: absoluteUrl(`/furniture/${category.slug}`),
      },
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c"),
        }}
      />

      <section className="ec-page-intro">
        <div className="container">
          <nav className="ec-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/furniture">Furniture</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{category.shortName}</span>
          </nav>

          <p className="eyebrow">
            {categoryDesigns.length} DESIGN REFERENCES · CUSTOM ORDERS
          </p>

          <h1>{category.name}</h1>
          <p className="ec-lead">{category.description}</p>

          <div className="ec-tag-list" aria-label="Collection options">
            {category.includes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="button-row">
            <a
              className="button"
              href={whatsapp(
                `Hello Elite Craft Interior, I would like to discuss ${category.name}. I can share my dimensions and preferred design.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss a Custom Order ↗
            </a>

            <a className="text-link" href="#category-designs">
              Browse all {categoryDesigns.length} references ↓
            </a>
          </div>
        </div>
      </section>

      <section
        className="ec-catalogue-section"
        id="category-designs"
        aria-label={`${category.name} collection`}
      >
        <div className="container">
          <CategoryLinks active={category.slug} />

          <div className="design-grid">
            {categoryDesigns.map((design) => (
              <DesignCard key={design.slug} design={design} />
            ))}
          </div>

          <p className="ec-notice">
            Images are design references, not completed Elite Craft Interior
            projects. We can discuss similar custom furniture. Final materials,
            dimensions, appearance and pricing are agreed before manufacture.
          </p>
        </div>
      </section>
    </main>
  );
}