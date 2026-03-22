"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { retreats } from "@/lib/retreats";
import AnimatedText from "@/components/ui/AnimatedText";

function RetreatCard({
  slug,
  destination,
  region,
  tagline,
  duration,
  season,
  image,
  imageAlt,
  index,
}: {
  slug: string;
  destination: string;
  region: string;
  tagline: string;
  duration: string;
  season: string;
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
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={`/retreats/${slug}`}
        className="group block"
        aria-label={`Explore the ${destination} retreat — ${tagline}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />
          <div className="absolute inset-0 border border-transparent transition-all duration-700 group-hover:border-gold/30" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="font-body text-[0.55rem] font-light tracking-[0.25em] uppercase text-linen/45">
              {region}
            </p>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl tracking-[0.12em] text-linen">
              {destination}
            </h3>
          </div>
        </div>

        <div className="mt-5 md:mt-6 lg:mt-8 transition-transform duration-500 group-hover:-translate-y-1">
          <p className="font-body text-sm font-light leading-[1.8] text-charcoal/55">
            {tagline}
          </p>
          <div className="mt-3 md:mt-4 lg:mt-5 flex gap-6 md:gap-8">
            <span className="font-body text-[0.6rem] font-light tracking-[0.15em] uppercase text-charcoal/30">
              {duration}
            </span>
            <span className="font-body text-[0.6rem] font-light tracking-[0.15em] uppercase text-charcoal/30">
              {season}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function AllRetreats() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[65vh] min-h-[500px] md:min-h-[550px] lg:min-h-[600px] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2940&auto=format&fit=crop"
          alt="Vast serene valley with soft morning mist between forested hills"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent" />

        <div className="relative z-10 px-6 pb-14 md:px-10 md:pb-18 lg:px-16 lg:pb-24 xl:px-20 xl:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-linen/45">
              Signature Experiences
            </p>
            <h1 className="mt-3 md:mt-4 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.15em] text-linen">
              Retreats
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 xl:px-20 xl:py-48">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedText>
            <p className="font-serif text-xl italic font-light leading-relaxed text-charcoal/70 sm:text-2xl md:text-[1.6rem] md:leading-[1.7] lg:text-3xl lg:leading-relaxed">
              Six considered destinations across four continents. Each shaped by landscape,
              culture, and the unhurried art of being present.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Retreats grid */}
      <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-16 lg:pb-40 xl:px-20 xl:pb-48" aria-label="All retreats">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:gap-16">
            {retreats.map((retreat, i) => (
              <RetreatCard
                key={retreat.slug}
                slug={retreat.slug}
                destination={retreat.destination}
                region={retreat.region}
                tagline={retreat.tagline}
                duration={retreat.duration}
                season={retreat.season}
                image={retreat.image}
                imageAlt={retreat.imageAlt}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
