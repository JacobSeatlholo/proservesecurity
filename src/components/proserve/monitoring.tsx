"use client";

import Image from "next/image";
import { MailWarning, MonitorSmartphone, Radar, FileCheck2 } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

const FEATURES = [
  {
    icon: FileCheck2,
    title: "Daily email reports",
    description:
      "Every patrol scan is verified and compiled into a daily report emailed straight to you — proof of the service you're paying for.",
  },
  {
    icon: MailWarning,
    title: "Instant breach alerts",
    description:
      "Missed patrol checkpoints and stay-awake alert breaches trigger an immediate notification to you and our control room.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote mobile viewing",
    description:
      "Check your CCTV footage live from your phone, wherever you are — configured with you on installation day.",
  },
  {
    icon: Radar,
    title: "Off-site monitoring ready",
    description:
      "Connect your system to off-site monitoring so suspicious activity is watched and responded to even when you sleep.",
  },
];

export function Monitoring() {
  return (
    <SectionShell id="monitoring" grid={false} className="bg-[#161514] border-y border-white/5">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl scanline">
            <Image
              src="/images/control-room.jpg"
              alt="Proserve control room monitoring CCTV feeds"
              width={1344}
              height={768}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-cover"
            />
            {/* REC overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-md bg-black/60 backdrop-blur px-3 py-1.5 text-[11px] font-bold tracking-widest text-white/90">
              <span className="size-2 rounded-full bg-red-500 rec-dot" />
              LIVE · CONTROL ROOM
            </div>
            <div className="absolute bottom-4 right-4 rounded-md bg-black/60 backdrop-blur px-3 py-1.5 text-[11px] font-mono tracking-wider text-primary">
              CAM 04 — GATE
            </div>
          </div>
          {/* floating card */}
          <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:-right-5 sm:w-64 rounded-xl border border-white/10 bg-popover/95 backdrop-blur p-4 shadow-xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Daily report status
            </p>
            <div className="mt-2.5 flex items-center gap-2.5">
              <span className="grid place-items-center size-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30">
                <FileCheck2 className="size-4.5 text-emerald-400" />
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-foreground">All patrols verified</p>
                <p className="text-[11.5px] text-muted-foreground">Emailed to you · 07:00 daily</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy side */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11.5px] font-bold tracking-[0.18em] uppercase text-primary">
              <span className="size-1.5 rounded-full bg-primary rec-dot" aria-hidden />
              Control room
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.1] tracking-tight text-foreground text-balance">
              Someone is always <span className="text-gradient-amber">watching the watchers</span>
            </h2>
            <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-muted-foreground">
              Cameras and guards only work when someone verifies them. Our control room
              checks every scan, every alert and every patrol — and keeps you in the loop
              automatically, every single day.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={0.1 + i * 0.07}>
                <div className="flex gap-3.5">
                  <span className="grid place-items-center size-10 rounded-lg bg-primary/12 border border-primary/25 shrink-0">
                    <feature.icon className="size-5 text-primary" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">{feature.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
