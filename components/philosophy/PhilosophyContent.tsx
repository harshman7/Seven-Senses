"use client";

import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

interface Pillar {
  number: string;
  name: string;
  passage: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    name: "Solitude",
    passage:
      "In the architecture of modern life, solitude has become a radical act. We design retreats that restore it — not as isolation, but as the most generous form of self-attention. To be unreachable, even briefly, is to remember what it means to be present.",
  },
  {
    number: "02",
    name: "Nourishment",
    passage:
      "Every meal is a conversation between land and guest. We work with chefs who treat provenance as philosophy and the table as ceremony. Food is never fuel here. It is rhythm, it is season, it is the most intimate form of hospitality.",
  },
  {
    number: "03",
    name: "Movement",
    passage:
      "The body carries wisdom the mind cannot articulate. Whether walking a mountain trail, practising dawn yoga on a sandbank, or simply breathing with attention — we honour the intelligence of physical being. Stillness is not the absence of movement. It is its distillation.",
  },
  {
    number: "04",
    name: "Silence",
    passage:
      "Silence is not emptiness. It is the condition in which everything inessential falls away, and what remains is true. We design environments where silence is not awkward but nourishing — where it becomes the medium through which clarity arrives.",
  },
  {
    number: "05",
    name: "Connection",
    passage:
      "To place, to others, to the self you left room to meet. Our retreats are intimate by design — never more than eight guests — because meaningful connection requires space, attention, and the unhurried willingness to be seen.",
  },
  {
    number: "06",
    name: "Wonder",
    passage:
      "Wonder cannot be manufactured, but it can be carefully tended. A glacier calving at dawn. Bioluminescence beneath your feet. The first note of a private Gnawa performance. We create the conditions for astonishment, and then we step aside.",
  },
  {
    number: "07",
    name: "Restoration",
    passage:
      "Not returning to who you were, but arriving at who you are. Restoration is the quiet culmination of solitude, nourishment, movement, silence, connection, and wonder. It is not a goal. It is what happens when everything else is given room.",
  },
];

export default function PhilosophyContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[65vh] min-h-[500px] md:min-h-[550px] lg:min-h-[600px] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2940&auto=format&fit=crop"
          alt="Soft morning light filtering through ancient forest canopy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent" />

        <div className="relative z-10 px-6 pb-14 md:px-10 md:pb-18 lg:px-16 lg:pb-24 xl:px-20 xl:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-linen/45">
              Our Philosophy
            </p>
            <h1 className="mt-3 md:mt-4 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.15em] text-linen">
              Philosophy
            </h1>
          </div>
        </div>
      </section>

      {/* Opening passage */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 xl:px-20 xl:py-48" aria-label="Philosophy introduction">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24 xl:gap-32 lg:items-start">
            <AnimatedText delay={0.1}>
              <blockquote className="font-serif text-[1.75rem] italic font-light leading-[1.35] text-charcoal/85 sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] xl:text-[2.8rem]">
                &ldquo;We believe that what the world&apos;s most extraordinary people need most
                is not more — but less. Less noise. Less choice. Less urgency.
                More presence.&rdquo;
              </blockquote>
            </AnimatedText>

            <div className="space-y-6 md:space-y-8 lg:pt-16">
              <AnimatedText delay={0.35}>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.85] text-charcoal/55">
                  Seven Senses was born from a conviction that retreat is not indulgence — it is
                  necessity. That the most considered lives deserve experiences shaped with equal
                  consideration. That luxury, at its highest expression, is the gift of
                  unhurried time.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.5}>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.85] text-charcoal/55">
                  We partner with a rare network of estates, healers, artisans, and scholars who
                  share our devotion to authenticity. Nothing is templated. Nothing is rushed.
                  Each retreat unfolds as a singular encounter — between guest and place, between
                  stillness and self.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* The Seven Pillars */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 xl:px-20 xl:py-48" aria-label="The Seven Pillars">
        <div className="mx-auto max-w-[1400px]">
          <AnimatedText>
            <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-sage">
              The Seven Pillars
            </p>
            <h2 className="mt-4 md:mt-5 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] text-charcoal">
              What Guides Us
            </h2>
          </AnimatedText>

          <div className="mt-16 md:mt-20 lg:mt-28 space-y-16 md:space-y-20 lg:space-y-28 xl:space-y-36">
            {pillars.map((pillar) => (
              <AnimatedText key={pillar.number} delay={0.1}>
                <article className="grid gap-4 md:gap-6 lg:grid-cols-[80px_200px_1fr] lg:gap-12 xl:grid-cols-[100px_220px_1fr] xl:gap-16 lg:items-start">
                  <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-gold/30">
                    {pillar.number}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-[0.06em] text-charcoal lg:pt-3">
                    {pillar.name}
                  </h3>
                  <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.9] text-charcoal/55 lg:pt-3 lg:max-w-2xl">
                    {pillar.passage}
                  </p>
                </article>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="px-6 py-32 md:px-10 md:py-40 lg:px-16 lg:py-48 xl:px-20 xl:py-56" aria-label="Inquire">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedText>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic font-light leading-relaxed text-charcoal/80">
              If this resonates, we would be honoured to hear from you.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <div className="mt-8 md:mt-10 lg:mt-14">
              <Button href="/inquire" variant="filled" ariaLabel="Inquire about a retreat">
                Inquire
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </>
  );
}
