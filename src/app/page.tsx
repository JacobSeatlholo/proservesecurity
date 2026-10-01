import { Navbar } from "@/components/proserve/navbar";
import { Hero } from "@/components/proserve/hero";
import { Stats } from "@/components/proserve/stats";
import { Services } from "@/components/proserve/services";
import { CctvRental } from "@/components/proserve/cctv-rental";
import { HowItWorks } from "@/components/proserve/how-it-works";
import { Monitoring } from "@/components/proserve/monitoring";
import { WhyUs } from "@/components/proserve/why-us";
import { Coverage } from "@/components/proserve/coverage";
import { Testimonials } from "@/components/proserve/testimonials";
import { Faq } from "@/components/proserve/faq";
import { QuoteForm } from "@/components/proserve/quote-form";
import { Footer } from "@/components/proserve/footer";
import { FloatingActions } from "@/components/proserve/floating-actions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <CctvRental />
        <HowItWorks />
        <Monitoring />
        <WhyUs />
        <Coverage />
        <Testimonials />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
      {/* Spacer so the mobile sticky bar never covers footer content */}
      <div className="md:hidden h-[72px] bg-[#121110]" aria-hidden />
      <FloatingActions />
    </div>
  );
}
