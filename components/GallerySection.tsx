"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import { assetPath } from "@/lib/utils";
import SectionWrapper, { GoldDivider } from "./SectionWrapper";
import { useScrollReveal } from "@/lib/gsap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useScrollReveal<HTMLDivElement>({ y: 40 });

  return (
    <SectionWrapper id="gallery" label="Gallery">
      <div ref={ref} className="mx-auto max-w-6xl text-center">
        <h2 className="font-cinzel text-3xl text-gold md:text-5xl">
          Our Moments
        </h2>
        <GoldDivider />

        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 8,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="gallery-swiper !pb-14 !pt-4"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <SwiperSlide key={i} className="!w-[280px] md:!w-[340px]">
              <button
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden shadow-luxury transition-transform duration-500 hover:scale-[1.03]"
              >
                <Image
                  src={assetPath(img.src)}
                  alt={img.alt}
                  width={340}
                  height={480}
                  className="h-[360px] w-full object-cover md:h-[440px]"
                />
                <div className="absolute inset-0 bg-gold/0 transition-colors group-hover:bg-gold/10" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-6 top-6 font-cinzel text-2xl text-gold"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={assetPath(GALLERY_IMAGES[lightbox].src)}
                alt={GALLERY_IMAGES[lightbox].alt}
                width={900}
                height={1200}
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
