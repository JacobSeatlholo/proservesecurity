"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";
import { WHY_US } from "./site-data";
import { Button } from "@/components/ui/button";

export function WhyUs() {
  return (
    <SectionShell id="why-us">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-center">
        {/* Image + copy */}
        <div>
          <Reveal className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11.5px] font-bold tracking-[0.18em] uppercase text-primary">
              <span className="size-1.5 rounded-full bg-primary rec-dot" aria-hidden />
              Why Proserve
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.1] tracking-tight text-foreground text-balance">
              Big-company systems. <span className="text-gradient-amber">Neighbour-level service.</span>
            </h2>
            <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-muted-foreground">
              We&apos;re a local Midvaal team that believes security should be measured in
              response time, not marketing spend. Here&apos;s what working with us looks like.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-8 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/technician.jpg"
                alt="Proserve technician installing a CCTV camera"
                width={1152}
                height={864}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[13px] font-semibold text-white/95">
                  Qualified technicians · neat cabling · done right the first time
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="mt-8">
            <Button
              asChild
              size="lg"
              className="h-12 px-6 font-bold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="/#quote">
                Book my free assessment <ArrowRight className="size-4.5" />
              </a>
            </Button>
          </Reveal>
        </div>

        {/* Value props */}
        <div className="grid gap-4 sm:grid-cols-2">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.08 + Math.floor(i / 2) * 0.05}>
              <div className="h-full rounded-xl border border-white/8 bg-card/70 p-5 transition-colors hover:border-primary/30">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[13px] font-extrabold tracking-widest text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/8" aria-hidden />
                </div>
                <h3 className="mt-3.5 font-display text-[17px] font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
