import type { Metadata } from "next";
import { arvo, bosque, lumier } from "./fonts";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { SOCIAL, LOGO_SRC } from "@/lib/nav";
import "./globals.css";

const DEFAULT_TITLE = `${SITE_NAME} — Mobile Cocktail Bar Hire in New York`;
const DEFAULT_DESCRIPTION =
  "Smokin' drinks with a measure of style. Hire The Old Fashioned Cocktail Co.'s vintage 1920s mobile cocktail bar for weddings, corporate events, birthdays and parties across New York.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "mobile cocktail bar",
    "cocktail bar hire",
    "mobile bar hire New York",
    "wedding cocktail bar",
    "corporate event bar hire",
    "party bar hire",
    "cocktail catering New York",
    "The Old Fashioned Cocktail Co",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_SRC}`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  priceRange: "$$",
  areaServed: { "@type": "State", name: "New York" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yonkers",
    addressRegion: "NY",
    postalCode: "10701",
    addressCountry: "US",
  },
  sameAs: [SOCIAL.facebook, SOCIAL.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${arvo.variable} ${bosque.variable} ${lumier.variable}`}>
      <body className="bg-bg text-body font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
