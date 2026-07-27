import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips 'n Tricks — shake up your bartending skills with The Old Fashioned Cocktail Co.",
};

export default function BlogIndexPage() {
  return (
    <PageShell>
      <Hero
        imageAlt="Cigars & dried citrus flatlay"
        title="Tips 'n Tricks"
        subtitle="Shake up your bartending skills."
        height="short"
      />

      <section className="mx-auto max-w-blog-index px-6 py-16">
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
                    alt={post.title}
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
                <h2 className="mb-4 font-display text-[clamp(22px,2.4vw,30px)] font-semibold uppercase tracking-[0.02em] leading-[1.12] text-cream group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="mb-4 text-[16px] leading-[1.7] text-body">{post.excerpt}</p>
                <p className="text-[12px] uppercase tracking-wide text-muted">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </PageShell>
  );
}
