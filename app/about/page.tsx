import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About — Seven Senses",
  description:
    "The story, philosophy, and founding vision behind Seven Senses — bespoke global retreats by invitation and inquiry.",
};

export default function AboutPage() {
  return <AboutContent />;
}
