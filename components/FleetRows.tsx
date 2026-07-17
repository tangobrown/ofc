import Image from "next/image";
import Button from "./Button";
import DecoSeparator from "./DecoSeparator";
import { FLEET } from "@/lib/fleet";

/**
 * "Meet Our Fleet" as used on the standard event pages: a deco separator, a
 * left-aligned heading, then two image + text rows (Learn More → /fleet#…).
 */
export default function FleetRows() {
  return (
    <>
      <DecoSeparator className="mx-auto mt-[70px] max-w-content px-10" />
      <section className="mx-auto max-w-content px-10 pb-10 pt-[120px]">
        <h2 className="m-0 mb-[50px] font-display text-[clamp(28px,3.2vw,42px)] font-semibold uppercase tracking-[0.03em] text-gold">
          Meet Our Fleet
        </h2>
        <div className="flex flex-col gap-[70px]">
          {FLEET.map((m) => (
            <div key={m.anchor} className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image src={m.image} alt={m.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <h3 className="m-0 mb-4 font-display text-[20px] font-semibold uppercase tracking-[0.03em] text-heading-light">
                  {m.name}
                </h3>
                <p className="mb-6 text-[16px] leading-[1.7] text-body-dim">{m.description}</p>
                <Button href={m.anchor} size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
