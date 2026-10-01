"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitLead, type LeadFormState } from "@/app/actions";
import { Reveal } from "./reveal";
import { CONTACT, SERVICE_OPTIONS, whatsappLink } from "./site-data";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="w-full h-13 text-[15px] font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_40px_-10px] shadow-primary/60"
    >
      {pending ? (
        <>
          <Loader2 className="size-4.5 animate-spin" /> Sending your request…
        </>
      ) : (
        <>
          <Send className="size-4.5" /> Request My Free Quote
        </>
      )}
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction, pending] = useActionState<LeadFormState | null, FormData>(
    submitLead,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);
  const prevPending = useRef(pending);

  useEffect(() => {
    if (prevPending.current && !pending && state?.ok) {
      toast.success("Request received!", {
        description:
          "Thank you — our team will call you back to arrange your free assessment. For anything urgent, call Manie on 071 087 2091.",
        duration: 7000,
      });
      formRef.current?.reset();
    }
    if (prevPending.current && !pending && state && !state.ok && state.error) {
      toast.error(state.error, { duration: 6000 });
    }
    prevPending.current = pending;
  }, [pending, state]);

  return (
    <section id="quote" className="relative py-20 sm:py-24 scroll-mt-20 bg-[#161514] border-t border-white/5">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          {/* Form */}
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11.5px] font-bold tracking-[0.18em] uppercase text-primary">
              <span className="size-1.5 rounded-full bg-primary rec-dot" aria-hidden />
              Free quote · No obligation
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.1] tracking-tight text-foreground text-balance">
              Tell us what you need <span className="text-gradient-amber">protected</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
              Fill in the form and we&apos;ll call you back to arrange your free on-site
              assessment. Most quotes are delivered within 48 hours.
            </p>

            <form ref={formRef} action={formAction} className="mt-8 grid gap-5 sm:grid-cols-2" noValidate>
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-[13px] font-semibold text-foreground/90">
                  Full name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Thabo Mokoena"
                  autoComplete="name"
                  className="h-11 bg-white/5 border-white/10 placeholder:text-muted-foreground/50"
                />
                {state?.fieldErrors?.name && (
                  <p className="text-[12px] text-red-400">{state.fieldErrors.name}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-[13px] font-semibold text-foreground/90">
                  Contact number <span className="text-primary">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g. 082 123 4567"
                  autoComplete="tel"
                  className="h-11 bg-white/5 border-white/10 placeholder:text-muted-foreground/50"
                />
                {state?.fieldErrors?.phone && (
                  <p className="text-[12px] text-red-400">{state.fieldErrors.phone}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[13px] font-semibold text-foreground/90">
                  Email <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.co.za"
                  autoComplete="email"
                  className="h-11 bg-white/5 border-white/10 placeholder:text-muted-foreground/50"
                />
                {state?.fieldErrors?.email && (
                  <p className="text-[12px] text-red-400">{state.fieldErrors.email}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="suburb" className="text-[13px] font-semibold text-foreground/90">
                  Suburb / town
                </Label>
                <Input
                  id="suburb"
                  name="suburb"
                  placeholder="e.g. Meyerton"
                  className="h-11 bg-white/5 border-white/10 placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="grid gap-2 sm:col-span-2">
                <Label className="text-[13px] font-semibold text-foreground/90">
                  What are you interested in? <span className="text-primary">*</span>
                </Label>
                <ServiceSelect error={state?.fieldErrors?.service} />
                {state?.fieldErrors?.service && (
                  <p className="text-[12px] text-red-400">{state.fieldErrors.service}</p>
                )}
              </div>

              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message" className="text-[13px] font-semibold text-foreground/90">
                  Tell us about your property <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="e.g. Double storey house in a complex, want cameras covering the gate, driveway and back yard…"
                  className="bg-white/5 border-white/10 placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <SubmitButton pending={pending} />
                <p className="mt-3 text-center text-[12px] text-muted-foreground">
                  By submitting you agree to be contacted about your enquiry. No spam — ever.
                </p>
              </div>
            </form>
          </Reveal>

          {/* Contact info */}
          <div className="grid content-start gap-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/8 bg-card/80 p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                  Prefer to talk to a human?
                </h3>
                <p className="mt-1.5 text-[13.5px] text-muted-foreground">
                  Call or WhatsApp us directly — we&apos;re friendly like that.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    href={`tel:${CONTACT.phoneManieIntl}`}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/8 bg-white/4 p-4 transition-colors hover:border-primary/35"
                  >
                    <span className="grid place-items-center size-11 rounded-xl bg-primary/12 border border-primary/25">
                      <Phone className="size-5 text-primary" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Manie
                      </span>
                      <span className="block text-[16px] font-bold text-foreground group-hover:text-primary transition-colors">
                        {CONTACT.phoneManie}
                      </span>
                    </span>
                  </a>
                  <a
                    href={`tel:${CONTACT.phonePeterIntl}`}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/8 bg-white/4 p-4 transition-colors hover:border-primary/35"
                  >
                    <span className="grid place-items-center size-11 rounded-xl bg-primary/12 border border-primary/25">
                      <Phone className="size-5 text-primary" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Peter
                      </span>
                      <span className="block text-[16px] font-bold text-foreground group-hover:text-primary transition-colors">
                        {CONTACT.phonePeter}
                      </span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/8 bg-white/4 p-4 transition-colors hover:border-primary/35"
                  >
                    <span className="grid place-items-center size-11 rounded-xl bg-primary/12 border border-primary/25">
                      <Mail className="size-5 text-primary" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Email
                      </span>
                      <span className="block text-[14.5px] font-bold text-foreground group-hover:text-primary transition-colors truncate">
                        {CONTACT.email}
                      </span>
                    </span>
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 rounded-xl border border-emerald-500/25 bg-emerald-500/8 p-4 transition-colors hover:border-emerald-500/50"
                  >
                    <span className="grid place-items-center size-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                      <MessageCircle className="size-5 text-emerald-400" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        WhatsApp
                      </span>
                      <span className="block text-[16px] font-bold text-foreground group-hover:text-emerald-300 transition-colors">
                        Chat now
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-white/8 bg-card/80 p-6 sm:p-7">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground">
                  <CheckCircle2 className="size-5 text-primary" /> Trading hours
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {CONTACT.hours}
                </p>
                <div className="mt-4 rounded-lg border border-primary/20 bg-primary/8 px-4 py-3 text-[13px] leading-relaxed text-foreground/85">
                  <strong className="text-primary">Emergencies:</strong> existing rental
                  clients get 24/7 support — your system reports faults to us automatically.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceSelect({ error }: { error?: string }) {
  return (
    <Select name="service" required>
      <SelectTrigger
        className={`h-11 w-full bg-white/5 border-white/10 data-[placeholder]:text-muted-foreground/60 ${
          error ? "border-red-400/60" : ""
        }`}
      >
        <SelectValue placeholder="Choose a service…" />
      </SelectTrigger>
      <SelectContent className="bg-popover border-white/10">
        {SERVICE_OPTIONS.map((option) => (
          <SelectItem key={option} value={option} className="text-[14px]">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
