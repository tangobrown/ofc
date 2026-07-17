import Button from "./Button";
import Placeholder from "./Placeholder";

/**
 * "Make Yours a Classic" full-bleed flappers CTA: background photo, left-to-right
 * dark scrim, and a bordered box on the left with heading + subtitle + button.
 * Used on Home and the standard event pages. Pass `image` when the real flappers
 * photo is available; otherwise a labeled placeholder is shown.
 */
export default function FlappersCta({
  title = "Make Yours a Classic",
  subtitle = "Secure our services for your next event.",
  cta = { label: "Book Now", href: "#" },
  image,
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  cta?: { label: string; href: string };
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[620px] items-center">
      <div className="absolute inset-0">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="1920s flappers with cocktails" className="h-full w-full object-cover" />
        ) : (
          <Placeholder label="1920s flappers with cocktails" />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-flappers-scrim" />
      <div className="relative z-[5] ml-[min(9vw,150px)] max-w-[340px] border border-[rgba(192,157,108,0.6)] bg-[rgba(17,13,9,0.28)] px-10 py-11 backdrop-blur-[1px]">
        <h2 className="m-0 mb-4 font-display text-[30px] font-semibold uppercase leading-[1.1] tracking-[0.04em] text-gold">
          {title}
        </h2>
        <p className="mb-7 text-[17px] leading-[1.6] text-[#d6cfc2]">{subtitle}</p>
        <Button href={cta.href} tone="cream">
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
