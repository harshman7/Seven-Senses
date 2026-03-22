import { notFound } from "next/navigation";
import { retreats, getRetreatBySlug } from "@/lib/retreats";
import type { Metadata } from "next";
import RetreatHero from "@/components/retreat/RetreatHero";
import RetreatSidebar from "@/components/retreat/RetreatSidebar";
import RetreatContent from "@/components/retreat/RetreatContent";

interface RetreatPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return retreats.map((retreat) => ({ slug: retreat.slug }));
}

export async function generateMetadata({
  params,
}: RetreatPageProps): Promise<Metadata> {
  const { slug } = await params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) {
    return { title: "Retreat Not Found — Seven Senses" };
  }

  return {
    title: `${retreat.destination} — Seven Senses`,
    description: retreat.overview[0],
  };
}

export default async function RetreatPage({ params }: RetreatPageProps) {
  const { slug } = await params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) {
    notFound();
  }

  return (
    <>
      <RetreatHero
        destination={retreat.destination}
        region={retreat.region}
        tagline={retreat.tagline}
        image={retreat.image}
        imageAlt={retreat.imageAlt}
      />

      <section className="px-8 py-28 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-[1200px] gap-20 lg:grid-cols-[1fr_280px] lg:gap-24">
          <RetreatContent retreat={retreat} />
          <RetreatSidebar
            duration={retreat.duration}
            groupSize={retreat.groupSize}
            season={retreat.season}
          />
        </div>
      </section>
    </>
  );
}
