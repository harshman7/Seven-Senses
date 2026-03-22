"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function Philosophy() {
  return (
    <section
      className="px-8 py-36 lg:px-16 lg:py-52"
      aria-label="Our philosophy"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-20 lg:grid-cols-[1.1fr_1fr] lg:gap-32 lg:items-start">
          <AnimatedText delay={0.1}>
            <p className="mb-8 font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-sage">
              Our Philosophy
            </p>
            <blockquote className="font-serif text-[2rem] italic font-light leading-snug text-charcoal/90 sm:text-[2.5rem] lg:text-[2.8rem] lg:leading-[1.25]">
              &ldquo;We do not sell packages.
              <br />
              We curate transformations.&rdquo;
            </blockquote>
          </AnimatedText>

          <div className="space-y-8 lg:pt-20">
            <AnimatedText delay={0.35}>
              <p className="text-[0.95rem] leading-[1.9] text-charcoal/60">
                Seven Senses was conceived not as a company, but as a conviction — that the
                world&apos;s most discerning individuals deserve retreat experiences as considered
                as the lives they lead. Every detail, from the destination to the duration of
                silence, is shaped with unhurried intention.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <p className="text-[0.95rem] leading-[1.9] text-charcoal/60">
                Our guests do not seek escape. They seek return — to clarity, to presence, to
                the rare and unhurried art of being.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.65}>
              <div className="pt-4">
                <Button href="/philosophy" variant="ghost" ariaLabel="Read our full philosophy">
                  Read More
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
