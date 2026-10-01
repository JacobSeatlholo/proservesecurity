"use client";

import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignCls}`}>
      <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11.5px] font-bold tracking-[0.18em] uppercase text-primary">
        <span className="size-1.5 rounded-full bg-primary rec-dot" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.1] tracking-tight text-foreground text-balance">
        {title} {highlight && <span className="text-gradient-amber">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function SectionShell({
  id,
  children,
  className = "",
  grid = true,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  grid?: boolean;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 scroll-mt-20 ${className}`}>
      {grid && (
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" aria-hidden />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
