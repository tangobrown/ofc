import type { Metadata } from "next";

export const SITE_NAME = "The Old Fashioned Cocktail Co.";

/**
 * Canonical production origin. Override per-deploy with NEXT_PUBLIC_SITE_URL.
 * Defaults to the client's domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://theoldfashionedcocktailco.com"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/images/cocktail-bar-outside.jpg";

/**
 * Build a page's Metadata (title, description, canonical, Open Graph, Twitter)
 * from a few fields so every route stays consistent.
 */
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const ogTitle = `${title} · ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
