import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import InstagramGrid from "@/components/InstagramGrid";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Fleet",
  description: "Meet our fleet of vintage mobile cocktail bars.",
};

type Profile = {
  id: string;
  heading: string;
  photos: { src: string; alt: string }[];
  capacity: string;
  description: React.ReactNode;
  quote: string;
  attribution: string;
};

const PROFILES: Profile[] = [
  {
    id: "the-old-fashioned",
    heading: "Meet 'The Old Fashioned'",
    photos: [
      { src: IMG.fleet.oldFashionedMain, alt: "The Old Fashioned bar" },
      { src: IMG.fleet.oldFashioned2, alt: "The Old Fashioned detail" },
    ],
    capacity: "Bartender Capacity: 1-3",
    description: (
      <p>
        Our flagship bar is a classy dame, we&apos;re sure you&apos;ll agree. Lovingly crafted from
        white oak, vintage brass accents and genuine leather, she&apos;d be right at home in the VIP
        section of any bar or club in the land. So why not make her the first name on your guest
        list? The Old Fashioned is perfect for medium-to-large events, and she&apos;s equally at home
        indoors or outside: wherever the good times are rollin&apos;!
      </p>
    ),
    quote:
      "\"As our very first bar and flagship of the fleet, we knew The Old Fashioned had to be special. We wanted to create a statement bar that would really knock the socks off your guests. That's why we invested such a great deal of care and attention into every aspect of her creation, down to the very finest detail. Fortunately we were able to draw on a wealth of experience developing bar interiors for some of New York's finest establishments to inform the build.\"",
    attribution: "– Dwayne, TOFCC Founder",
  },
  {
    id: "tommy-gun",
    heading: "Say Hello to Little Tommy Gun",
    photos: [
      { src: IMG.fleet.tommyGunMain, alt: "Little Tommy Gun cart" },
      { src: IMG.fleet.tommyGun1, alt: "Little Tommy Gun detail" },
    ],
    capacity: "Bartender Capacity: 1-2",
    description: (
      <p>
        Don&apos;t let his size fool you – there&apos;s always plenty in the barrel when Little Tommy
        Gun is around. We&apos;re talkin&apos; beers, wines and even cocktails on draft! A
        meticulously converted Piaggio Ape truck, Little Tommy Gun doesn&apos;t throw lead, but
        he&apos;s fully loaded with all kinda shots. LTG is equally at home alongside his big sister,
        The Old Fashioned, at larger events, or handling smaller/indoor parties on his own.
      </p>
    ),
    quote:
      "\"The idea behind Little Tommy Gun was to create a bar that would perfectly complement The Old Fashioned, but also be able to stand on his own three wheels. So Tommy's a bit of a contrast in terms of his color scheme and service functionality – draft drinks are his speciality. But he can still serve up cocktails with the best of them, pre-mixed by our own fair hands.\"",
    attribution: "– Dwayne, TOFCC Founder",
  },
];

export default function FleetPage() {
  return (
    <PageShell>
      <Hero
        imageAlt="Oak bar & vintage car in garage"
        title="Meet the Fleet"
        subtitle="Meet our fleet mobile cocktail bars"
        showArrow
      />

      {PROFILES.map((p) => (
        <section
          key={p.id}
          id={p.id}
          className="mx-auto grid max-w-content scroll-mt-24 grid-cols-1 items-start gap-12 px-10 py-16 md:grid-cols-[1fr_1.05fr] md:gap-16"
        >
          <div className="flex flex-col gap-[26px]">
            {p.photos.map((photo) => (
              <div key={photo.src} className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div>
            <h2 className="m-0 mb-5 font-display text-[clamp(28px,3vw,40px)] font-semibold uppercase leading-[1.08] tracking-[0.03em] text-gold">
              {p.heading}
            </h2>
            <div className="rule-gold mb-[22px]" />
            <p className="mb-5 font-display text-[14px] font-semibold uppercase tracking-[0.04em] text-text-hi">
              {p.capacity}
            </p>
            <div className="mb-6 text-[16.5px] leading-[1.75] text-body">{p.description}</div>
            <p className="mb-[18px] border-l-2 border-gold pl-5 text-[16px] italic leading-[1.7] text-body-dim">
              {p.quote}
            </p>
            <p className="mb-[30px] text-[13px] uppercase tracking-[0.05em] text-gold">
              {p.attribution}
            </p>
            <Button href="#" size="sm">
              Book Now
            </Button>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-10 pb-[100px] pt-[70px] text-center">
        <h2 className="m-0 mb-4 font-display text-[clamp(24px,2.6vw,34px)] font-semibold uppercase tracking-[0.03em] text-heading-light">
          Book the &apos;Old Fashioned&apos; Now
        </h2>
        <p className="mb-[30px] text-[16px] text-body">
          Check availability for your event now or{" "}
          <a href="/how-it-works" className="text-gold hover:text-cream">
            learn more about how it all works
          </a>
          .
        </p>
        <Button href="#" tone="cream">
          Check Availability
        </Button>
      </section>

      <InstagramGrid />
    </PageShell>
  );
}
