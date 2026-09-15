import type { Metadata, Viewport } from "next";
import { sourceSerif, workSans } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Cumberland Acre | We Buy Land and Houses in Middle Tennessee",
    template: "%s | Cumberland Acre",
  },
  description:
    "Cumberland Acre is a small, locally based company. We buy land and houses in Middle Tennessee as-is, pay cash, and cover closing costs. Free, no-obligation offers.",
  applicationName: SITE.name,
  keywords: [
    "sell my house",
    "sell land",
    "cash home buyers",
    "Middle Tennessee",
    "Cumberland Acre",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "We buy land and houses in Middle Tennessee, as they are.",
    description:
      "A small, locally based cash buyer. No repairs, no commissions, and you choose the closing date.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cumberland Acre | Cash offers on land and houses",
    description:
      "We buy land and houses in Middle Tennessee as-is. Free, no-obligation cash offers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F8F3",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  areaServed: SITE.region,
  description:
    "Local cash buyers of land and houses in Middle Tennessee. We buy as-is and cover closing costs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className={`${workSans.className} min-h-full bg-paper text-ink`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
