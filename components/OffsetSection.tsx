import Button from "./Button";
import OffsetImage from "./OffsetImage";

/**
 * Alternating text / image content row with the cream offset-frame photo, a gold
 * H2, a gold eyebrow subhead, a 60px gold underline and body copy. Optional CTA.
 */
export default function OffsetSection({
  heading,
  eyebrow,
  imageSrc,
  imageAlt,
  imageSide = "left",
  cta,
  children,
  className = "",
}: {
  heading: React.ReactNode;
  eyebrow?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  cta?: { label: string; href: string };
  children: React.ReactNode;
  className?: string;
}) {
  const image = (
    <div className={imageSide === "right" ? "md:order-2" : ""}>
      <OffsetImage src={imageSrc} alt={imageAlt} />
    </div>
  );
  const text = (
    <div className={imageSide === "right" ? "md:order-1" : ""}>
      <h2 className="m-0 mb-[10px] font-display text-[clamp(29px,3.1vw,43px)] font-semibold uppercase tracking-[0.03em] text-heading-light">
        {heading}
      </h2>
      {eyebrow && <p className="eyebrow mb-[18px] text-[15px]">{eyebrow}</p>}
      <div className="rule-gold mb-6" />
      <div className="space-y-5 text-[17px] leading-[1.75] text-body">{children}</div>
      {cta && (
        <div className="mt-8">
          <Button href={cta.href} size="sm">
            {cta.label}
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <section
      className={`mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-10 py-16 md:grid-cols-2 md:gap-16 ${className}`}
    >
      {image}
      {text}
    </section>
  );
}
