import type { Metadata } from "next";
import AllRetreats from "@/components/retreat/AllRetreats";

export const metadata: Metadata = {
  title: "Retreats — Seven Senses",
  description:
    "Six considered destinations across four continents. Each retreat is shaped by landscape, culture, and the unhurried art of being present.",
};

export default function RetreatsPage() {
  return <AllRetreats />;
}
