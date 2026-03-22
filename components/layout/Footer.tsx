import { Instagram } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "Retreats", href: "/retreats" },
  { label: "About", href: "/about" },
  { label: "Inquire", href: "/inquire" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sage/15 bg-linen">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-12">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.3em] text-charcoal"
            aria-label="Seven Senses — Home"
          >
            SEVEN SENSES
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[0.65rem] font-light tracking-[0.2em] uppercase text-charcoal/40 transition-colors duration-300 hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Seven Senses on Instagram"
            className="text-charcoal/30 transition-colors duration-300 hover:text-charcoal"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <p className="font-body text-[0.6rem] font-light tracking-[0.15em] uppercase text-charcoal/25">
            By invitation and inquiry only · &copy; {new Date().getFullYear()} Seven Senses
          </p>
        </div>
      </div>
    </footer>
  );
}
