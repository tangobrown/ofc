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
  title: "Wedding Cocktail Bar Hire",
  description:
    "Wow your wedding guests with a vintage mobile cocktail bar. The Old Fashioned Cocktail Co. serves handcrafted cocktails in prohibition-era style across New York.",
  path: "/weddings",
});


export default function WeddingsPage() {
  return (
    <PageShell>
      <Hero
        image="/images/weddings-hero.jpg"
        imageAlt="Cocktail being served at a wedding"
        title="Mobile Cocktail Bar for Weddings"
        subtitle="Book New York's best mobile cocktail bar and wow your wedding guests"
        subtitleItalic={false}
        cta={{ label: "Check Availability", href: BOOKING_URL }}
      />

      <EventCarousel items={EVENT_CAROUSEL} />

      <OffsetSection
        heading="Gettin' Hitched?"
        eyebrow="Congratulations!"
        imageSrc={IMG.events.weddingCigars}
        imageAlt="Wedding cigars & cocktails"
        imageSide="left"
      >
        <p>
          Naturally, you&apos;ll want to savor every moment and remember your special day forever.
          There&apos;s no better excuse for a blow-out party…so how about it? Hire one of our vintage
          mobile cocktail bars for your wedding to provide a little high-end social lubrication for you
          and your guests.
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
          mobile cocktail bars can be tailored to weddings of all sizes and themes in the New York area.
        </p>
      </OffsetSection>

      <OffsetSection
        className="pb-24 md:pb-28"
        heading="You Swap Rings"
        eyebrow="…we make gin slings!"
        imageSrc={IMG.events.barTender}
        imageAlt="Bartender at the bar"
        imageSide="left"
      >
        <p>
          For the most important celebration of your life, you need to be able to relax. So let us take
          the strain. Your guests will be in expert hands from start to finish. We&apos;ll keep the bottles
          poppin&apos; and bubbles flowin&apos; whilst you revel in the spotlight and drink in the moment –
          with your own signature wedding cocktails in hand, of course.
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
