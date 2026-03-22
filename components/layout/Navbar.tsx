"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "Retreats", href: "/retreats" },
  { label: "About", href: "/about" },
  { label: "Inquire", href: "/inquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const showFrosted = scrolled || !isHome;

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          showFrosted
            ? "bg-linen/70 backdrop-blur-xl shadow-[0_1px_0_rgba(138,158,140,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 md:h-22 lg:h-24 max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20">
          <Link
            href="/"
            className={`font-serif text-lg md:text-xl tracking-[0.3em] transition-colors duration-500 ${
              showFrosted ? "text-charcoal" : "text-linen"
            }`}
            aria-label="Seven Senses — Home"
          >
            SEVEN SENSES
          </Link>

          <div className="hidden items-center gap-8 md:flex lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-body text-[0.7rem] font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                    showFrosted
                      ? isActive
                        ? "text-charcoal"
                        : "text-charcoal/50 hover:text-charcoal"
                      : isActive
                        ? "text-linen"
                        : "text-linen/60 hover:text-linen"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu
              className={`h-5 w-5 transition-colors duration-500 ${
                showFrosted ? "text-charcoal" : "text-linen"
              }`}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-linen flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-6 top-7"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6 text-charcoal" strokeWidth={1.5} />
            </button>

            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl tracking-[0.15em] text-charcoal"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <p className="absolute bottom-10 font-body text-[0.65rem] tracking-[0.15em] uppercase text-charcoal/30">
              By invitation and inquiry only
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
