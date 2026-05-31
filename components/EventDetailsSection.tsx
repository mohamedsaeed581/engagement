"use client";

import { EVENT } from "@/lib/constants";
import SectionWrapper, { GoldDivider } from "./SectionWrapper";
import { useScrollReveal } from "@/lib/gsap";

const DETAILS = [
  { icon: "📅", title: "Date", value: EVENT.date },
  { icon: "🕖", title: "Time", value: EVENT.time },
  { icon: "📍", title: "Venue", value: EVENT.venue },
];

export default function EventDetailsSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 40 });

  return (
    <SectionWrapper id="details" label="Join us">
      <div ref={ref} className="mx-auto max-w-5xl text-center">
        <h2 className="font-cinzel text-3xl text-gold md:text-5xl">
          Event Details
        </h2>
        <GoldDivider />

        <div className="flex flex-wrap justify-center gap-6">
          {DETAILS.map((item) => (
            <div
              key={item.title}
              className="group w-72 border border-gold/15 bg-luxury-card p-10 transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxury"
            >
              <div className="mb-5 text-3xl opacity-80">{item.icon}</div>
              <h3 className="font-cinzel text-sm tracking-[0.2em] text-gold">
                {item.title}
              </h3>
              <p className="mt-4 font-cormorant text-xl text-white/80">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
