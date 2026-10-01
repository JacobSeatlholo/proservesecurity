"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICES, whatsappLink } from "./site-data";

export function Footer() {
  return (
    <footer className="relative bg-[#121110] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center size-10 rounded-xl bg-primary/10 border border-primary/25">
                <ShieldCheck className="size-5.5 text-primary" strokeWidth={2.2} />
              </span>
              <span className="leading-none">
                <span className="font-display block text-[17px] font-extrabold tracking-wide text-foreground">
                  PROSERVE
                </span>
                <span className="block text-[10.5px] font-semibold tracking-[0.32em] text-primary">
                  SECURITY
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-[38ch] text-[13.5px] leading-relaxed text-muted-foreground">
              We provide the best time-proven security systems — CCTV rental, guard patrol
              management, access control and number plate recognition — to homes, estates
              and businesses across the Vaal Triangle and Johannesburg South.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-foreground/80">
              Quick links
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/#quote"
                  className="text-[13.5px] text-muted-foreground transition-colors hover:text-primary"
                >
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-foreground/80">
              Services
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a
                    href="/#services"
                    className="text-[13.5px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-foreground/80">
              Contact
            </h3>
            <ul className="mt-4 grid gap-3.5 text-[13.5px]">
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                Midvaal, Gauteng — serving {CONTACT.area}
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <a href={`tel:${CONTACT.phoneManieIntl}`} className="hover:text-primary transition-colors">
                    Manie — {CONTACT.phoneManie}
                  </a>
                  <br />
                  <a href={`tel:${CONTACT.phonePeterIntl}`} className="hover:text-primary transition-colors">
                    Peter — {CONTACT.phonePeter}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-primary transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-[13px] font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/5 pt-7">
          <p className="text-[12.5px] text-muted-foreground">
            © {new Date().getFullYear()} Proserve Security. All rights reserved.
          </p>
          <p className="text-[12px] text-muted-foreground/60">
            Demo website concept · prices indicative pending free on-site assessment
          </p>
        </div>
      </div>
    </footer>
  );
}
