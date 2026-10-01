"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT, whatsappLink } from "./site-data";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <AnimatePresence>
        {show && (
          <motion.a
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden md:grid fixed bottom-6 right-6 z-40 place-items-center size-14 rounded-full bg-emerald-500 text-white shadow-[0_12px_40px_-8px] shadow-emerald-500/60 transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full border-2 border-emerald-400/50 rec-dot" aria-hidden />
            <MessageCircle className="size-6.5" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#191817f5] backdrop-blur-xl px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${CONTACT.phoneManieIntl}`}
            className="flex items-center justify-center gap-2 h-11 rounded-xl bg-primary text-[13.5px] font-bold text-primary-foreground"
          >
            <Phone className="size-4" /> Call Now
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-11 rounded-xl border border-emerald-500/40 bg-emerald-500/15 text-[13.5px] font-bold text-emerald-300"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a
            href="/#quote"
            className="flex items-center justify-center h-11 rounded-xl border border-white/15 bg-white/8 text-[13.5px] font-bold text-foreground"
          >
            Free Quote
          </a>
        </div>
      </div>
    </>
  );
}
