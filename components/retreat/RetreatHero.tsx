"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface RetreatHeroProps {
  destination: string;
  region: string;
  tagline: string;
  image: string;
  imageAlt: string;
}

export default function RetreatHero({
  destination,
  region,
  tagline,
  image,
  imageAlt,
}: RetreatHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-[75vh] min-h-[550px] items-end overflow-hidden"
      aria-label={`${destination} retreat`}
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/15 to-transparent" />
      </motion.div>

      <div className="relative z-10 px-8 pb-20 lg:px-16 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-[1400px]"
        >
          <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-linen/45">
            {region}
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-[0.15em] text-linen sm:text-6xl lg:text-7xl">
            {destination}
          </h1>
          <p className="mt-5 font-serif text-xl italic font-light text-linen/65 sm:text-2xl">
            {tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
