import Image from "next/image";
import Button from "./Button";
import Placeholder from "./Placeholder";

type HeroProps = {
  /** Hosted image URL. Omit to render a labeled placeholder (image to supply). */
  image?: string;
  imageAlt: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** italic Arvo subtitle vs plain */
  subtitleItalic?: boolean;
  showArrow?: boolean;
  cta?: { label: string; href: string };
  /** "tall" = 72vh (default inner page). "short" = 56vh (blog index). */
  height?: "tall" | "short";
};

/**
 * Standard inner-page hero: full-bleed image, dark scrim, centered heading +
 * subtitle, optional CTA or a down-arrow pinned bottom-center. The transparent
 * nav is rendered separately by PageShell and overlays this section.
 */
export default function Hero({
  image,
  imageAlt,
  title,
  subtitle,
  subtitleItalic = true,
  showArrow = false,
  cta,
  height = "tall",
}: HeroProps) {
  const heightCls = height === "short" ? "h-[56vh] min-h-[440px]" : "h-[72vh] min-h-[580px]";
  return (
    <section id="content" data-hero className={`relative w-full overflow-hidden ${heightCls}`}>
      {image ? (
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      ) : (
        <div className="absolute inset-0">
          <Placeholder label={imageAlt} />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-hero-scrim" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-[60px] pt-[150px] text-center">
        <h1 className="m-0 max-w-[700px] font-display text-[44px] md:text-[clamp(34px,4.9vw,66px)] font-semibold uppercase leading-[1.14] tracking-[0.03em] text-heading-light">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-[18px] text-[17px] md:text-[clamp(14px,1.3vw,18px)] text-[#e2dccf] ${
              subtitleItalic ? "italic" : ""
            }`}
          >
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-8">
            <Button href={cta.href} tone="cream">
              {cta.label}
            </Button>
          </div>
        )}
      </div>

      {showArrow && (
        <a
          href="#content"
          aria-label="Scroll down"
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[26px] text-text-hi opacity-80 transition-opacity hover:opacity-100"
        >
          ↓
        </a>
      )}
    </section>
  );
}
