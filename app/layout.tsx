import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Seven Senses — Bespoke Global Retreats",
  description:
    "Seven Senses curates transcendent retreat experiences for those who seek stillness, wonder, and restoration in the world's most considered destinations.",
  openGraph: {
    title: "Seven Senses — Bespoke Global Retreats",
    description:
      "Where stillness becomes clarity. Bespoke retreats across Kyoto, Patagonia, the Maldives, and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body font-light">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
