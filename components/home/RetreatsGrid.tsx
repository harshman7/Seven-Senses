"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { retreats } from "@/lib/retreats";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";

const featured = retreats.slice(0, 3);

function RetreatCard({
  slug,
  destination,
  region,
  tagline,
  image,
  imageAlt,
  index,
}: {
  slug: string;
  destination: string;
  region: string;
  tagline: string;
  image: string;
  imageAlt: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={`/retreats/${slug}`}
        className="group block"
        aria-label={`Explore the ${destination} retreat — ${tagline}`}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
          <div className="absolute inset-0 border border-transparent transition-all duration-700 group-hover:border-gold/30" />
        </div>

        <div className="mt-5 md:mt-6 lg:mt-8 transition-transform duration-500 group-hover:-translate-y-1">
          <p className="font-body text-[0.6rem] font-light tracking-[0.25em] uppercase text-charcoal/35">
            {region}
          </p>
          <h3 className="mt-1.5 md:mt-2 font-serif text-xl md:text-2xl tracking-[0.12em] text-charcoal">
            {destination}
          </h3>
          <p className="mt-2 md:mt-3 font-body text-sm font-light leading-relaxed text-charcoal/50">
            {tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function RetreatsPreview() {
  return (
    <section
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 xl:px-20 xl:py-48"
      aria-label="Featured retreats"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 md:mb-20 lg:mb-24 max-w-2xl">
          <AnimatedText>
            <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-sage">
              Signature Experiences
            </p>
          </AnimatedText>
          <AnimatedText delay={0.15}>
            <h2 className="mt-4 md:mt-5 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] text-charcoal">
              Considered Destinations
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <p className="mt-5 md:mt-6 lg:mt-8 text-[0.9rem] md:text-[0.95rem] leading-[1.85] text-charcoal/50 max-w-lg">
              Six rare destinations, each shaped by landscape, culture, and the unhurried
              art of being present.
            </p>
          </AnimatedText>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:gap-16">
          {featured.map((retreat, i) => (
            <RetreatCard
              key={retreat.slug}
              slug={retreat.slug}
              destination={retreat.destination}
              region={retreat.region}
              tagline={retreat.tagline}
              image={retreat.image}
              imageAlt={retreat.imageAlt}
              index={i}
            />
          ))}
        </div>

        <AnimatedText delay={0.2} className="mt-12 md:mt-16 lg:mt-20 text-center">
          <Button href="/retreats" variant="ghost" ariaLabel="View all retreats">
            View All Destinations
          </Button>
        </AnimatedText>
      </div>
    </section>
  );
}
