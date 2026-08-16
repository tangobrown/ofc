import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import EventCarousel from "@/components/EventCarousel";
import { EVENT_CAROUSEL } from "@/lib/carousel";
import OffsetSection from "@/components/OffsetSection";
import FleetRows from "@/components/FleetRows";
import FlappersCta from "@/components/FlappersCta";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { IMG } from "@/lib/images";
import { BOOKING_URL } from "@/lib/nav";

export const metadata: Metadata = pageMeta({
  title: "Corporate Cocktail Bar Hire, New York | The Old Fashioned",
  description:
    "A mobile cocktail bar for your office party, product launch or networking event — pro bartenders and signature cocktails across New York.",
  path: "/corporate",
  image: "/images/corporate-hero.jpg",
  imageAlt: "A cocktail being served at a corporate event",
});


export default function CorporatePage() {
  return (
    <PageShell>
      <Hero
        image="/images/corporate-hero.jpg"
        imageAlt="A cocktail being served at an event"
        title="Mobile Cocktail Bar for Corporate Events"
        subtitle="Book New York's finest mobile cocktail bar and make yours a classic!"
        subtitleItalic={false}
        cta={{ label: "Check Availability", href: BOOKING_URL }}
      />

      <EventCarousel items={EVENT_CAROUSEL} />

      <OffsetSection
        heading="A Vintage Impression"
        imageSrc={IMG.events.weddingCigars}
        imageAlt="Wedding cigars & cocktails"
        imageSide="left"
      >
        <p>
          Mix business and pleasure the Old Fashioned way. Hire one of our vintage mobile cocktail bars
          for your office party or networking event. Our sophisticated setup and tip-top bartenders add a
          measure of style, finesse and razzle-dazzle to any occasion.
        </p>
      </OffsetSection>

      <OffsetSection
        heading="The Speakeasy"
        eyebrow="…that finds you!"
        imageSrc={IMG.events.smokeyBar}
        imageAlt="Smokey mobile bar"
        imageSide="right"
      >
        <p>
          We bring the prohibition-era theatre to your venue – no secret knock needed. Whether
          it&apos;s a product launch, holiday party or client reception anywhere in the New York area,
          our{" "}
          <a href="/fleet" className="text-gold hover:text-cream">vintage mobile cocktail bars</a>{" "}
          scale to your headcount and brief, and the serve can be branded to fit the occasion.
        </p>
      </OffsetSection>

      <OffsetSection
        className="pb-24 md:pb-28"
        heading="Scotch or Soda?"
        imageSrc={IMG.events.barTender}
        imageAlt="Bartender at the bar"
        imageSide="left"
      >
        <p>
          We can offer top-notch alcohol free options where clearer heads are required, or break out the
          stronger stuff once ties have been loosened up. You don&apos;t get a second chance at a first
          impression, so why not make it with a Martini?
        </p>
      </OffsetSection>

      <FleetRows />

      <FlappersCta
        spacingTop={false}
        subtitle={
          <>
            Secure our services for your next event or{" "}
            <a href="/how-it-works" className="text-gold hover:text-cream">
              learn more about how it all works
            </a>
            .
          </>
        }
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "Corporate Event Cocktail Bar Hire",
            description:
              "Mobile cocktail bar hire for corporate events across New York — office parties, product launches and networking events with professional bartenders.",
            path: "/corporate",
            image: "/images/corporate-hero.jpg",
            serviceType: "Corporate event cocktail bar hire",
          }),
          breadcrumbSchema([{ name: "Corporate", path: "/corporate" }]),
        ]}
      />
    </PageShell>
  );
}
