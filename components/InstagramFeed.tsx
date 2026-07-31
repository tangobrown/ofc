import type { Feed, Post } from "@behold/types";
import { SOCIAL } from "@/lib/nav";

/**
 * "The Latest on Instagram" — the client's 4 most recent posts, fetched from a
 * Behold JSON feed in this Server Component (no client fetch, no Graph API/OAuth).
 *
 * Fails safe: if the feed id is unset, the request fails, or there are no posts,
 * it returns null and the section disappears cleanly — it never throws or renders
 * an empty shell.
 */
async function getPosts(): Promise<Post[] | null> {
  const feedId = process.env.BEHOLD_FEED_ID;
  if (!feedId) return null;

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      // One upstream request per hour, shared across every page via the data cache.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const feed = (await res.json()) as Feed;
    const posts = feed?.posts;
    if (!Array.isArray(posts) || posts.length === 0) return null;

    return posts.slice(0, 6);
  } catch {
    return null;
  }
}

export default async function InstagramFeed() {
  const posts = await getPosts();
  if (!posts) return null;

  return (
    <section className="border-t border-[rgba(217,196,166,0.18)] px-[30px] pb-12 pt-20 text-center md:pb-16 md:pt-24">
      <h2 className="m-0 mb-11 font-display text-[clamp(29px,3.3vw,43px)] font-semibold uppercase tracking-[0.05em] text-[#efe9dc]">
        The Latest on{" "}
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline-offset-4 hover:underline"
        >
          Instagram
        </a>
      </h2>

      {/* Scroll-snap carousel on mobile; full-width 6-up grid from sm upward. No JS/carousel lib. */}
      <ul className="flex w-full snap-x snap-mandatory list-none gap-[20px] overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-6 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {posts.map((post) => {
          const { small, medium } = post.sizes;
          // prunedCaption has hashtags stripped; prefer it wherever text is shown.
          const alt = post.altText ?? post.prunedCaption ?? "";
          const caption = post.prunedCaption ?? post.caption ?? "";
          const bg = post.colorPalette?.muted ? `rgb(${post.colorPalette.muted})` : "#1c1b19";

          return (
            <li key={post.id} className="w-[70%] shrink-0 snap-start sm:w-auto">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt || "View this post on Instagram"}
                className="group block"
              >
                <div
                  className="relative aspect-square w-full overflow-hidden"
                  style={{ backgroundColor: bg }}
                >
                  {/* Plain img: Behold already serves optimized, correctly-sized URLs. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={small.mediaUrl}
                    srcSet={`${small.mediaUrl} 400w, ${medium.mediaUrl} 700w`}
                    sizes="(min-width: 640px) 260px, 70vw"
                    width={small.width ?? undefined}
                    height={small.height ?? undefined}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {caption && (
                    <div className="absolute inset-0 flex items-end bg-black/55 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="line-clamp-4 text-left text-[13px] leading-snug text-white">
                        {caption}
                      </p>
                    </div>
                  )}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
