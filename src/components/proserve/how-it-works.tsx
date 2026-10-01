"use client";

import { CalendarCheck, ClipboardList, Wrench } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading, SectionShell } from "./section-shell";

const STEPS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Free on-site assessment",
    description:
      "We visit your property, walk the perimeter with you and identify the blind spots that actually matter — no obligation, no charge.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Tailored quote within 48h",
    description:
      "You receive a clear, itemised quote for the right 4 or 8 zone system for your layout — with the monthly rental option spelled out in plain language.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Installed & supported",
    description:
      "Our technicians install, configure your phone viewing and hand over a working system. Servicing and support continue for as long as you rent.",
  },
];

export function HowItWorks() {
  return (
    <SectionShell id="how-it-works">
      <SectionHeading
        eyebrow="Simple process"
        title="Protected in"
        highlight="three easy steps"
        description="From first phone call to a fully working system, most customers are protected within days — not weeks."
      />

      <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
        {/* Connector line */}
        <div
          className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"
          aria-hidden
        />
        {STEPS.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.12} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <span className="grid place-items-center size-14 rounded-2xl bg-primary/12 border border-primary/30 rotate-3">
                  <step.icon className="size-6.5 text-primary -rotate-3" strokeWidth={1.9} />
                </span>
                <span className="absolute -top-2 -right-2.5 grid place-items-center size-6 rounded-full bg-primary text-[11px] font-extrabold text-primary-foreground shadow-md shadow-primary/40">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
