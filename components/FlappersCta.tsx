import Image from "next/image";
import Button from "./Button";

/**
 * "Make Yours a Classic" full-bleed flappers CTA: background photo, left-to-right
 * dark scrim, and a bordered box on the left with heading + subtitle + button.
 * Used on Home and the standard event pages.
 */
export default function FlappersCta({
  title = "Make Yours a Classic",
  subtitle = "Secure our services for your next event.",
  cta = { label: "Book Now", href: "#" },
  image = "/images/flappers.jpg",
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  cta?: { label: string; href: string };
  image?: string;
}) {
  return (
    <section className="relative mt-16 flex min-h-[620px] items-center md:mt-24">
      <div className="absolute inset-0">
        {/* Decorative background (heading text carries the meaning) */}
        <Image src={image} alt="" fill sizes="100vw" className="object-cover object-top" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-flappers-scrim" />
      <div className="relative z-[5] ml-[min(9vw,150px)] max-w-[340px] border border-[rgba(192,157,108,0.6)] bg-black/40 px-10 py-11 backdrop-blur-sm">
        <h2 className="m-0 mb-4 font-display text-[34px] font-semibold uppercase leading-[1.2] tracking-[0.04em] text-gold">
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
