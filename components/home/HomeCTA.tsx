"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function HomeCTA() {
  return (
    <section
      className="px-6 py-32 md:px-10 md:py-40 lg:px-16 lg:py-48 xl:px-20 xl:py-56"
      aria-label="Begin your retreat"
    >
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedText>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] tracking-[0.06em] text-charcoal leading-[1.2]">
            Your retreat begins with
            <br />
            <em className="font-light">a conversation.</em>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.25}>
          <p className="mt-6 md:mt-8 lg:mt-10 text-[0.9rem] md:text-[0.95rem] leading-[1.85] text-charcoal/50">
            Share your intentions and a member of our team will reach out
            within 48 hours to begin, in confidence, a conversation
            about what your retreat could become.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="mt-8 md:mt-10 lg:mt-14">
            <Button href="/inquire" variant="filled" ariaLabel="Request an invitation">
              Request Invitation
            </Button>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
