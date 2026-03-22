"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/ui/AnimatedText";

interface Sense {
  number: string;
  name: string;
  descriptor: string;
}

const senses: Sense[] = [
  {
    number: "01",
    name: "Solitude",
    descriptor: "The privilege of being unreachable, by design.",
  },
  {
    number: "02",
    name: "Nourishment",
    descriptor: "Food as ceremony — provenance, patience, and presence at every table.",
  },
  {
    number: "03",
    name: "Movement",
    descriptor: "The body remembers what the mind forgets. We honour that intelligence.",
  },
  {
    number: "04",
    name: "Silence",
    descriptor: "Not absence, but the deepest form of attention.",
  },
  {
    number: "05",
    name: "Connection",
    descriptor: "To place, to others, to the self you left room to meet.",
  },
  {
    number: "06",
    name: "Wonder",
    descriptor: "The capacity to be astonished — carefully tended, never manufactured.",
  },
  {
    number: "07",
    name: "Restoration",
    descriptor: "Returning not to who you were, but to who you are.",
  },
];

function SenseItem({ sense, index }: { sense: Sense; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex flex-col gap-4 min-w-[280px] lg:min-w-0"
    >
      <span className="font-serif text-5xl font-light text-gold/40 lg:text-6xl">
        {sense.number}
      </span>
      <h3 className="font-serif text-2xl tracking-[0.08em] text-charcoal">
        {sense.name}
      </h3>
      <p className="font-body text-sm font-light leading-[1.8] text-charcoal/50 max-w-[300px]">
        {sense.descriptor}
      </p>
    </motion.div>
  );
}

export default function SevenSenses() {
  return (
    <section className="px-8 py-36 lg:px-16 lg:py-52 bg-linen-dark/40" aria-label="The Seven Senses">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24">
          <AnimatedText>
            <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-sage">
              Our Pillars
            </p>
          </AnimatedText>
          <AnimatedText delay={0.15}>
            <h2 className="mt-5 font-serif text-4xl tracking-[0.06em] text-charcoal sm:text-5xl">
              The Seven Senses
            </h2>
          </AnimatedText>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-12 overflow-x-auto pb-8 scrollbar-hide lg:hidden">
          {senses.map((sense, i) => (
            <SenseItem key={sense.number} sense={sense} index={i} />
          ))}
        </div>

        {/* Desktop: generous grid */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-16 lg:gap-y-24">
          {senses.map((sense, i) => (
            <SenseItem key={sense.number} sense={sense} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
