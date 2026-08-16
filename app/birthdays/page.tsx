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
  title: "Birthday & Anniversary Cocktail Bar Hire | New York",
  description:
    "Celebrate your birthday or anniversary in roaring-twenties style with a vintage mobile cocktail bar and expert bartenders, hired across New York.",
  path: "/birthdays",
  image: "/images/birthdays-hero.jpg",
  imageAlt: "A cocktail being served at a birthday party",
});


export default function BirthdaysPage() {
  return (
    <PageShell>
      <Hero
        image="/images/birthdays-hero.jpg"
        imageAlt="A cocktail being served at an event"
        title="Make Your Party a Classic"
        subtitle="With New York's Finest Mobile Cocktail Bar"
        subtitleItalic={false}
        cta={{ label: "Check Availability", href: BOOKING_URL }}
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
        className="pb-24 md:pb-28"
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
          We bring the 1920s speakeasy to your party – and unlike the real thing, your guests
          won&apos;t have to hunt for the door. From milestone birthdays to anniversaries anywhere in
          the New York area, our{" "}
          <a href="/fleet" className="text-gold hover:text-cream">vintage mobile cocktail bars</a>{" "}
          flex to your guest count, your theme and your favourite drinks.
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
            name: "Birthday & Anniversary Cocktail Bar Hire",
            description:
              "Vintage mobile cocktail bar hire for birthdays and anniversaries across New York — roaring-twenties style with expert bartenders.",
            path: "/birthdays",
            image: "/images/birthdays-hero.jpg",
            serviceType: "Birthday and anniversary cocktail bar hire",
          }),
          breadcrumbSchema([{ name: "Birthdays & Anniversaries", path: "/birthdays" }]),
        ]}
      />
    </PageShell>
  );
}
