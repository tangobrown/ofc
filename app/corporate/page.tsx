import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import EventCarousel from "@/components/EventCarousel";
import OffsetSection from "@/components/OffsetSection";
import FleetRows from "@/components/FleetRows";
import FlappersCta from "@/components/FlappersCta";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Corporate Events",
  description:
    "Book New York's finest mobile cocktail bar and make yours a classic at your next corporate event.",
};

const CAROUSEL = [
  { alt: "Bartender & cocktails" },
  { alt: "Tommy Gun cart, floral" },
  { alt: "Oak bar interior" },
  { alt: "Close-up cocktail" },
  { alt: "Ingredients for cocktails" },
  { alt: "Cocktail in progress" },
];

export default function CorporatePage() {
  return (
    <PageShell>
      <Hero
        imageAlt="Bartender pouring, smoke & whiskey bottle"
        title={
          <>
            Mobile Cocktail Bar for
            <br />
            Corporate Events
          </>
        }
        subtitle="Book New York's finest mobile cocktail bar and make yours a classic!"
        subtitleItalic={false}
        cta={{ label: "Check Availability", href: "#" }}
      />

      <EventCarousel items={CAROUSEL} />

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
