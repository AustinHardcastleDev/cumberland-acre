import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
  weight: ["400", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
});

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
      <body className="min-h-full bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
