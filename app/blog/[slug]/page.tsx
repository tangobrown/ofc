import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Placeholder from "@/components/Placeholder";
import { POSTS } from "@/lib/blog";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

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
    title: post.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: ogTitle,
      description,
      url: path,
      images: [{ url: image, alt: post.title }],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(post.featureImage ? { image: [post.featureImage] } : {}),
    datePublished: isoDate(post.date),
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: SITE_NAME },
    articleSection: post.category,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

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
              alt={post.title}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </PageShell>
  );
}
