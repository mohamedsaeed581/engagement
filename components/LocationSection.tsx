"use client";

import { EVENT } from "@/lib/constants";
import SectionWrapper, { GoldButton, GoldDivider } from "./SectionWrapper";
import { useScrollReveal } from "@/lib/gsap";

export default function LocationSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 40 });

  return (
    <SectionWrapper id="location" label="Find us">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <h2 className="font-cinzel text-3xl text-gold md:text-5xl">
          Location
        </h2>
        <p className="mt-4 font-cormorant text-xl italic text-white/50">
          {EVENT.venue}
        </p>
        <GoldDivider />

        <div className="overflow-hidden border border-gold/20 shadow-luxury">
          <iframe
            src={EVENT.mapsEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map to ${EVENT.venue}`}
            className="w-full grayscale-[30%] contrast-[1.1]"
          />
        </div>

        <div className="mt-10">
          <GoldButton href={EVENT.mapsLink}>View Location</GoldButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
