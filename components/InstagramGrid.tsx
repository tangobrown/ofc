import Placeholder from "./Placeholder";

export type IgPost = { caption?: string; likes?: string };

const DEFAULT_POSTS: IgPost[] = [
  { caption: "Instagram post 1" },
  { caption: "Instagram post 2" },
  { caption: "Instagram post 3" },
  { caption: "Instagram post 4" },
];

/**
 * "The Latest on Instagram" — 4-up square grid. On Home, pass `posts` with
 * captions + likes to render them under each tile. Wire to a real IG feed later.
 */
export default function InstagramGrid({
  posts = DEFAULT_POSTS,
  showCaptions = false,
}: {
  posts?: IgPost[];
  showCaptions?: boolean;
}) {
  return (
    <section className="px-10 pb-[70px] pt-10 text-center">
      <h2 className="m-0 mb-11 font-display text-[clamp(26px,3vw,38px)] font-semibold uppercase tracking-[0.05em] text-[#efe9dc]">
        The Latest on <span className="text-gold">Instagram</span>
      </h2>
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-[18px] md:grid-cols-4">
        {posts.map((post, i) => (
          <div key={i} className={showCaptions ? "text-left" : ""}>
            <div className="mb-3 aspect-square">
              <Placeholder label={post.caption ?? `Instagram post ${i + 1}`} />
            </div>
            {showCaptions && post.caption && (
              <>
                <p className="mb-2 text-[14px] leading-[1.5] text-[#928b7e]">{post.caption}</p>
                {post.likes && (
                  <div className="font-body text-[12px] tracking-[0.05em] text-gold">{post.likes}</div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
