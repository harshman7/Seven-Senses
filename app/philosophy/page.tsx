import type { Metadata } from "next";
import PhilosophyContent from "@/components/philosophy/PhilosophyContent";

export const metadata: Metadata = {
  title: "Philosophy — Seven Senses",
  description:
    "The convictions, principles, and pillars that shape every Seven Senses retreat experience.",
};

export default function PhilosophyPage() {
  return <PhilosophyContent />;
}
