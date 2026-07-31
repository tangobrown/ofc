"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/nav";
import { ArrowIcon } from "./icons";

/**
 * Full-width gold "Instant Quote" strip pinned to the bottom of the viewport.
 * Slides up once the hero (marked with data-hero) has scrolled out of view.
 * Mobile only — desktop already has the fixed top-right Instant Quote button.
 * Hidden on the contact page.
 */
export default function QuoteStrip() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") {
      setVisible(false);
      return;
    }
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  if (pathname === "/contact") return null;

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 bg-gold py-[18px] text-[15px] uppercase tracking-btn text-bg transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      Instant Quote
      <ArrowIcon className="h-4 w-4" />
    </a>
  );
}
