import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import EventCarousel from "@/components/EventCarousel";
import { EVENT_CAROUSEL } from "@/lib/carousel";
import OffsetSection from "@/components/OffsetSection";
import FleetRows from "@/components/FleetRows";
import FlappersCta from "@/components/FlappersCta";
import { IMG } from "@/lib/images";
import { BOOKING_URL } from "@/lib/nav";

export const metadata: Metadata = pageMeta({
  title: "Corporate Event Cocktail Bar Hire",
  description:
    "Mix business and pleasure with a mobile cocktail bar for your office party, product launch or networking event. Pro bartenders and signature cocktails across New York.",
  path: "/corporate",
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
          We&apos;ll serve up a storm in true prohibition-era style. But unlike a traditional speakeasy,
          your guests won&apos;t need to come looking for us – we&apos;ll find you! Our nifty range of
          mobile cocktail bars can be tailored to events of all sizes and themes in the New York area.
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

    </PageShell>
  );
}
