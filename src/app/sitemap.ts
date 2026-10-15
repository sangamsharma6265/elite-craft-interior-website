import type { MetadataRoute } from "next";
import { categories, designs } from "@/lib/catalogue";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/furniture",
    "/design-gallery",
    "/our-factory",
    ...categories.map((category) => `/furniture/${category.slug}`),
    ...services.map((service) => `/services/${service.slug}`),
    ...designs.map((design) => `/designs/${design.slug}`),
  ];

  return [...new Set(paths)].map((path) => ({
    url: absoluteUrl(path),
  }));
}