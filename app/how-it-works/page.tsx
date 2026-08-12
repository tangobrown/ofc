import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import FlappersCta from "@/components/FlappersCta";
import { BOOKING_URL } from "@/lib/nav";

export const metadata: Metadata = pageMeta({
  title: "How It Works",
  description:
    "Build your party package in seconds: get an instant quote, customize your cocktails and staffing, then submit your proposal. Mobile cocktail bar hire made easy.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <PageShell>
      <Hero
        image="/images/cocktail-bar-outside.jpg"
        imageAlt="The mobile cocktail bar set up outdoors"
        title="Build Your Package"
        subtitle="Build your party package in seconds"
        subtitleItalic={false}
        cta={{ label: "Check Availability", href: BOOKING_URL }}
      />

      {/* Steps */}
      <section className="mx-auto flex max-w-content flex-col gap-[110px] px-5 md:px-10 pb-[60px] pt-[100px]">
        {/* Step One */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr] md:gap-[50px]">
          <div className="md:w-[230px]">
            <div className="font-display text-[80px] font-light leading-none text-gold">1</div>
            <div className="mt-2 font-display text-[26px] font-semibold uppercase tracking-[0.06em] text-gold">
              Step One:
            </div>
          </div>
          <div>
            <h3 className="m-0 mb-[18px] mt-[6px] font-display text-[24px] font-semibold uppercase tracking-[0.04em] text-gold">
              Get a Quote:
            </h3>
            <div className="space-y-4 text-[16.5px] leading-[1.75] text-body">
              <p>They say you can&apos;t put a price on a good time – but for us, it&apos;s a cinch!</p>
              <p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-cream"
                >
                  Click here
                </a>{" "}
                to swing by our bespoke, interactive package building platform. Viewing on a laptop or
                desktop makes it a piece of cake to navigate and use.
              </p>
              <p>
                Next, just enter your event details and you&apos;ll be offered a range of package
                options to build from. Every single one of &apos;em has been carefully put together to
                cover all aspects of your bar experience.
              </p>
              <p>
                Not sure which package is best for you? Jump on over to our{" "}
                <a href="/faqs" className="text-gold hover:text-cream">
                  FAQ page
                </a>{" "}
                and it should enlighten ya.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-0 border-t border-gold/15" />

        {/* Step Two */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr] md:gap-[50px]">
          <div className="md:w-[230px]">
            <div className="font-display text-[80px] font-light leading-none text-gold">2</div>
            <div className="mt-2 font-display text-[26px] font-semibold uppercase tracking-[0.06em] text-gold">
              Step Two:
            </div>
          </div>
          <div>
            <h3 className="m-0 mb-[18px] mt-[6px] font-display text-[24px] font-semibold uppercase tracking-[0.04em] text-gold">
              Customize:
            </h3>
            <div className="space-y-4 text-[16.5px] leading-[1.75] text-body">
              <p>Ok, the package is in the bag – now make it yours…</p>
              <p>
                Each base package is a complete, all-inclusive offering designed to take the heavy
                lifting out of event planning. We&apos;ll automatically figure out your recommended
                staffing and alcohol needs to give you an instant, accurate proposal. But here&apos;s
                the really fun part:
              </p>
              <p>
                Everything within the package is fully customizable – the first tab you see once you
                select a package option will be &apos;Bar Package&apos; – think of this as a
                foundation to build upon.
              </p>
              <p>
                Browse through our category menus to add any signature drinks you desire from our
                extensive menu of classic &amp; specialty cocktails, upgrade your liquor choices to
                suit your guests&apos; tastes, level up your ice game &amp; upgrade your
                glassware/tossware.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-0 border-t border-gold/15" />

        {/* Step Three */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr] md:gap-[50px]">
          <div className="md:w-[230px]">
            <div className="font-display text-[80px] font-light leading-none text-gold">3</div>
            <div className="mt-2 font-display text-[26px] font-semibold uppercase tracking-[0.06em] text-gold">
              Step Three:
            </div>
          </div>
          <div>
            <h3 className="m-0 mb-[18px] mt-[6px] font-display text-[24px] font-semibold uppercase tracking-[0.04em] text-gold">
              Confirm Staffing:
            </h3>
            <div className="space-y-4 text-[16.5px] leading-[1.75] text-body">
              <p>
                We&apos;ll work out the number of staff needed to ensure your event runs smoother than
                a horse on skates. But please go ahead and add more if you&apos;d like support on an
                additional satellite bar or any other hospitality help.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-0 border-t border-gold/15" />

        {/* Step Four */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr] md:gap-[50px]">
          <div className="md:w-[230px]">
            <div className="font-display text-[80px] font-light leading-none text-gold">4</div>
            <div className="mt-2 font-display text-[26px] font-semibold uppercase tracking-[0.06em] text-gold">
              Step Four:
            </div>
          </div>
          <div>
            <h3 className="m-0 mb-[18px] mt-[6px] font-display text-[24px] font-semibold uppercase tracking-[0.04em] text-gold">
              Submit Proposal:
            </h3>
            <div className="space-y-4 text-[16.5px] leading-[1.75] text-body">
              <p>
                Once you&apos;re happy with your choices click &apos;Submit Proposal&apos; and one of
                our event smartypants people will get back to you pronto to arrange a quick
                consultation. We&apos;ll review and fine-tune your package with you and answer any
                questions you might have. After that, it&apos;s over to us!
              </p>
              <p>
                Don&apos;t worry if you are unsure of any aspect of your package – we can perfect and
                tweak it together on your consultation. Have a little fun with your initial setup –
                it&apos;s a party after all!
              </p>
            </div>
          </div>
        </div>
      </section>

      <FlappersCta subtitle="Check availability for your event now" />

    </PageShell>
  );
}
