"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Elena Vasari",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: "After two decades designing experiences for the world's leading hospitality houses, Elena founded Seven Senses with a single conviction: that retreat is not escape, but return. She leads the creative vision with an uncompromising eye for beauty and an instinct for what matters.",
  },
  {
    name: "Kenji Murakami",
    role: "Director of Experiences",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "A former Zen practitioner and cultural anthropologist, Kenji brings thirty years of contemplative practice to every retreat he shapes. His gift is for finding the sacred within the secular — the temple within the landscape, the ceremony within the meal.",
  },
  {
    name: "Amara Osei",
    role: "Head of Guest Relations",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    bio: "Amara ensures that every guest encounter — from the first inquiry to the quiet farewell — reflects the care and confidence that defines Seven Senses. Her background in psychology and luxury hospitality informs an approach that is intuitive, discreet, and deeply personal.",
  },
];

interface Value {
  number: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    number: "01",
    title: "Intention Over Excess",
    description:
      "We believe luxury is not about abundance, but about the considered removal of everything unnecessary. Each element of a retreat earns its place.",
  },
  {
    number: "02",
    title: "Privacy as a Principle",
    description:
      "Our guests are never photographed, never named, never promoted. Discretion is not a feature — it is the foundation upon which trust is built.",
  },
  {
    number: "03",
    title: "Depth Over Breadth",
    description:
      "We offer six destinations, not sixty. We serve a handful of guests each month, not hundreds. This is deliberate. Rarity is how we ensure quality remains absolute.",
  },
  {
    number: "04",
    title: "The Primacy of Place",
    description:
      "Every retreat is an expression of its landscape. We do not impose experiences upon destinations — we listen to what each place already knows, and we design around its wisdom.",
  },
  {
    number: "05",
    title: "Stillness as Practice",
    description:
      "In a world optimised for stimulation, we design for its opposite. Our retreats create space — literal and interior — for the unhurried work of being present.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[65vh] min-h-[500px] md:min-h-[550px] lg:min-h-[600px] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
          alt="Minimalist architectural interior bathed in warm natural light"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent" />

        <div className="relative z-10 px-6 pb-14 md:px-10 md:pb-18 lg:px-16 lg:pb-24 xl:px-20 xl:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-linen/45">
              Our Story
            </p>
            <h1 className="mt-3 md:mt-4 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.15em] text-linen">
              About
            </h1>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 xl:px-20 xl:py-48" aria-label="Our story">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24 xl:gap-32 lg:items-start">
            <AnimatedText delay={0.1}>
              <blockquote className="font-serif text-[1.75rem] italic font-light leading-[1.35] text-charcoal/85 sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] xl:text-[2.8rem]">
                &ldquo;We began with a question: what would it mean to design an experience
                worthy of the world&apos;s most extraordinary places?&rdquo;
              </blockquote>
            </AnimatedText>

            <div className="space-y-6 md:space-y-8 lg:pt-16">
              <AnimatedText delay={0.3}>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.85] text-charcoal/55">
                  Seven Senses was founded in 2019 by Elena Vasari, after a career spent inside
                  the world&apos;s most revered luxury brands. The insight that would become
                  Seven Senses was simple but radical: the wealthiest people in the world had
                  access to everything — except the space to stop.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.45}>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.85] text-charcoal/55">
                  From a single retreat in Kyoto, Seven Senses has grown — slowly, deliberately —
                  into a global practice. We now curate six signature experiences across four
                  continents, each shaped by the same founding conviction: that what our guests
                  need most is not more, but less. Less noise. Less choice. Less urgency.
                  More presence.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.6}>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.85] text-charcoal/55">
                  Today, Seven Senses operates by invitation and inquiry only. We welcome a
                  small number of guests each season, and we intend to keep it that way. Growth,
                  for us, is not a goal — it is something to resist, carefully and with purpose.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Founding Team */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 xl:px-20 xl:py-48" aria-label="Our team">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 md:mb-20 lg:mb-24">
            <AnimatedText>
              <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-sage">
                The Team
              </p>
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <h2 className="mt-4 md:mt-5 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] text-charcoal">
                Founding Circle
              </h2>
            </AnimatedText>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:gap-16">
            {team.map((member, i) => (
              <AnimatedText key={member.name} delay={0.15 + i * 0.12}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-6 md:mt-8">
                    <h3 className="font-serif text-lg md:text-xl tracking-[0.08em] text-charcoal">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 md:mt-2 font-body text-[0.65rem] font-light tracking-[0.15em] uppercase text-gold/60">
                      {member.role}
                    </p>
                    <p className="mt-4 md:mt-6 text-sm leading-[1.8] text-charcoal/50">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 xl:px-20 xl:py-48" aria-label="Our values">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 md:mb-20 lg:mb-24">
            <AnimatedText>
              <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-sage">
                Our Convictions
              </p>
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <h2 className="mt-4 md:mt-5 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] text-charcoal">
                What We Believe
              </h2>
            </AnimatedText>
          </div>

          <div className="space-y-14 md:space-y-18 lg:space-y-24 xl:space-y-28">
            {values.map((value) => (
              <AnimatedText key={value.number} delay={0.1}>
                <div className="grid gap-4 md:gap-6 lg:grid-cols-[80px_200px_1fr] lg:gap-12 xl:grid-cols-[100px_220px_1fr] xl:gap-16 lg:items-start">
                  <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-gold/30">
                    {value.number}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl tracking-[0.06em] text-charcoal lg:pt-2">
                    {value.title}
                  </h3>
                  <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.9] text-charcoal/55 lg:pt-2">
                    {value.description}
                  </p>
                </div>
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
              We would be honoured to welcome you.
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
