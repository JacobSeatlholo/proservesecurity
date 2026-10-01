"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading, SectionShell } from "./section-shell";
import { SERVICES } from "./site-data";

export function Services() {
  return (
    <SectionShell id="services">
      <SectionHeading
        eyebrow="What we do"
        title="Complete technical security,"
        highlight="under one roof"
        description="From cameras at your gate to verified guard patrols — we supply, install, monitor and repair the systems that keep your property safe. One local, accountable team."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 0.08}>
            <a
              href={service.href}
              className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-card/80 p-6 transition-all duration-300 hover:border-primary/35 hover:bg-card hover:shadow-[0_20px_60px_-20px] hover:shadow-primary/15 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <span className="grid place-items-center size-12 rounded-xl bg-primary/12 border border-primary/25 transition-colors group-hover:bg-primary/20">
                  <service.icon className="size-6 text-primary" strokeWidth={1.9} />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground/50 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="mt-5 font-display text-[19px] font-bold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-1 text-[13px] font-semibold text-primary">{service.tagline}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
