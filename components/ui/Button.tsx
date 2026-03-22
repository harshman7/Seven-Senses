"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "ghost" | "filled";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "ghost",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-body text-[0.75rem] tracking-[0.2em] uppercase transition-all duration-500 px-8 py-3.5";

  const variants = {
    ghost:
      "border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-linen",
    filled:
      "bg-charcoal text-linen hover:bg-charcoal-light",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.3 }}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.3 }}
      aria-label={ariaLabel ?? undefined}
    >
      {children}
    </motion.button>
  );
}
