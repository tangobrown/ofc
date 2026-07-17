"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Placeholder from "./Placeholder";

export type CarouselItem = { src?: string; alt: string };

const GAP = 20; // px between items and as side padding

function usePerView() {
  const [perView, setPerView] = useState(4);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 4);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return perView;
}

/**
 * Full-width photo carousel: shows N items at once (4 / 2 / 1 by breakpoint),
 * gold circular ‹ › arrows step by one, clamped to count − perView. Supports
 * keyboard (arrow keys) and touch swipe.
 */
export default function EventCarousel({ items }: { items: CarouselItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const maxIndex = Math.max(0, items.length - perView);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth;
    setItemWidth((w - (perView - 1) * GAP) / perView);
  }, [perView]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const step = (dir: -1 | 1) =>
    setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)));

  const offset = index * (itemWidth + GAP);

  return (
    <section
      className="relative select-none px-5 py-16"
      aria-roledescription="carousel"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "ArrowRight") step(1);
      }}
      tabIndex={0}
    >
      <div className="mx-auto max-w-[1400px]">
        <div
          ref={trackRef}
          className="overflow-hidden"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <div
            className="flex transition-transform duration-[550ms] ease-carousel"
            style={{ gap: `${GAP}px`, transform: `translateX(-${offset}px)` }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="relative h-[300px] shrink-0 overflow-hidden"
                style={{ width: itemWidth ? `${itemWidth}px` : `${100 / perView}%` }}
              >
                {item.src ? (
                  <Image src={item.src} alt={item.alt} fill sizes="25vw" className="object-cover" />
                ) : (
                  <Placeholder label={item.alt} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => step(-1)}
        disabled={index === 0}
        className="absolute left-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-bg disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gold"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => step(1)}
        disabled={index === maxIndex}
        className="absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-bg disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gold"
      >
        ›
      </button>
    </section>
  );
}
