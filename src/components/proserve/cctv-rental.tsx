"use client";

import { BadgeCheck, Check, Phone, PiggyBank } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading, SectionShell } from "./section-shell";
import { Button } from "@/components/ui/button";
import { CCTV_PACKAGES, CONTACT } from "./site-data";

export function CctvRental() {
  return (
    <SectionShell id="cctv-rental" className="bg-[#161514] border-y border-white/5">
      <SectionHeading
        eyebrow="Most popular · CCTV rental"
        title="A full CCTV system from"
        highlight="R699 per month"
        description="No deposit. No installation invoice. No maintenance bills. One affordable monthly rental covers the equipment, professional installation and ongoing servicing — and you can watch your property from anywhere."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
        {CCTV_PACKAGES.map((pkg, i) => (
          <Reveal key={pkg.name} delay={i * 0.1}>
            <div
              className={`relative flex h-full flex-col rounded-2xl border p-7 sm:p-8 transition-all duration-300 ${
                pkg.featured
                  ? "border-primary/45 bg-gradient-to-b from-primary/12 via-card to-card shadow-[0_30px_80px_-30px] shadow-primary/25"
                  : "border-white/8 bg-card/80 hover:border-white/20"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-7 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/30">
                  <BadgeCheck className="size-3.5" /> Best value
                </span>
              )}

              <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
                {pkg.name}
              </h3>
              <p className="mt-1 text-[13.5px] text-muted-foreground">{pkg.subtitle}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-[13px] font-semibold text-muted-foreground mb-1.5">From</span>
                <span
                  className={`font-display text-5xl font-extrabold tracking-tight tabular-nums ${
                    pkg.featured ? "text-gradient-amber" : "text-foreground"
                  }`}
                >
                  {pkg.price}
                </span>
                <span className="text-[13.5px] font-medium text-muted-foreground mb-1.5">/ month</span>
              </div>

              <ul className="mt-7 flex flex-col gap-3 border-t border-white/8 pt-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[14px] text-foreground/90">
                    <span className="mt-0.5 grid place-items-center size-4.5 rounded-full bg-primary/15 border border-primary/30 shrink-0">
                      <Check className="size-3 text-primary" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2 mt-auto">
                <Button
                  asChild
                  size="lg"
                  className={`w-full h-12 font-bold ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_36px_-10px] shadow-primary/60"
                      : "bg-white/8 text-foreground hover:bg-white/12 border border-white/10"
                  }`}
                >
                  <a href="/#quote">Get This System — Free Quote</a>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-10 max-w-4xl lg:mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl border border-primary/20 bg-primary/8 px-6 py-5">
          <span className="grid place-items-center size-11 rounded-xl bg-primary/15 border border-primary/30 shrink-0">
            <PiggyBank className="size-5.5 text-primary" />
          </span>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Indicative pricing for demo purposes</strong> — your exact
            monthly rate is confirmed after a free on-site assessment, based on your property layout and
            coverage needs. Prefer to buy outright? We do that too.
            <a
              href={`tel:${CONTACT.phonePeterIntl}`}
              className="ml-1 inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              Ask Peter {CONTACT.phonePeter} <Phone className="size-3.5" />
            </a>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
