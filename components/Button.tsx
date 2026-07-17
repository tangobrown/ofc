import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /** "gold" = gold border (default). "cream" = light border used over hero images. */
  tone?: "gold" | "cream";
  size?: "sm" | "md";
  className?: string;
};

/**
 * Outline CTA button/link with a trailing arrow. Fills gold on hover
 * (text -> bg color). Used site-wide.
 */
export default function Button({
  href,
  children,
  tone = "gold",
  size = "md",
  className = "",
}: ButtonProps) {
  const sizeCls =
    size === "sm"
      ? "px-[22px] py-[11px] text-[11px]"
      : "px-[28px] py-[13px] text-[12px]";
  const borderCls =
    tone === "cream" ? "border-[rgba(242,236,223,0.75)]" : "border-[rgba(192,157,108,0.85)]";

  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const cls = `btn-outline ${sizeCls} ${borderCls} ${className}`;
  const content = (
    <>
      {children}
      <span aria-hidden="true">→</span>
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {content}
    </a>
  );
}
