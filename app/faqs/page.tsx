import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import FaqAccordion from "@/components/FaqAccordion";
import DecoFrameCta from "@/components/DecoFrameCta";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { BOOKING_URL } from "@/lib/nav";

export const metadata: Metadata = pageMeta({
  title: "Cocktail Bar Hire FAQs | The Old Fashioned Co.",
  description:
    "Answers on booking our mobile cocktail bars: New York coverage area, setup time, space and power needs, insurance, alcohol and permits.",
  path: "/faqs",
});

const FAQ_ITEMS = [
  {
    q: "How many people can you cater for?",
    a: (
      <p className="mb-4">
        How many have you got? We offer a range of packages to suit any sized event.{" "}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Check them out here</a>.
      </p>
    ),
  },
  {
    q: "Do you travel outside of the city?",
    a: (
      <p className="mb-4">
        Yes of course! All of our packages include travel within a 30 mile radius of our base at
        Yonkers 10701, however we love bringing the best of New York City bar culture further afield.
        Simply enter your event address when building your package and the system will automatically
        calculate if there are any additional travel costs wherever you may be!
      </p>
    ),
  },
  {
    q: "How long does it take to set the bar up?",
    a: (
      <p className="mb-4">
        It takes us about 90 minutes to get our setup just right. This means we like to arrive at your
        event at least 2 hours before your guests arrive, so we can give them a proper Old Fashioned
        greeting. After your party, we&apos;ll pack up and be out of your hair within 60 minutes.
      </p>
    ),
  },
  {
    q: "How much space do you need?",
    a: (
      <>
        <p className="mb-4">
          Our flagship bar <strong>&quot;The Old Fashioned&quot;</strong> needs a footprint of 10&apos;
          x 8&apos; to be set up in all her glory. However, we have several smaller configurations and
          alternative bar setups to fit any space.
        </p>
        <p className="mb-4">
          <strong>Little Tommy Gun</strong>, our Piaggio Ape tap truck needs a footprint of 10&apos; x
          5&apos;. Access to the setup area can be no less than 60&quot; at any point or we will not fit
          through.
        </p>
      </>
    ),
  },
  {
    q: "Do you need access to electricity?",
    a: (
      <p className="mb-4">
        Yes, we require a source of electricity within 100ft of our bar to set up. If this isn&apos;t
        possible at your location, we can provide a generator for an extra charge.
      </p>
    ),
  },
  {
    q: "Do you provide lighting and signage?",
    a: (
      <p className="mb-4">
        You bet – all of our hire packages include the lighting and signage we use to create a unique,
        vintage atmosphere at your event.
      </p>
    ),
  },
  {
    q: "Can you provide a Certificate of Insurance?",
    a: (
      <p className="mb-4">
        Yes, we have very comprehensive insurance coverage and can provide COI&apos;s for General
        Liability, Liquor Liability and Workers Comp for any venue or entity that may require them.
      </p>
    ),
  },
  {
    q: "What is the difference between a Full Bar and a Limited Bar?",
    a: (
      <p className="mb-4">
        The Full Bar comes with 6 liquor options (vodka, gin, rum, tequila, bourbon, scotch) and the
        Limited Bar comes with 3 liquor options (vodka, tequila, bourbon). Both options come with beer,
        wine, mixers, and non-alcoholic beverages. However, you can make additions and substitutions to
        all of our packages.
      </p>
    ),
  },
  {
    q: "What is the difference between Sensible, Standard & Premium?",
    a: (
      <ul>
        <li>Sensible is our most economic offering – budget friendly liquor and wine choices</li>
        <li>
          Standard comes with more moderate liquor &amp; wine suggestions – well known, reputable
          brands
        </li>
        <li>Premium, as one would guess – top shelf, the bees knees, impress the neighbors kinda stuff</li>
      </ul>
    ),
  },
  {
    q: "Do you offer cash bars?",
    a: <p className="mb-4">No, we only offer hosted bars for private events.</p>,
  },
  {
    q: "How do we book The Old Fashioned Cocktail Co.?",
    a: (
      <>
        <ul className="mb-4">
          <li>First, follow the &quot;Get a Quote&quot; link below.</li>
          <li>Next, find the perfect event package.</li>
          <li>Last, submit a proposal and standby for an OFCC representative to reach out to you.</li>
        </ul>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Get a Quote Now →</a>
      </>
    ),
  },
  {
    q: "Can I buy my own alcohol?",
    a: (
      <>
        <p className="mb-4">In New York that will depend on where the event will take place:</p>
        <p className="mb-4">
          If you are hosting the event at your home or another PRIVATE RESIDENCE, then yes you can
          supply your own alcohol. However, our packages are designed as an all inclusive service where
          we take care of all of these menial tasks so you don&apos;t have to.
        </p>
        <p className="mb-4">
          If the event is being hosted at a VENUE, COMMERCIAL PROPERTY, or any other destination that is
          NOT A PRIVATE RESIDENCE a liquor license and permit is required to serve alcohol therefore you
          cannot, by law, provide your own alcohol. We will take care of all the red tape for you and
          obtain all necessary permits and provide the Certificates of Insurance (COI) that your venue
          WILL require.
        </p>
        <p className="mb-4">
          There are bar companies out there that will tell you otherwise, don&apos;t waste your time
          just to be let down right before your event when they get rejected by your venue! Check with
          your venue RIGHT AWAY!
        </p>
      </>
    ),
  },
  {
    q: "Do I need a permit for my event?",
    a: (
      <>
        <p className="mb-4">
          It depends on the venue. For an event at a PRIVATE RESIDENCE (your home or someone
          else&apos;s), no permit is required to serve alcohol.
        </p>
        <p className="mb-4">
          For an event at a VENUE, COMMERCIAL PROPERTY, or anywhere that is NOT a private residence, a
          liquor license and permit are required by law. The good news? We handle all of that red tape
          for you &ndash; securing the necessary permits and providing the Certificates of Insurance
          (COI) your venue will require.
        </p>
        <p className="mb-4">
          Some bar companies will tell you otherwise. Don&apos;t risk being turned away on the day &ndash;
          check your venue&apos;s requirements right away, and we&apos;ll take care of the rest.
        </p>
      </>
    ),
  },
];

// Plain-text mirror of FAQ_ITEMS for FAQPage structured data (rich results +
// AI answer engines). Keep answers in sync with the rendered copy above.
const FAQ_SCHEMA: { q: string; a: string }[] = [
  {
    q: "How many people can you cater for?",
    a: "We offer a range of packages to suit any sized event, from intimate gatherings to large parties. Build your package online for an instant quote.",
  },
  {
    q: "Do you travel outside of the city?",
    a: "Yes. Every package includes travel within a 30-mile radius of our base in Yonkers 10701, and we happily travel further afield – any additional travel cost is calculated automatically when you enter your event address.",
  },
  {
    q: "How long does it take to set the bar up?",
    a: "Setup takes about 90 minutes, so we arrive at least 2 hours before your guests. After the party we pack up and are out within 60 minutes.",
  },
  {
    q: "How much space do you need?",
    a: "Our flagship bar, The Old Fashioned, needs a 10' x 8' footprint. Little Tommy Gun, our Piaggio Ape tap truck, needs 10' x 5' and at least 60\" of access clearance. Smaller configurations are available for tight spaces.",
  },
  {
    q: "Do you need access to electricity?",
    a: "Yes, we need a power source within 100ft of the bar. If that isn't possible at your location, we can provide a generator for an extra charge.",
  },
  {
    q: "Do you provide lighting and signage?",
    a: "Yes. Every hire package includes the vintage lighting and signage we use to create our signature atmosphere.",
  },
  {
    q: "Can you provide a Certificate of Insurance?",
    a: "Yes. We carry comprehensive coverage and can provide Certificates of Insurance for General Liability, Liquor Liability and Workers Comp for any venue that requires them.",
  },
  {
    q: "What is the difference between a Full Bar and a Limited Bar?",
    a: "The Full Bar includes 6 liquors (vodka, gin, rum, tequila, bourbon, scotch); the Limited Bar includes 3 (vodka, tequila, bourbon). Both include beer, wine, mixers and non-alcoholic drinks, and can be customized.",
  },
  {
    q: "What is the difference between Sensible, Standard & Premium?",
    a: "Sensible uses budget-friendly liquor and wine; Standard steps up to well-known, reputable brands; Premium is top-shelf.",
  },
  {
    q: "Do you offer cash bars?",
    a: "No. We only offer hosted bars for private events, not cash bars.",
  },
  {
    q: "How do we book The Old Fashioned Cocktail Co.?",
    a: "Follow the 'Get a Quote' link, choose your event package, and submit a proposal – an OFCC representative will then reach out to finalise the details.",
  },
  {
    q: "Can I buy my own alcohol?",
    a: "At a private residence you may supply your own alcohol, though our packages are designed to handle everything for you. At a venue or commercial property the law requires a licensed provider, so you cannot supply your own – we obtain the permits and Certificates of Insurance your venue needs.",
  },
  {
    q: "Do I need a permit for my event?",
    a: "Only for events at a venue or commercial property, which require a liquor license and permit by law – and we handle all of that for you, including the Certificates of Insurance your venue needs. Events at a private residence don't require a permit.",
  },
];

export default function FaqsPage() {
  return (
    <PageShell>
      <Hero
        image="/images/cocktail-bar-outside.jpg"
        imageAlt="The mobile cocktail bar set up outdoors"
        title="Frequently Asked Questions"
        subtitle="Lookin' for answers? You've come to the right place…"
        cta={{ label: "Check Availability", href: BOOKING_URL }}
      />

      <section className="mx-auto max-w-faq px-5 md:px-6 py-20" id="content">
        <FaqAccordion items={FAQ_ITEMS} />
      </section>

      <DecoFrameCta
        title="Have You Got a Question?"
        cta={{ label: "Get In Touch", href: "/contact" }}
      />

      <JsonLd
        data={[
          faqPageSchema(FAQ_SCHEMA),
          breadcrumbSchema([{ name: "FAQs", path: "/faqs" }]),
        ]}
      />
    </PageShell>
  );
}
