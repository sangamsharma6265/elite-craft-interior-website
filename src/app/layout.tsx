import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteUI";
import { business } from "@/lib/catalogue";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";
import "./catalogue.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Elite Craft Interior | Interiors & Factory-Made Furniture in Delhi NCR",
    template: "%s | Elite Craft Interior",
  },
  description:
    "Buy custom furniture from our own factory or plan your interiors, exteriors and modular kitchen in Delhi NCR. Book a free consultation with Elite Craft Interior.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Elite Craft Interior | Spaces & Furniture Crafted Around You",
    description:
      "Custom furniture from our own factory, modular kitchens and interior services across Delhi NCR.",
  },
  twitter: {
    card: "summary",
    title: site.name,
    description:
      "Factory-made custom furniture and interior services across Delhi NCR.",
  },
};

const businessData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: business.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/logo.svg"),
  description: site.description,
  telephone: `+91${business.phone}`,
  email: business.email,
  areaServed: {
    "@type": "Place",
    name: "Delhi NCR, India",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+91${business.phone}`,
      contactType: "customer service",
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      telephone: `+91${business.secondPhone}`,
      contactType: "customer service",
      areaServed: "IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessData).replace(/</g, "\\u003c"),
          }}
        />

        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}