import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import SectionDivider from "@/components/ui/SectionDivider";
import RetreatsPreview from "@/components/home/RetreatsGrid";
import SevenSenses from "@/components/home/SevenSenses";
import Testimonials from "@/components/home/Testimonials";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <SectionDivider />
      <RetreatsPreview />
      <SevenSenses />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
