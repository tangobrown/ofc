import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import OffsetSection from "@/components/OffsetSection";
import FlappersCta from "@/components/FlappersCta";
import Button from "@/components/Button";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Mobile cocktail bar hire for weddings, birthdays, anniversaries and corporate events across New York.",
};

export default function EventsPage() {
  return (
    <PageShell>
      <Hero
        imageAlt="Bartender pouring, smoke & whiskey bottle"
        title="Mobile Cocktail Bar for Events"
        subtitle="What's your occasion?"
        showArrow
      />

      <OffsetSection
        heading="Weddings"
        eyebrow="Tying the knot? Congratulations!"
        imageSrc={IMG.events.weddingCigars}
        imageAlt="Wedding cigars & cocktails"
        imageSide="left"
        cta={{ label: "More Information", href: "/weddings" }}
      >
        <p>
          For the most important celebration of your life, you need to be able to relax. So let us
          take the strain. We&apos;ll keep the bottles poppin&apos; and bubbles flowing whilst you
          savor the spotlight and drink in the moment.
        </p>
      </OffsetSection>

      <OffsetSection
        heading="Birthdays, Anniversaries"
        eyebrow="(or just because)!"
        imageSrc={IMG.events.birthday}
        imageAlt="Bar at a birthday event"
        imageSide="right"
        cta={{ label: "More Information", href: "/birthdays" }}
      >
        <p>
          Whatever your vintage, celebrate your birthday in timeless style. Or mark an anniversary
          with a party setup that&apos;s built to last. Maybe you just want to let your hair down for
          the heck of it – after all, who needs an excuse to have a good time? Either way, we&apos;d
          love to help you bring your event to life.
        </p>
      </OffsetSection>

      <OffsetSection
        heading="Corporate"
        eyebrow="Mixing Business and Pleasure"
        imageSrc={IMG.events.corporate}
        imageAlt="Corporate event guests"
        imageSide="left"
        cta={{ label: "More Information", href: "/corporate" }}
      >
        <p>
          Mix business and pleasure the Old Fashioned way by hiring us for your office party or
          networking event. We can offer top-notch alcohol free options where clearer heads are
          required, or break out the stronger stuff when the ties are loosened up. You don&apos;t get
          a second chance at a first impression, so why not make it with a Martini?
        </p>
      </OffsetSection>

      {/* Meet Our Fleet — tonal band */}
      <section className="bg-bg-alt px-10 pb-[90px] pt-20">
        <h2 className="m-0 mb-[50px] text-center font-display text-[clamp(31px,3.6vw,47px)] font-semibold uppercase tracking-[0.04em] text-gold">
          Meet Our Fleet
        </h2>
        <div className="mx-auto grid max-w-content grid-cols-1 gap-11 md:grid-cols-2">
          <div className="flex flex-col items-center gap-[26px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={IMG.fleet.oldFashionedMain}
                alt="The Old Fashioned bar"
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <Button href="/fleet#the-old-fashioned" size="sm">
              The Old Fashioned
            </Button>
          </div>
          <div className="flex flex-col items-center gap-[26px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={IMG.fleet.tommyGun2}
                alt="Little Tommy Gun cart"
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <Button href="/fleet#tommy-gun" size="sm">
              Little Tommy Gun
            </Button>
          </div>
        </div>
      </section>

      <FlappersCta />

    </PageShell>
  );
}
