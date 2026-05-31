"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  label?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  label,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative px-6 py-24 md:py-32 lg:px-12 ${className}`}
    >
      {label && (
        <p className="mb-4 text-center font-montserrat text-[11px] uppercase tracking-[0.35em] text-white/40">
          {label}
        </p>
      )}
      {children}
    </section>
  );
}

export function GoldDivider() {
  return (
    <div className="mx-auto mb-12 flex max-w-xs items-center gap-5">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <span className="text-sm text-gold/70">✦</span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}

export function GoldButton({
  children,
  onClick,
  href,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const classes = `inline-block border border-gold px-10 py-3.5 font-montserrat text-[11px] uppercase tracking-[0.3em] text-gold transition-all duration-400 hover:bg-gold hover:text-luxury-black hover:shadow-gold ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
