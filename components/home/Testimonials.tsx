"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  initials: string;
  destination: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I did not know silence could feel this generous. Three days in Kyoto and I returned to myself — not changed, but remembered.",
    initials: "A.R.",
    destination: "Kyoto, 2024",
  },
  {
    quote:
      "Every detail was considered without ever feeling curated. It was as though the retreat had been waiting for me, not the other way around.",
    initials: "M.T.",
    destination: "Norwegian Fjords, 2024",
  },
  {
    quote:
      "My wife and I have travelled extensively. This was the first time we felt we had truly arrived somewhere. The Maldives retreat was not a holiday — it was a restoration.",
    initials: "J.K.",
    destination: "Maldives, 2023",
  },
  {
    quote:
      "I came expecting beauty. I left understanding stillness. Bhutan did not meet my expectations — it replaced them entirely.",
    initials: "S.L.",
    destination: "Bhutan, 2024",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="bg-charcoal px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 xl:px-20 xl:py-48"
      aria-label="Guest reflections"
    >
      <div className="mx-auto max-w-[900px] text-center">
        <p className="mb-12 md:mb-16 lg:mb-20 font-body text-[0.65rem] font-light tracking-[0.3em] uppercase text-linen/25">
          Guest Reflections
        </p>

        <div className="relative min-h-[200px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <blockquote className="font-serif text-xl italic font-light leading-relaxed text-linen/75 sm:text-2xl md:text-[1.6rem] md:leading-[1.7] lg:text-[1.8rem]">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div className="mt-10 md:mt-12 lg:mt-14">
                <p className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-gold/60">
                  {testimonials[current].initials}
                </p>
                <p className="mt-2 font-body text-[0.6rem] font-light tracking-[0.15em] uppercase text-linen/25">
                  {testimonials[current].destination}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 md:mt-16 lg:mt-20 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px rounded-full transition-all duration-700 ${
                i === current ? "w-10 bg-gold/50" : "w-4 bg-linen/10"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
