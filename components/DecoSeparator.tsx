/** Gold line — diamond — gold line separator. */
export default function DecoSeparator({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-[120px] max-w-[22vw] bg-gradient-to-l from-gold to-transparent" />
      <span className="h-2 w-2 rotate-45 border border-gold" />
      <span className="h-px w-[120px] max-w-[22vw] bg-gradient-to-r from-gold to-transparent" />
    </div>
  );
}
