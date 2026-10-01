"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV_LINKS, whatsappLink } from "./site-data";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="Proserve Security home">
      <span className="relative grid place-items-center size-10 rounded-xl bg-primary/10 border border-primary/25 transition-colors group-hover:bg-primary/20">
        <ShieldCheck className="size-5.5 text-primary" strokeWidth={2.2} />
        <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-primary rec-dot" aria-hidden />
      </span>
      <span className="leading-none">
        <span className="font-display block text-[17px] font-extrabold tracking-wide text-foreground">
          PROSERVE
        </span>
        <span className="block text-[10.5px] font-semibold tracking-[0.32em] text-primary">
          SECURITY
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-[#141312] border-b border-white/5 text-[12.5px]">
        <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between text-muted-foreground">
          <p className="tracking-wide">Serving {CONTACT.area}</p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:text-primary transition-colors"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phoneManieIntl}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="size-3.5 text-primary" /> Manie {CONTACT.phoneManie}
            </a>
            <a
              href={`tel:${CONTACT.phonePeterIntl}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="size-3.5 text-primary" /> Peter {CONTACT.phonePeter}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#181715e0] backdrop-blur-xl border-white/8 shadow-[0_8px_30px_rgb(0_0_0/0.35)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-[13.5px] font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${CONTACT.phoneManieIntl}`}
              className="hidden sm:flex lg:hidden xl:flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <span className="grid place-items-center size-9 rounded-full border border-primary/30 bg-primary/10">
                <Phone className="size-4 text-primary" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
                  Call now
                </span>
                {CONTACT.phoneManie}
              </span>
            </a>
            <Button
              asChild
              className="hidden sm:inline-flex font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_24px_-6px] shadow-primary/50"
            >
              <a href="/#quote">Get Free Quote</a>
            </Button>
            <button
              className="lg:hidden grid place-items-center size-10 rounded-lg border border-white/10 bg-white/5 text-foreground"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[64px] z-40 bg-[#161514fa] backdrop-blur-xl transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col gap-1 p-5 pt-8" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-4 rounded-xl text-lg font-semibold text-foreground hover:bg-white/5 transition-all ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 grid gap-2.5">
            <Button asChild size="lg" className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/#quote" onClick={() => setOpen(false)}>
                Get Free Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold border-primary/40 text-primary hover:bg-primary/10">
              <a href={`tel:${CONTACT.phoneManieIntl}`}>
                <Phone className="size-4" /> Call Manie — {CONTACT.phoneManie}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold border-white/15 hover:bg-white/5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
