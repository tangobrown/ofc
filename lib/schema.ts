// Centralised schema.org / JSON-LD builders. Keeping them here means every
// page emits consistent, entity-linked structured data for Google rich results
// and AI answer engines (AEO/GEO).

import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "./seo";
import { SOCIAL, LOGO_SRC } from "./nav";

/** Turn a site-relative path into an absolute URL. */
export function abs(path: string): string {
  if (!path) return SITE_URL;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Stable @id for the business entity so other nodes can reference it. */
export const ORG_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * The primary business entity. Emitted once (in the root layout) and referenced
 * elsewhere via ORG_ID rather than repeated in full.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "The Old Fashioned Cocktail Co",
    description:
      "The Old Fashioned Cocktail Co. is a mobile cocktail bar hire company serving weddings, corporate events, birthdays and private parties across New York, from its base in Yonkers.",
    slogan: "Smokin' drinks with a measure of style.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: abs(LOGO_SRC),
    },
    image: [abs(DEFAULT_OG_IMAGE), abs("/images/fleet/The_Old_Fashioned_Main.webp")],
    priceRange: "$$",
    areaServed: [
      { "@type": "State", name: "New York" },
      { "@type": "City", name: "New York City" },
      { "@type": "City", name: "Yonkers" },
    ],
    serviceType: "Mobile cocktail bar hire",
    knowsAbout: [
      "Mobile cocktail bar hire",
      "Wedding bar service",
      "Corporate event bar hire",
      "Cocktail catering",
      "Old Fashioned cocktails",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yonkers",
      addressRegion: "NY",
      postalCode: "10701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9312,
      longitude: -73.8987,
    },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  };
}

/** Website node, enabling the sitelinks search box where eligible. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORG_ID },
  };
}

/**
 * Breadcrumb trail. Pass ordered crumbs from Home to the current page.
 * e.g. breadcrumbSchema([{ name: "Weddings", path: "/weddings" }])
 * (Home is prepended automatically.)
 */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/** A service offered by the business, linked back to the org entity. */
export function serviceSchema({
  name,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  serviceType = "Mobile cocktail bar hire",
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: abs(path),
    image: abs(image),
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "State", name: "New York" },
      { "@type": "City", name: "New York City" },
    ],
    audience: { "@type": "Audience", audienceType: "Event hosts" },
  };
}

/** FAQPage from plain-text question/answer pairs. */
export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
