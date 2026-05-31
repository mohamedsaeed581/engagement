"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COUPLE, EVENT } from "@/lib/constants";
import { assetPath } from "@/lib/utils";
import { useScrollReveal } from "@/lib/gsap";

export default function HeroSection() {
  const contentRef = useScrollReveal<HTMLDivElement>({ y: 50 });

  return (
    <section className="relative flex min-h-screen flex-wrap items-center justify-center gap-10 px-6 py-24 md:gap-16 md:px-12 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="photo-frame group"
      >
        <div className="relative overflow-hidden shadow-luxury">
          <Image
            src={assetPath("/images/mohamed.jpg")}
            alt={COUPLE.groom}
            width={300}
            height={460}
            priority
            className="h-[380px] w-[260px] object-cover object-top transition-transform duration-700 group-hover:scale-105 md:h-[460px] md:w-[300px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent" />
        </div>
      </motion.div>

      <div ref={contentRef} className="max-w-lg text-center">
        <p className="font-montserrat text-xs uppercase tracking-[0.4em] text-white/40">
          {EVENT.date}
        </p>
        <p className="mt-4 font-montserrat text-[11px] uppercase tracking-[0.35em] text-white/50">
          Together with their families
        </p>

        <h1 className="mt-6 font-cinzel text-5xl leading-tight text-gold md:text-7xl lg:text-8xl">
          {COUPLE.groom.toUpperCase()}
          <span className="my-2 block font-cormorant text-4xl font-light italic text-gold-light md:text-5xl">
            &
          </span>
          {COUPLE.bride.toUpperCase()}
        </h1>

        <p className="mt-8 font-cormorant text-xl italic leading-relaxed text-white/60 md:text-2xl">
          Joyfully invite you to celebrate
          <br />
          their engagement
        </p>

        <a
          href="#countdown"
          className="mt-10 inline-block border border-gold px-10 py-3.5 font-montserrat text-[11px] uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-luxury-black hover:shadow-gold"
        >
          Discover More
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="photo-frame group"
      >
        <div className="relative overflow-hidden shadow-luxury">
          <Image
            src={assetPath("/images/rewan.jpg")}
            alt={COUPLE.bride}
            width={300}
            height={460}
            priority
            className="h-[380px] w-[260px] object-cover object-top transition-transform duration-700 group-hover:scale-105 md:h-[460px] md:w-[300px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
