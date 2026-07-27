import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import DecoSeparator from "@/components/DecoSeparator";
import DubsadoForm from "@/components/DubsadoForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Old Fashioned Cocktail Co. for mobile cocktail bar hire in New York.",
};

/**
 * Contact page — the nav and several CTAs link here. Uses the client's embedded
 * Dubsado enquiry form.
 */
export default function ContactPage() {
  return (
    <PageShell>
      <Hero
        imageAlt="Bartender mixing a cocktail in low light"
        title="Get In Touch"
        subtitle="Let's make yours a classic."
        showArrow
      />

      <section id="content" className="mx-auto max-w-[720px] px-6 py-20 text-center">
        <p className="mx-auto mb-4 max-w-[560px] text-[18px] leading-[1.8] text-body">
          Ready to bring the razzle-dazzle to your event? Drop us a line with your date, location and
          the kind of party you have in mind, and we&apos;ll be in touch with an instant quote.
        </p>
        <DecoSeparator className="my-10" />

        <div className="mx-auto max-w-[600px] overflow-hidden bg-white px-6 pb-6 pt-0 text-left md:px-8 md:pb-8">
          <DubsadoForm />
        </div>
      </section>
    </PageShell>
  );
}
