import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { POSTS } from "@/lib/blog";

const ROUTES = [
  "",
  "/events",
  "/weddings",
  "/corporate",
  "/birthdays",
  "/how-it-works",
  "/fleet",
  "/about",
  "/faqs",
  "/blog",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = POSTS.map((post) => {
    const d = new Date(post.date);
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: Number.isNaN(d.getTime()) ? undefined : d,
      changeFrequency: "yearly",
      priority: 0.6,
    };
  });

  return [...staticEntries, ...blogEntries];
}
