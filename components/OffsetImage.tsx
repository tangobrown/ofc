import Image from "next/image";

/**
 * Photo with a cream "offset frame" — a #d9c4a6 block at 16% opacity offset
 * -20px top/left behind the image. Used across event / about pages.
 */
export default function OffsetImage({
  src,
  alt,
  aspect = "4/3",
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <div className="relative w-full" style={{ aspectRatio: aspect }}>
      <div className="absolute -left-5 -top-5 h-full w-full bg-cream opacity-[0.16]" />
      <div className="relative h-full w-full overflow-hidden">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}
