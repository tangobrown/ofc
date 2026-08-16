import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Placeholder from "@/components/Placeholder";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/blog";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { abs, breadcrumbSchema } from "@/lib/schema";
import { LOGO_SRC } from "@/lib/nav";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

function isoDate(s: string): string | undefined {
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

function trim(text: string, max = 165): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog" };

  const description = trim(post.excerpt);
  const path = `/blog/${post.slug}`;
  const image = post.featureImage ?? DEFAULT_OG_IMAGE;
  const ogTitle = `${post.title} · ${SITE_NAME}`;

  return {
    title: { absolute: post.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: ogTitle,
      description,
      url: path,
      images: [{ url: image, alt: post.featureImageAlt ?? post.title }],
      publishedTime: isoDate(post.date),
      authors: [post.author],
      section: post.category,
    },
    twitter: { title: ogTitle, description, images: [image] },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = POSTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = POSTS[index];
  const prev = index > 0 ? POSTS[index - 1] : undefined;
  const next = index < POSTS.length - 1 ? POSTS[index + 1] : undefined;

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const published = isoDate(post.date);
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [abs(post.featureImage ?? DEFAULT_OG_IMAGE)],
    datePublished: published,
    dateModified: published,
    author: { "@type": "Person", name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: abs(LOGO_SRC) },
    },
    articleSection: post.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    url: articleUrl,
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const howTo = post.howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.howTo.name,
        description: post.howTo.description,
        ...(post.featureImage ? { image: abs(post.featureImage) } : {}),
        step: post.howTo.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }
    : null;

  return (
    <PageShell navVariant="solid">
      <article className="mx-auto max-w-article px-5 md:px-6 pt-16 pb-10">
        <p className="eyebrow mb-4 text-center text-[13px] uppercase text-gold">{post.category}</p>
        <h1 className="mb-5 text-center font-display text-[clamp(34px,4.5vw,54px)] font-semibold uppercase tracking-[0.02em] leading-[1.18] text-cream">
          {post.title}
        </h1>
        <p className="mb-10 text-center text-[12px] uppercase tracking-[0.05em] text-muted">
          By {post.author} · {post.date}
        </p>

        <div className="relative aspect-[16/9] my-10">
          {post.featureImage ? (
            <Image
              src={post.featureImage}
              alt={post.featureImageAlt ?? post.title}
              fill
              priority
              sizes="(max-width: 820px) 100vw, 820px"
              className="object-cover"
            />
          ) : (
            <Placeholder label={post.title} />
          )}
        </div>

        {post.body}
      </article>

      <nav className="mx-auto flex max-w-article justify-between gap-6 border-t border-[rgba(217,196,166,0.18)] px-5 md:px-6 pt-8 pb-16">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="text-gold hover:text-cream">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/blog/${next.slug}`} className="text-right text-gold hover:text-cream">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <JsonLd data={howTo ? [blogPosting, breadcrumb, howTo] : [blogPosting, breadcrumb]} />
    </PageShell>
  );
}
