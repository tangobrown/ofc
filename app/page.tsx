import Image from "next/image";
import PageShell from "@/components/PageShell";
import VideoHero from "@/components/VideoHero";
import Button from "@/components/Button";
import FlappersCta from "@/components/FlappersCta";
import Placeholder from "@/components/Placeholder";
import { IMG } from "@/lib/images";
import { FLEET } from "@/lib/fleet";

const GALLERY = [
  { label: "Bartender at the oak bar", w: 380 },
  { label: "Tommy Gun cart, floral", w: 290 },
  { label: "Close-up of cocktail", w: 250 },
  { label: "Cocktail making in progress", w: 340 },
  { label: "Ingredients for cocktails", w: 300 },
];

export default function HomePage() {
  return (
    <PageShell>
      <VideoHero src={IMG.home.smokeVideo} />

      {/* Speakeasy */}
      <section className="mx-auto grid max-w-prose grid-cols-1 gap-10 px-10 pb-[90px] pt-[120px] md:grid-cols-[1fr_1.35fr] md:gap-[60px]">
        <h2 className="m-0 font-display text-[clamp(28px,3vw,40px)] font-semibold uppercase leading-[1.08] tracking-[0.04em] text-gold">
          The Speakeasy
          <br />
          That Finds You
        </h2>
        <div>
          <p className="mb-5 text-[18px] leading-[1.75] text-body">
            We&apos;ll bring all the theater and razzle-dazzle of a big city blowout right to your party,
            wedding or corporate event. Our slick, professional bartenders will show up to your chosen
            location, assemble an authentic mobile cocktail bar and shake a whole bunch of hotsy-totsy
            cocktails guaranteed to take you and your guests right back to the good times.
          </p>
          <p className="mb-9 text-[18px] leading-[1.75] text-body">
            Let&apos;s go ahead and make yours a classic…
          </p>
          <Button href="/how-it-works" size="sm">
            How It Works
          </Button>
        </div>
      </section>

      {/* Meet the Fleet */}
      <section className="mx-auto max-w-prose px-10 pb-20 pt-5">
        <h2 className="m-0 mb-[46px] font-display text-[clamp(28px,3.4vw,44px)] font-semibold uppercase tracking-[0.03em] text-gold">
          Meet the Fleet…
        </h2>
        <div className="grid grid-cols-1 gap-11 md:grid-cols-2">
          {FLEET.map((m) => (
            <div key={m.anchor}>
              <div className="relative mb-6 aspect-[3/2] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="m-0 mb-[14px] font-display text-[20px] font-semibold uppercase tracking-[0.03em] text-gold">
                {m.name}
              </h3>
              <p className="mb-[22px] text-[16px] leading-[1.7] text-body-dim">{m.description}</p>
              <Button href={m.anchor} size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-[90px] pt-5">
        <div className="flex gap-2 overflow-x-auto px-10 pb-[22px]">
          {GALLERY.map((g) => (
            <div key={g.label} className="h-[290px] shrink-0" style={{ width: g.w }}>
              <Placeholder label={g.label} />
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-prose px-10">
          <div className="h-px w-[220px] bg-gradient-to-r from-gold to-transparent" />
        </div>
      </section>

      <FlappersCta />
    </PageShell>
  );
}
