import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import VideoHero from "@/components/VideoHero";
import Button from "@/components/Button";
import FlappersCta from "@/components/FlappersCta";
import { IMG } from "@/lib/images";
import { FLEET } from "@/lib/fleet";

const EVENTS = [
  {
    title: "Weddings",
    href: "/weddings",
    image: IMG.events.weddingCigars,
    alt: "Cocktails and cigars at a wedding",
    text: "Keep the bubbles poppin' and the good times flowin' while you savor the spotlight on your big day.",
  },
  {
    title: "Corporate",
    href: "/corporate",
    image: IMG.events.corporate,
    alt: "Guests at a corporate event",
    text: "Mix business and pleasure the Old Fashioned way at your next office party or networking do.",
  },
  {
    title: "Birthdays & Anniversaries",
    href: "/birthdays",
    image: IMG.events.birthday,
    alt: "A mobile cocktail bar at a birthday party",
    text: "Whatever your vintage, celebrate in timeless, roaring-twenties style — no excuse required.",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <VideoHero src={IMG.home.smokeVideo} />

      {/* Speakeasy */}
      <section className="mx-auto grid max-w-content grid-cols-1 gap-10 px-10 pb-[90px] pt-[120px] md:grid-cols-[1fr_1.35fr] md:gap-[60px]">
        <h2 className="m-0 font-display text-[clamp(31px,3.4vw,45px)] font-semibold uppercase leading-[1.18] tracking-[0.04em] text-gold">
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
      <section className="mx-auto max-w-content px-10 pb-20 pt-5">
        <h2 className="m-0 mb-[46px] font-display text-[clamp(31px,3.8vw,49px)] font-semibold uppercase tracking-[0.03em] text-gold">
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
              <h3 className="m-0 mb-[14px] font-display text-[22px] font-semibold uppercase tracking-[0.03em] text-gold">
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

      {/* What's Your Event? */}
      <section className="mx-auto max-w-content px-10 pb-24 pt-5">
        <h2 className="m-0 mb-[46px] font-display text-[clamp(31px,3.8vw,49px)] font-semibold uppercase tracking-[0.03em] text-gold">
          What&apos;s Your Event?
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {EVENTS.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="group relative block aspect-[4/3] overflow-hidden"
            >
              <Image
                src={e.image}
                alt={e.alt}
                fill
                sizes="(min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="m-0 font-display text-[clamp(22px,2.4vw,30px)] font-semibold uppercase tracking-[0.03em] text-heading-light transition-colors group-hover:text-gold">
                  {e.title}
                </h3>
                <p className="mt-2 max-w-[46ch] text-[15px] leading-[1.6] text-body">{e.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FlappersCta />
    </PageShell>
  );
}
