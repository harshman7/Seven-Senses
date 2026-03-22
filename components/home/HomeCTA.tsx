"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function HomeCTA() {
  return (
    <section className="px-8 py-40 lg:px-16 lg:py-56" aria-label="Begin your retreat">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedText>
          <h2 className="font-serif text-4xl tracking-[0.06em] text-charcoal sm:text-5xl lg:text-[3.2rem] lg:leading-[1.2]">
            Your retreat begins with
            <br />
            <em className="font-light">a conversation.</em>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.25}>
          <p className="mt-10 text-[0.95rem] leading-[1.9] text-charcoal/50">
            Share your intentions and a member of our team will reach out
            within 48 hours to begin, in confidence, a conversation
            about what your retreat could become.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="mt-14">
            <Button href="/inquire" variant="filled" ariaLabel="Request an invitation">
              Request Invitation
            </Button>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
