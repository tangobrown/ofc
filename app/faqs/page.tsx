import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import FaqAccordion from "@/components/FaqAccordion";
import DecoFrameCta from "@/components/DecoFrameCta";
import InstagramGrid from "@/components/InstagramGrid";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about booking The Old Fashioned Cocktail Co. mobile cocktail bars.",
};

const FAQ_ITEMS = [
  {
    q: "How many people can you cater for?",
    a: (
      <p className="mb-4">
        How many have you got? We offer a range of packages to suit any sized event.{" "}
        <a href="#">Check them out here</a>.
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
        <a href="#">Get a Quote Now →</a>
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
          As in the question above; in New York that will depend on where the event will take place:
        </p>
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
];

export default function FaqsPage() {
  return (
    <PageShell>
      <Hero
        imageAlt="1920s flappers with cocktails"
        title="Frequently Asked Questions"
        subtitle="Lookin' for answers? You've come to the right place…"
        showArrow
      />

      <section className="mx-auto max-w-faq px-6 py-20" id="content">
        <FaqAccordion items={FAQ_ITEMS} />
      </section>

      <DecoFrameCta
        title="Have You Got a Question?"
        cta={{ label: "Get In Touch", href: "/contact" }}
      />

      <InstagramGrid />
    </PageShell>
  );
}
