"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { SectionHeading, SectionShell } from "./section-shell";
import { FAQS, CONTACT } from "./site-data";

export function Faq() {
  return (
    <SectionShell id="faq">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions?"
            highlight="Answered."
            description="Everything customers usually ask before their first quote. Still unsure about something? Call us — a human answers."
            align="left"
          />
          <Reveal delay={0.15}>
            <a
              href={`tel:${CONTACT.phoneManieIntl}`}
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/8 px-5 py-4 transition-colors hover:bg-primary/15"
            >
              <span className="grid place-items-center size-10 rounded-full bg-primary text-primary-foreground font-display font-extrabold">
                ?
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Ask us directly
                </span>
                <span className="block text-[15px] font-bold text-foreground">
                  Manie — {CONTACT.phoneManie}
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-white/8">
                <AccordionTrigger className="text-left text-[15.5px] font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </SectionShell>
  );
}
