"use client";

import { useEffect, useRef } from "react";
import Button from "./Button";
import { BOOKING_URL } from "@/lib/nav";

/**
 * Home-only full-screen video hero. The smoke .mp4 has audio, so we force-mute
 * via ref after mount (React/Next won't reliably apply the `muted` attribute).
 */
export default function VideoHero({ src, poster }: { src?: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.volume = 0;
      v.play?.().catch(() => {});
    }
  }, []);

  return (
    <section data-hero className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        {src ? <source src={src} type="video/mp4" /> : null}
      </video>
      <div className="absolute inset-0 bg-home-scrim" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="m-0 max-w-[900px] font-display text-[clamp(38px,5.8vw,80px)] font-semibold uppercase leading-[1.14] tracking-[0.05em] text-gold [text-shadow:0_2px_18px_rgba(0,0,0,.6)]">
          Smokin&apos; Drinks With a Measure of Style
        </h1>
        <p className="mb-9 mt-[22px] text-[clamp(16px,1.5vw,21px)] tracking-[0.02em] text-[#e9e3d7]">
          Mobile Cocktail Bar Hire in New York
        </p>
        <Button href={BOOKING_URL} tone="cream">
          Book Now
        </Button>
      </div>
    </section>
  );
}
