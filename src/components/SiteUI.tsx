import Image from "next/image";
import Link from "next/link";

import {
  business,
  categories,
  consultationLink,
  getCategory,
  type Design,
} from "@/lib/catalogue";

const navigation = [
  { href: "/services/interior-design", label: "Interiors" },
  { href: "/services/exterior-design", label: "Exteriors" },
  { href: "/services/wall-panels", label: "Wall Panels" },
  { href: "/furniture", label: "Furniture" },
  { href: "/design-gallery", label: "Design Gallery" },
  { href: "/our-factory", label: "Our Factory" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement">
        <span>OWN FACTORY · CUSTOM FURNITURE · DELHI NCR</span>
        <a
          href={consultationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a free consultation ↗
        </a>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="Elite Craft Interior home"
          >
            <Image
              src="/logo.svg"
              alt="Elite Craft Interior"
              width={260}
              height={56}
              priority
            />
          </Link>

          <nav
            className="desktop-nav"
            aria-label="Main navigation"
            style={{
              flexWrap: "wrap",
              columnGap: "18px",
              rowGap: "8px",
              justifyContent: "center",
            }}
          >
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="button header-cta"
            href={consultationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Quote ↗
          </a>

          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {business.name}.
            <br />
            <span>
              Interiors. Exteriors. Factory-made furniture.
            </span>
          </p>

          <nav
            aria-label="Footer navigation"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 22px",
            }}
          >
            <Link href="/services/interior-design">Interiors ↗</Link>
            <Link href="/services/exterior-design">Exteriors ↗</Link>
            <Link href="/services/wall-panels">Wall panels ↗</Link>
            <Link href="/furniture">Furniture ↗</Link>
            <Link href="/design-gallery">Design gallery ↗</Link>
          </nav>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={consultationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Elite Craft Interior on WhatsApp"
      >
        WhatsApp ↗
      </a>
    </>
  );
}

export function CategoryLinks({ active }: { active?: string }) {
  return (
    <nav
      className="ec-category-links"
      aria-label="Furniture categories"
    >
      <Link
        href="/furniture"
        aria-current={!active ? "page" : undefined}
      >
        All Furniture
      </Link>

      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/furniture/${category.slug}`}
          aria-current={
            active === category.slug ? "page" : undefined
          }
        >
          {category.shortName}
        </Link>
      ))}
    </nav>
  );
}

export function DesignCard({ design }: { design: Design }) {
  const category = getCategory(design.category);

  if (!category) {
    return null;
  }

  const image = design.image ?? category.image;
  const imageAlt = design.imageAlt ?? category.imageAlt;

  return (
    <article className="design-card">
      <Link
        href={`/designs/${design.slug}`}
        className="ec-card-link"
        aria-label={`View ${design.name}`}
      >
        <div className="design-photo">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className="cover-image"
          />
          <span className="reference-label">
            {design.image
              ? "Reference design"
              : "Category inspiration"}
          </span>
        </div>

        <div className="design-content">
          <p className="eyebrow">
            {design.code} · CUSTOM ORDERS
          </p>
          <h3>{design.name}</h3>
          <p className="ec-card-summary">{design.summary}</p>
          <span className="text-link">
            View & customise ↗
          </span>
        </div>
      </Link>
    </article>
  );
}