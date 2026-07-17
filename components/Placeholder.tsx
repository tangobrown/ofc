/**
 * Stand-in for the prototype's <image-slot> photos that have no hosted asset
 * yet. Renders a dark deco panel with the intended caption so the client knows
 * what photography goes here. Replace with <Image> once real assets arrive.
 */
export default function Placeholder({
  label,
  className = "",
  rounded = false,
}: {
  label: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#22201c] to-[#141210] ${
        rounded ? "rounded" : ""
      } ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span className="text-[18px] text-gold/50">◆</span>
        <span className="max-w-[80%] text-[11px] uppercase tracking-[0.18em] text-muted/70">
          {label}
        </span>
      </div>
    </div>
  );
}
