"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-svh min-h-[700px] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop"
          alt="Misty mountain peaks rising above clouds at dawn"
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/10 via-transparent to-charcoal/50" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-8"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl font-normal tracking-[0.35em] text-linen sm:text-7xl lg:text-8xl"
        >
          SEVEN SENSES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-8 font-serif text-xl italic font-light tracking-[0.12em] text-linen/75 sm:text-2xl lg:text-3xl"
        >
          Where stillness becomes clarity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.0,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-14"
        >
          <Button
            href="/retreats"
            variant="ghost"
            className="border-linen/30 text-linen hover:bg-linen hover:text-charcoal"
            ariaLabel="Explore our retreats"
          >
            Explore Retreats
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-transparent to-linen/40"
        />
      </motion.div>
    </section>
  );
}
