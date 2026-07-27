import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import DecoSeparator from "@/components/DecoSeparator";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Old Fashioned Cocktail Co. for mobile cocktail bar hire in New York.",
};

/**
 * Contact page — not specified in the handoff, but the nav and several CTAs link
 * here. On-brand placeholder with a simple enquiry form ready to be wired up.
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

        <form className="mx-auto flex max-w-[520px] flex-col gap-5 text-left">
          <label className="flex flex-col gap-2">
            <span className="text-[12px] uppercase tracking-nav text-gold">Name</span>
            <input
              type="text"
              name="name"
              className="border border-[rgba(192,157,108,0.4)] bg-transparent px-4 py-3 text-body outline-none focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] uppercase tracking-nav text-gold">Email</span>
            <input
              type="email"
              name="email"
              className="border border-[rgba(192,157,108,0.4)] bg-transparent px-4 py-3 text-body outline-none focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] uppercase tracking-nav text-gold">Tell us about your event</span>
            <textarea
              name="message"
              rows={5}
              className="border border-[rgba(192,157,108,0.4)] bg-transparent px-4 py-3 text-body outline-none focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="btn-outline mt-2 self-start border-[rgba(242,236,223,0.75)] px-[28px] py-[13px] text-[14px]"
          >
            Send Enquiry <span aria-hidden="true">→</span>
          </button>
        </form>
      </section>
    </PageShell>
  );
}
