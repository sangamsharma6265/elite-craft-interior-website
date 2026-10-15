import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteUI";
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
  title: {
    default:
      "Elite Craft Interior | Interiors & Factory-Made Furniture in Delhi NCR",
    template: "%s | Elite Craft Interior",
  },
  description:
    "Buy custom furniture from our own factory or plan your interiors, exteriors and modular kitchen in Delhi NCR. Book a free consultation with Elite Craft Interior.",
  applicationName: "Elite Craft Interior",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Elite Craft Interior",
    title: "Elite Craft Interior | Spaces & Furniture Crafted Around You",
    description:
      "Custom furniture from our own factory, modular kitchens and interior services across Delhi NCR.",
  },
  twitter: {
    card: "summary",
    title: "Elite Craft Interior",
    description:
      "Factory-made custom furniture and interior services across Delhi NCR.",
  },
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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}