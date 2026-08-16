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
  imageAlt,
}: {
  /** Full, self-contained <title> (no brand suffix is appended). Keep ≤ ~60 chars. */
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  return {
    // Absolute so each page owns its full title tag rather than inheriting the
    // root "%s · SITE_NAME" template (which pushed titles well over length).
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [{ url: image, alt: imageAlt ?? title }],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  };
}
