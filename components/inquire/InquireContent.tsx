"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { submitInquiry } from "@/app/actions";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";

export default function InquireContent() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await submitInquiry(email);
      setStatus(result.success ? "success" : "error");
      setMessage(result.message);
      if (result.success) {
        setEmail("");
        setName("");
        setInterest("");
      }
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2940&auto=format&fit=crop"
          alt="Calm turquoise ocean meeting a white sand shore at dawn"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent" />

        <div className="relative z-10 px-8 pb-20 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-body text-[0.65rem] font-light tracking-[0.25em] uppercase text-linen/45">
              Begin Here
            </p>
            <h1 className="mt-4 font-serif text-5xl tracking-[0.15em] text-linen sm:text-6xl lg:text-7xl">
              Inquire
            </h1>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="px-8 py-36 lg:px-16 lg:py-52" aria-label="Inquiry form">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-20 lg:grid-cols-[1fr_1.1fr] lg:gap-32 lg:items-start">
            {/* Left: copy */}
            <div>
              <AnimatedText>
                <h2 className="font-serif text-3xl tracking-[0.06em] text-charcoal sm:text-4xl lg:text-[2.6rem] lg:leading-[1.25]">
                  Your retreat begins with
                  <br />
                  <em className="font-light">a conversation.</em>
                </h2>
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <p className="mt-10 text-[0.95rem] leading-[1.9] text-charcoal/50">
                  We do not offer brochures or price lists. Every retreat is shaped around the
                  individual — your rhythm, your intentions, your sense of what matters.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.35}>
                <p className="mt-6 text-[0.95rem] leading-[1.9] text-charcoal/50">
                  Share your details below and a member of our team will reach out within
                  48 hours to begin a confidential conversation.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.5}>
                <div className="mt-16 space-y-6 border-l border-sage/25 pl-8">
                  <div>
                    <p className="font-body text-[0.6rem] font-light tracking-[0.2em] uppercase text-charcoal/30">
                      Response Time
                    </p>
                    <p className="mt-1 font-serif text-base text-charcoal">Within 48 hours</p>
                  </div>
                  <div>
                    <p className="font-body text-[0.6rem] font-light tracking-[0.2em] uppercase text-charcoal/30">
                      Discretion
                    </p>
                    <p className="mt-1 font-serif text-base text-charcoal">
                      All inquiries are held in strict confidence
                    </p>
                  </div>
                </div>
              </AnimatedText>
            </div>

            {/* Right: form */}
            <AnimatedText delay={0.2}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <p className="font-serif text-3xl italic font-light text-charcoal/80">
                    Thank you.
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-charcoal/50 max-w-sm">
                    We have received your inquiry and will be in touch within 48 hours.
                    We look forward to the conversation ahead.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label
                      htmlFor="inquire-name"
                      className="block font-body text-[0.6rem] font-light tracking-[0.2em] uppercase text-charcoal/40 mb-3"
                    >
                      Name
                    </label>
                    <input
                      id="inquire-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="How you prefer to be addressed"
                      className="w-full border-b border-charcoal/15 bg-transparent py-4 font-body text-[0.95rem] font-light text-charcoal placeholder:text-charcoal/25 focus:border-sage focus:outline-none transition-colors duration-300"
                      aria-label="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquire-email"
                      className="block font-body text-[0.6rem] font-light tracking-[0.2em] uppercase text-charcoal/40 mb-3"
                    >
                      Email
                    </label>
                    <input
                      id="inquire-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status !== "idle") setStatus("idle");
                      }}
                      placeholder="your@email.com"
                      className="w-full border-b border-charcoal/15 bg-transparent py-4 font-body text-[0.95rem] font-light text-charcoal placeholder:text-charcoal/25 focus:border-sage focus:outline-none transition-colors duration-300"
                      aria-label="Your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquire-interest"
                      className="block font-body text-[0.6rem] font-light tracking-[0.2em] uppercase text-charcoal/40 mb-3"
                    >
                      What draws you (optional)
                    </label>
                    <textarea
                      id="inquire-interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      placeholder="A destination, a season, a feeling you wish to return to..."
                      rows={4}
                      className="w-full resize-none border-b border-charcoal/15 bg-transparent py-4 font-body text-[0.95rem] font-light text-charcoal placeholder:text-charcoal/25 focus:border-sage focus:outline-none transition-colors duration-300"
                      aria-label="What interests you about Seven Senses"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="filled"
                      disabled={isPending}
                      ariaLabel="Submit your inquiry"
                    >
                      {isPending ? "Sending..." : "Request Invitation"}
                    </Button>
                  </div>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-xs tracking-wider text-red-700/50"
                    >
                      {message}
                    </motion.p>
                  )}
                </form>
              )}
            </AnimatedText>
          </div>
        </div>
      </section>
    </>
  );
}
