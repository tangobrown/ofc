import type { Metadata } from "next";
import { pageMeta, SITE_NAME } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import { abs, breadcrumbSchema } from "@/lib/schema";
import { BOOKING_URL } from "@/lib/nav";
import Placeholder from "@/components/Placeholder";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = pageMeta({
  title: "Cocktail Tips & Guides | The Old Fashioned Blog",
  description:
    "Shake up your bartending skills with cocktail tips, whiskey and mezcal guides, clear-ice how-tos and party ideas from The Old Fashioned Cocktail Co.",
  path: "/blog",
});

function isoDate(s: string): string | undefined {
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

export default function BlogIndexPage() {
  return (
    <PageShell>
      <Hero
        image="/images/cocktail-bar-outside.jpg"
        imageAlt="The mobile cocktail bar set up outdoors"
        title="Tips 'n Tricks"
        subtitle="Shake up your bartending skills."
        height="short"
        cta={{ label: "Check Availability", href: BOOKING_URL }}
      />

      <section className="mx-auto max-w-blog-index px-5 md:px-6 py-16">
        <div className="flex flex-col gap-16">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid items-center gap-8 md:grid-cols-[400px_1fr]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                {post.featureImage ? (
                  <Image
                    src={post.featureImage}
                    alt={post.featureImageAlt ?? post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                ) : (
                  <Placeholder label={post.title} />
                )}
              </div>
              <div>
                <p className="eyebrow mb-3 text-[13px] uppercase text-gold">{post.category}</p>
                <h2 className="mb-4 font-display text-[clamp(25px,2.7vw,34px)] font-semibold uppercase tracking-[0.02em] leading-[1.2] text-cream group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="mb-4 text-[16px] leading-[1.7] text-body">{post.excerpt}</p>
                <p className="text-[12px] uppercase tracking-wide text-muted">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${SITE_NAME} Blog`,
            description:
              "Cocktail tips, whiskey and mezcal guides, clear-ice how-tos and party ideas from The Old Fashioned Cocktail Co.",
            url: abs("/blog"),
            blogPost: POSTS.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: abs(`/blog/${post.slug}`),
              datePublished: isoDate(post.date),
              ...(post.featureImage ? { image: abs(post.featureImage) } : {}),
            })),
          },
          breadcrumbSchema([{ name: "Blog", path: "/blog" }]),
        ]}
      />
    </PageShell>
  );
}
