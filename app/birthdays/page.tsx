import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import EventCarousel from "@/components/EventCarousel";
import { EVENT_CAROUSEL } from "@/lib/carousel";
import OffsetSection from "@/components/OffsetSection";
import FleetRows from "@/components/FleetRows";
import FlappersCta from "@/components/FlappersCta";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Birthdays & Anniversaries",
  description:
    "Make your party a classic with New York's finest mobile cocktail bar for birthdays and anniversaries.",
};


export default function BirthdaysPage() {
  return (
    <PageShell>
      <Hero
        imageAlt="Bartender pouring, smoke & whiskey bottle"
        title={
          <>
            Make Your Party a
            <br />
            Classic
          </>
        }
        subtitle="With New York's Finest Mobile Cocktail Bar"
        subtitleItalic={false}
        cta={{ label: "Check Availability", href: "#" }}
      />

      <EventCarousel items={EVENT_CAROUSEL} />

      <OffsetSection
        heading="Ready to Let Loose?"
        imageSrc={IMG.events.weddingCigars}
        imageAlt="Wedding cigars & cocktails"
        imageSide="left"
      >
        <p>
          So far, the return of the 20&apos;s hasn&apos;t lived up to its billing. There&apos;s been too
          much plague and not enough partying. It&apos;s time to reconnect with loved ones, share a drink
          and cut a rug. Just arrange a get-together, hire one of our slick mobile cocktail bars, and let
          the good times roll!
        </p>
      </OffsetSection>

      <OffsetSection
        heading={
          <>
            Birthdays,
            <br />
            Anniversaries
          </>
        }
        eyebrow="(or just because)!"
        imageSrc={IMG.events.smokeyBar}
        imageAlt="Smokey mobile bar"
        imageSide="right"
      >
        <p>
          Whatever your vintage, celebrate your birthday in timeless style. Or mark an anniversary with a
          party setup that&apos;s built to last. Maybe you just want to let your hair down for the heck of
          it – after all, who needs an excuse to have a good time? Either way, we&apos;d love to help you
          bring your event to life.
        </p>
      </OffsetSection>

      <OffsetSection
        heading={
          <>
            The Speakeasy That
            <br />
            Finds You
          </>
        }
        imageSrc={IMG.events.barTender}
        imageAlt="Bartender at the bar"
        imageSide="left"
      >
        <p>
          We&apos;ll serve up a storm in true prohibition-era style. But unlike a traditional speakeasy,
          your guests won&apos;t need to come looking for us – we&apos;ll find you! Our nifty range of
          mobile cocktail bars can be tailored to parties of all sizes and themes in the New York area.
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
