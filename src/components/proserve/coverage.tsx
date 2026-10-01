"use client";

import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading, SectionShell } from "./section-shell";
import { COVERAGE_AREAS } from "./site-data";

export function Coverage() {
  const marqueeAreas = [...COVERAGE_AREAS, ...COVERAGE_AREAS];

  return (
    <SectionShell id="coverage" className="bg-[#161514] border-y border-white/5 overflow-hidden">
      <SectionHeading
        eyebrow="Where we work"
        title="Proudly local to the"
        highlight="Vaal & South of Joburg"
        description="Based in Midvaal, we cover the greater Vaal Triangle and Johannesburg South. Being nearby means faster installs, faster repairs and a team that knows your area."
      />

      <div className="relative mt-14">
        {/* Marquee */}
        <div
          className="relative flex overflow-hidden border-y border-white/8 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-hidden
        >
          <div className="animate-marquee flex shrink-0 items-center gap-4 pr-4">
            {marqueeAreas.map((area, i) => (
              <span
                key={`${area}-${i}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/4 px-5 py-2.5 text-[14px] font-semibold text-foreground/85"
              >
                <MapPin className="size-4 text-primary" />
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/8 bg-card/80 p-7 sm:p-8">
              <div className="flex items-center gap-3.5">
                <span className="grid place-items-center size-11 rounded-xl bg-primary/12 border border-primary/25">
                  <Navigation className="size-5.5 text-primary" />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  Not sure if you&apos;re in our area?
                </h3>
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
                If you&apos;re in or around Midvaal, Meyerton, Vanderbijlpark, Vereeniging,
                Alberton, Johannesburg South or Sasolburg — we&apos;ve got you covered. And if
                you&apos;re just outside that circle, give us a call anyway; we regularly
                travel for larger installations and estates.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {COVERAGE_AREAS.slice(0, 8).map((area) => (
                  <span
                    key={area}
                    className="rounded-lg border border-white/10 bg-white/4 px-3.5 py-2 text-[12.5px] font-medium text-foreground/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full rounded-2xl border border-white/8 bg-card/80 p-7 sm:p-8 overflow-hidden">
              <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" aria-hidden />
              <div className="relative">
                <div className="font-display text-4xl font-extrabold text-gradient-amber">12+</div>
                <p className="mt-1.5 text-[13.5px] font-semibold text-foreground">
                  suburbs & towns served
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">
                  One local hub in Midvaal means shorter travel times for installations,
                  servicing and emergency call-outs across the whole region.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
