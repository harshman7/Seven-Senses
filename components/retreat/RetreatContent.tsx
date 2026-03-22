"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import type { Retreat } from "@/lib/retreats";

interface RetreatContentProps {
  retreat: Retreat;
}

export default function RetreatContent({ retreat }: RetreatContentProps) {
  return (
    <div className="space-y-32 lg:space-y-40">
      {/* Overview */}
      <div>
        <AnimatedText>
          <h2 className="font-serif text-3xl tracking-[0.06em] text-charcoal sm:text-4xl">
            Overview
          </h2>
        </AnimatedText>
        <div className="mt-10 space-y-6">
          {retreat.overview.map((p, i) => (
            <AnimatedText key={i} delay={0.1 + i * 0.1}>
              <p className="text-[0.95rem] leading-[2] text-charcoal/55">{p}</p>
            </AnimatedText>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <div>
        <AnimatedText>
          <h2 className="font-serif text-3xl tracking-[0.06em] text-charcoal sm:text-4xl">
            What&apos;s Included
          </h2>
        </AnimatedText>
        <ul className="mt-10 space-y-5">
          {retreat.included.map((item, i) => (
            <AnimatedText key={i} delay={0.05 + i * 0.06}>
              <li className="flex items-start gap-5 text-[0.95rem] leading-[1.8] text-charcoal/55">
                <span className="mt-2.5 block h-1 w-1 flex-shrink-0 rounded-full bg-gold/50" />
                {item}
              </li>
            </AnimatedText>
          ))}
        </ul>
      </div>

      {/* The Experience */}
      <div>
        <AnimatedText>
          <h2 className="font-serif text-3xl tracking-[0.06em] text-charcoal sm:text-4xl">
            The Experience
          </h2>
        </AnimatedText>
        <div className="mt-10 space-y-8">
          {retreat.experience.map((p, i) => (
            <AnimatedText key={i} delay={0.1 + i * 0.12}>
              <p className="font-serif text-lg italic font-light leading-[1.8] text-charcoal/65">
                {p}
              </p>
            </AnimatedText>
          ))}
        </div>
      </div>

      {/* Who This Is For */}
      <div>
        <AnimatedText>
          <h2 className="font-serif text-3xl tracking-[0.06em] text-charcoal sm:text-4xl">
            Who This Is For
          </h2>
        </AnimatedText>
        <ul className="mt-10 space-y-5">
          {retreat.whoIsItFor.map((item, i) => (
            <AnimatedText key={i} delay={0.1 + i * 0.1}>
              <li className="text-[0.95rem] leading-[1.8] text-charcoal/55">
                {item}
              </li>
            </AnimatedText>
          ))}
        </ul>
      </div>

      {/* Mobile sidebar details */}
      <div className="lg:hidden border-t border-sage/20 pt-14">
        <div className="grid grid-cols-3 gap-8">
          {[
            { label: "Duration", value: retreat.duration },
            { label: "Group Size", value: retreat.groupSize },
            { label: "Season", value: retreat.season },
          ].map((detail) => (
            <div key={detail.label}>
              <p className="font-body text-[0.6rem] font-light tracking-[0.2em] uppercase text-charcoal/35">
                {detail.label}
              </p>
              <p className="mt-2 font-serif text-base tracking-wide text-charcoal">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Inquire CTA */}
      <div className="border-t border-sage/20 pt-20 text-center">
        <AnimatedText>
          <h2 className="font-serif text-3xl tracking-[0.06em] text-charcoal sm:text-4xl">
            Begin a conversation
          </h2>
          <p className="mt-6 text-[0.95rem] font-light text-charcoal/50">
            Each retreat is shaped around you. Share your interest and we will be in touch
            within 48 hours.
          </p>
          <div className="mt-12">
            <Button
              href="/inquire"
              variant="filled"
              ariaLabel="Inquire about this retreat"
            >
              Inquire
            </Button>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
