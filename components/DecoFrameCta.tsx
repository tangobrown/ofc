import Button from "./Button";

/**
 * Centered CTA inside a deco frame rectangle (1px gold @ 50%) with small breaks
 * at top/bottom center. Used on All Events, How It Works, About, FAQs.
 */
export default function DecoFrameCta({
  title,
  subtitle,
  cta,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  cta: { label: string; href: string };
}) {
  return (
    <section className="px-5 py-[110px] md:px-10 text-center">
      <div className="relative mx-auto max-w-[560px] px-6 py-[70px] md:px-10">
        <div className="absolute inset-0 border border-[rgba(217,196,166,0.5)]" aria-hidden="true" />
        <div className="absolute -top-px left-[38%] right-[38%] h-[2px] bg-bg" aria-hidden="true" />
        <div className="absolute -bottom-px left-[38%] right-[38%] h-[2px] bg-bg" aria-hidden="true" />
        <h2 className="relative m-0 mb-[30px] font-display text-[clamp(34px,4vw,52px)] font-semibold uppercase leading-[1.18] tracking-[0.04em] text-heading-light">
          {title}
        </h2>
        {subtitle && (
          <p className="relative mx-auto mb-8 max-w-[420px] text-[17px] leading-relaxed text-body">
            {subtitle}
          </p>
        )}
        <div className="relative inline-flex">
          <Button href={cta.href} tone="cream">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
