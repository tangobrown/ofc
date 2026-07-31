import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import { BOOKING_URL } from "@/lib/nav";
import OffsetSection from "@/components/OffsetSection";
import FlappersCta from "@/components/FlappersCta";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Hard Liquor. Easy Parties. The story behind The Old Fashioned Cocktail Co.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <Hero
        image="/images/about-hero.jpg"
        imageAlt="Dwayne, founder of The Old Fashioned Cocktail Co."
        title="About Us"
        subtitle="Hard Liquor. Easy Parties."
        cta={{ label: "Check Availability", href: BOOKING_URL }}
      />

      {/* What Do We Do? — heading left / text right, no photo */}
      <section className="mx-auto grid max-w-content grid-cols-1 items-start gap-16 px-10 py-16 md:grid-cols-[1fr_1.35fr]">
        <h2 className="m-0 font-display text-[clamp(31px,3.4vw,45px)] font-semibold uppercase leading-[1.18] tracking-[0.04em] text-gold">
          What Do We Do?
        </h2>
        <div>
          <p className="mb-5 text-[17px] leading-[1.75] text-body">
            For years, if you wanted to party in New York you had to know where to look. Or at least
            who to ask. Whispered passwords led to secret doorways, hidden back rooms and basements
            full of smoke and bootlegged booze.
          </p>
          <p className="mb-5 text-[17px] leading-[1.75] text-body">
            And sure, these joints were fun – but really, who needs the hassle? Wouldn&apos;t it be
            better if the party came to you?
          </p>
          <p className="mb-5 font-display text-[16px] font-semibold uppercase tracking-[0.03em] text-gold">
            That&apos;s where we come in.
          </p>
          <p className="text-[17px] leading-[1.75] text-body">
            Inspired by classic cocktails and lavish prohibition-era parties, we flip the speakeasy
            concept on its head and bring the best of New York bar culture to your event. Beyond
            mixing spiffy drinks, we offer all the hallmarks of an authentic city joint, minus four
            walls and a zip code. Expect a warm reception, good humor and just a dash of showmanship.
            You and your guests will feel like you&apos;ve been regulars at our place for years.
          </p>
        </div>
      </section>

      {/* Our Goal — text left / photo right */}
      <OffsetSection
        heading="Our Goal"
        imageSrc={IMG.fleet.oldFashioned1}
        imageAlt="Bartender behind the bar"
        imageSide="right"
      >
        <p>
          Our goal is to create experiences people will savor in the moment and remember forever. In
          other words, we want to make sure everybody has a stinkin&apos; good time! As the host,
          that means you in particular. So whatever else you might regret the morning after your
          party, we guarantee it won&apos;t be hiring us.
        </p>
      </OffsetSection>

      {/* Who's the Boss? — photo left / text right */}
      <OffsetSection
        heading="Who's the Boss?"
        imageSrc={IMG.events.dwayne}
        imageAlt="Dwayne, founder"
        imageSide="left"
      >
        <p>
          Our founder, Dwayne, was drawn to New York from his native Ireland (via Wales) like a
          bartending moth to a flame. The Old Fashioned Cocktail Company is a product of his
          considerable industry expertise, passion and a natural inclination toward lifting spirits.
        </p>
      </OffsetSection>

      <FlappersCta subtitle="Check availability for your event now" />

    </PageShell>
  );
}
