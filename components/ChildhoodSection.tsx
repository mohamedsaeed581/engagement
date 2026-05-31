"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/utils";
import SectionWrapper, { GoldDivider } from "./SectionWrapper";
import { useScrollReveal } from "@/lib/gsap";

export default function ChildhoodSection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 50 });

  return (
    <SectionWrapper id="memories" label="Our story">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <h2 className="font-cinzel text-3xl text-gold md:text-5xl">
          Where Every Beautiful Story Begins
        </h2>
        <p className="mt-4 font-cormorant text-xl italic text-white/50 md:text-2xl">
          Childhood Memories
        </p>
        <GoldDivider />

        <motion.div
          initial={{ opacity: 0, rotate: -3, y: 40 }}
          whileInView={{ opacity: 1, rotate: -2, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="polaroid mx-auto max-w-xl p-4 pb-12"
        >
          <div className="relative overflow-hidden shadow-luxury">
            <Image
              src={assetPath("/images/childhood.jpg")}
              alt="Childhood memories"
              width={720}
              height={480}
              className="w-full object-cover"
            />
          </div>
          <p className="mt-6 font-cormorant text-lg italic text-white/40">
            The beginning of forever ✦
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
