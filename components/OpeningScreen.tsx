"use client";

import { motion } from "framer-motion";
import { GoldButton } from "./SectionWrapper";

interface OpeningScreenProps {
  onContinue: () => void;
}

export default function OpeningScreen({ onContinue }: OpeningScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-black px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <p className="mb-6 font-cinzel text-sm tracking-[0.5em] text-gold/60">
          ✦ ✦ ✦
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
          className="font-cormorant text-3xl italic leading-relaxed text-gold-light md:text-5xl lg:text-6xl"
        >
          Every Love Story Has A Beginning...
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <GoldButton onClick={onContinue}>Continue</GoldButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8 font-montserrat text-[10px] uppercase tracking-[0.3em] text-white/30"
        >
          Tap to enter with music
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
