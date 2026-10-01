"use client";

import { Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading, SectionShell } from "./section-shell";
import { TESTIMONIALS } from "./site-data";

export function Testimonials() {
  return (
    <SectionShell id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by homes & estates"
        highlight="across the Vaal"
        description="Real feedback from customers who chose the rental model and never looked back."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="relative flex h-full flex-col rounded-2xl border border-white/8 bg-card/80 p-7 transition-colors hover:border-primary/25">
              <Quote className="absolute top-6 right-6 size-8 text-primary/15" aria-hidden />
              <div className="flex gap-1" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/8 pt-4">
                <p className="text-[14px] font-bold text-foreground">{t.name}</p>
                <p className="text-[12.5px] text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-6 text-center text-[12px] text-muted-foreground/70">
          Sample testimonials shown for demo purposes.
        </p>
      </Reveal>
    </SectionShell>
  );
}
