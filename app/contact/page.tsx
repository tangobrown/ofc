import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import DecoSeparator from "@/components/DecoSeparator";
import DubsadoForm from "@/components/DubsadoForm";
import JsonLd from "@/components/JsonLd";
import { abs, breadcrumbSchema, ORG_ID } from "@/lib/schema";
import { SOCIAL } from "@/lib/nav";

export const metadata: Metadata = pageMeta({
  title: "Contact | Mobile Cocktail Bar Hire New York",
  description:
    "Get in touch with The Old Fashioned Cocktail Co. for mobile cocktail bar hire in New York — request an instant quote for your event.",
  path: "/contact",
});

/**
 * Contact page — the nav and several CTAs link here. Uses the client's embedded
 * Dubsado enquiry form.
 */
export default function ContactPage() {
  return (
    <PageShell>
      <Hero
        image="/images/cocktail-bar-outside.jpg"
        imageAlt="The mobile cocktail bar set up outdoors"
        title="Get In Touch"
        subtitle="Let's make yours a classic."
        showArrow
      />

      <section id="content" className="mx-auto max-w-[720px] px-5 md:px-6 py-20 text-center">
        <p className="mx-auto mb-4 max-w-[560px] text-[18px] leading-[1.8] text-body">
          Ready to bring the razzle-dazzle to your event? Drop us a line with your date, location and
          the kind of party you have in mind, and we&apos;ll be in touch with an instant quote.
        </p>
        <DecoSeparator className="my-10" />

        <div className="mx-auto max-w-[600px] overflow-hidden bg-white px-6 pb-6 pt-0 text-left md:px-8 md:pb-8">
          <DubsadoForm />
        </div>

        <DecoSeparator className="my-10" />

        <div className="mx-auto max-w-[600px] text-[16px] leading-[1.8] text-body-dim">
          <h2 className="mb-3 font-display text-[20px] font-semibold uppercase tracking-[0.04em] text-gold">
            The Old Fashioned Cocktail Co.
          </h2>
          <p className="mb-2">Mobile cocktail bar hire &middot; Based in Yonkers, NY 10701</p>
          <p className="mb-4">
            Serving weddings, birthdays, anniversaries and corporate events across New York City and
            within roughly 30 miles of Yonkers. Not sure if we cover you?{" "}
            <a href="/faqs" className="text-gold hover:text-cream">Check our FAQs</a> or{" "}
            <a href="/how-it-works" className="text-gold hover:text-cream">see how it works</a>.
          </p>
          <p>
            Follow along on{" "}
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream">
              Instagram
            </a>{" "}
            and{" "}
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream">
              Facebook
            </a>
            .
          </p>
        </div>
      </section>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact The Old Fashioned Cocktail Co.",
            url: abs("/contact"),
            about: { "@id": ORG_ID },
          },
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
        ]}
      />
    </PageShell>
  );
}
