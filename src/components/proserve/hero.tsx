"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, whatsappLink } from "./site-data";

const trustItems = [
  { icon: BadgeCheck, label: "No upfront cost" },
  { icon: ShieldCheck, label: "Supply & install included" },
  { icon: Star, label: "Time-proven systems" },
  { icon: MapPin, label: "Local Midvaal team" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#121110]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cctv.jpg"
          alt="CCTV camera protecting a home at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110] via-[#121110d1] to-[#12111059]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-[#12111099]" />
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-3xl">
          {/* Live feed badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[12.5px] font-semibold tracking-wide text-primary"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 rec-dot" />
              <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
            </span>
            REC · YOUR PROPERTY, WATCHED 24/7
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.04] tracking-tight text-foreground text-balance"
          >
            Security systems that <span className="text-gradient-amber">prove themselves</span> — every single day.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            Proserve Security supplies, installs and monitors time-proven CCTV, access
            control and patrol systems for homes, estates and businesses across Midvaal
            and the Vaal Triangle. <strong className="text-foreground font-semibold">Rent a complete CCTV system with zero upfront cost</strong> —
            equipment, installation and servicing all included.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-8 flex flex-col sm:flex-row gap-3.5"
          >
            <Button
              asChild
              size="lg"
              className="h-13 px-7 text-[15px] font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_40px_-10px] shadow-primary/60"
            >
              <a href="/#quote">
                Get My Free Quote <ArrowRight className="size-4.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 px-7 text-[15px] font-semibold border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 hover:text-foreground"
            >
              <a href={`tel:${CONTACT.phoneManieIntl}`}>
                <Phone className="size-4.5 text-primary" />
                Call Manie — {CONTACT.phoneManie}
              </a>
            </Button>
          </motion.div>

          {/* Trust chips */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-[13.5px] font-medium text-foreground/85">
                <span className="grid place-items-center size-6 rounded-full bg-primary/15 border border-primary/25">
                  <item.icon className="size-3.5 text-primary" />
                </span>
                {item.label}
              </li>
            ))}
          </motion.ul>

          {/* WhatsApp inline link for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="mt-6 sm:hidden"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary underline underline-offset-4"
            >
              Or WhatsApp us right now →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
