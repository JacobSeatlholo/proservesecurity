"use client";

import { Counter, Reveal } from "./reveal";

const STATS = [
  { value: 24, suffix: "/7", label: "Control room & emergency response" },
  { value: 100, suffix: "%", label: "Servicing included on rental systems" },
  { value: 8, suffix: "", label: "Camera zones available per system" },
  { value: 0, suffix: "", label: "Upfront cost on monthly rental", zero: true },
] as const;

export function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-[#161514]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="px-5 sm:px-8 py-8 sm:py-10">
              <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-primary tabular-nums">
                {stat.zero ? (
                  <>R{stat.value}</>
                ) : (
                  <Counter to={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-2 text-[13px] leading-snug text-muted-foreground max-w-[22ch]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
