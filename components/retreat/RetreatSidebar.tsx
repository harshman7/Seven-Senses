"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";

interface RetreatSidebarProps {
  duration: string;
  groupSize: string;
  season: string;
}

export default function RetreatSidebar({
  duration,
  groupSize,
  season,
}: RetreatSidebarProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  const details = [
    { label: "Duration", value: duration },
    { label: "Group Size", value: groupSize },
    { label: "Season", value: season },
  ];

  return (
    <motion.aside
      style={{ opacity }}
      className="hidden lg:block lg:sticky lg:top-32 lg:self-start"
      aria-label="Retreat details"
    >
      <div className="space-y-10 border-l border-sage/25 pl-10">
        {details.map((detail) => (
          <div key={detail.label}>
            <p className="font-body text-[0.6rem] font-light tracking-[0.2em] uppercase text-charcoal/35">
              {detail.label}
            </p>
            <p className="mt-2 font-serif text-lg tracking-wide text-charcoal">
              {detail.value}
            </p>
          </div>
        ))}

        <div className="pt-6">
          <Button
            href="/inquire"
            variant="filled"
            ariaLabel="Inquire about this retreat"
          >
            Inquire
          </Button>
        </div>
      </div>
    </motion.aside>
  );
}
