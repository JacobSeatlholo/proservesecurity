import { Cctv, ShieldCheck, ScanFace, CarFront, Siren, Wrench } from "lucide-react";

export const CONTACT = {
  phoneManie: "071 087 2091",
  phoneManieIntl: "+27710872091",
  phonePeter: "082 719 9087",
  phonePeterIntl: "+27827199087",
  email: "peter@proservesecurity.co.za",
  whatsapp: "27710872091",
  whatsappMessage:
    "Hi Proserve Security! I'm looking for a security / CCTV setup. Please can you send me more info and a free quote?",
  area: "Midvaal · Meyerton · Vaal Triangle · Johannesburg South",
  hours: "Mon–Fri 08:00–17:00 · Sat 08:00–13:00 · Emergencies 24/7",
};

export const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  CONTACT.whatsappMessage
)}`;

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "CCTV Rental", href: "/#cctv-rental" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Coverage", href: "/#coverage" },
  { label: "FAQ", href: "/#faq" },
];

export const SERVICES = [
  {
    icon: Cctv,
    title: "CCTV Systems",
    tagline: "Rent or buy — view from anywhere",
    description:
      "4 or 8 zone CCTV systems on affordable monthly rental with supply and installation included — no upfront costs. Watch live or recorded footage from your phone, anywhere in the world.",
    href: "/#cctv-rental",
  },
  {
    icon: ShieldCheck,
    title: "Guard Patrol Management",
    tagline: "100% control over your guards",
    description:
      "Our all-in-one guard patrol management system verifies every checkpoint scan. Our control room emails you a daily report and alerts you the moment a patrol is missed — all on monthly rental with full service included.",
    href: "/#quote",
  },
  {
    icon: ScanFace,
    title: "Access Control",
    tagline: "Know exactly who is on site",
    description:
      "Access control scanners, booms and intercom integrations for estates, complexes and businesses. Control and log every entry — vehicles and personnel — with reliable, time-proven hardware.",
    href: "/#quote",
  },
  {
    icon: CarFront,
    title: "Number Plate Recognition",
    tagline: "ANPR cameras at your gate",
    description:
      "High-speed ANPR camera systems that read plates day and night, log every vehicle entering your property and flag unwanted plates automatically — ideal for estates, businesses and yards.",
    href: "/#quote",
  },
  {
    icon: Siren,
    title: "Alarm Systems",
    tagline: "Indoor & perimeter protection",
    description:
      "Supply, installation and repair of alarm systems for homes and businesses — from indoor detectors to electric fences and gate motors, backed by off-site monitoring when you need it.",
    href: "/#quote",
  },
  {
    icon: Wrench,
    title: "Technical Installs & Repairs",
    tagline: "Fast, qualified, local",
    description:
      "We supply, install and repair CCTV systems, alarm systems, gate motors, access booms and electric fencing. One local team for your entire technical security footprint.",
    href: "/#quote",
  },
] as const;

export const CCTV_PACKAGES = [
  {
    name: "4-Zone Home",
    subtitle: "Homes & small businesses",
    price: "R699",
    features: [
      "4× HD cameras (4 zones covered)",
      "DVR / recorder + cabling included",
      "Professional installation included",
      "Remote viewing on your phone",
      "All servicing & maintenance included",
      "No upfront cost — simple monthly rental",
    ],
    featured: false,
  },
  {
    name: "8-Zone Estate",
    subtitle: "Estates, complexes & businesses",
    price: "R1,199",
    features: [
      "8× HD cameras (8 zones covered)",
      "Night-vision optimized coverage",
      "DVR / recorder + cabling included",
      "Professional installation included",
      "Remote viewing on your phone",
      "Off-site monitoring ready",
      "All servicing & maintenance included",
      "No upfront cost — simple monthly rental",
    ],
    featured: true,
  },
] as const;

export const WHY_US = [
  {
    title: "Zero upfront cost",
    description:
      "Security shouldn't wait for a savings plan. Our rental model covers supply and installation — you only pay an affordable monthly fee.",
  },
  {
    title: "Everything included",
    description:
      "Equipment, installation, servicing and maintenance are bundled into one simple monthly rental. No surprise call-out invoices.",
  },
  {
    title: "Time-proven systems",
    description:
      "We only fit hardware we trust — the same systems we monitor and maintain daily across homes, estates and businesses.",
  },
  {
    title: "Control-room backed",
    description:
      "Daily patrol reports, stay-awake alerts and off-site monitoring mean someone is watching even when you can't.",
  },
  {
    title: "Local & fast",
    description:
      "Based in Midvaal and serving the Vaal Triangle — when something needs attention, we are nearby, not a national call centre queue.",
  },
  {
    title: "One team, full stack",
    description:
      "CCTV, alarms, gate motors, booms, electric fencing, access control and patrols — one accountable technical partner.",
  },
] as const;

export const COVERAGE_AREAS = [
  "Midvaal",
  "Meyerton",
  "Vanderbijlpark",
  "Vereeniging",
  "Vaal Triangle",
  "Johannesburg South",
  "Alberton",
  "Sasolburg",
  "Walkerville",
  "Henley on Klip",
  "Three Rivers",
  "Drie Riviere",
] as const;

export const FAQS = [
  {
    q: "How does the monthly CCTV rental work?",
    a: "We supply and professionally install a complete 4 or 8 zone CCTV system at your property — cameras, recorder, cabling and configuration. You pay one affordable monthly rental with no upfront cost, and servicing and maintenance are included for the duration of the rental. If anything goes wrong, we fix it at no extra cost.",
  },
  {
    q: "Can I view my cameras when I'm away from home?",
    a: "Yes. Every system we install is configured for remote mobile viewing, so you can check live and recorded footage from your phone from anywhere in the world. We set the app up with you on installation day and show you exactly how to use it.",
  },
  {
    q: "What is guard patrol management?",
    a: "It's a verification system for security guards on patrol. Guards scan checkpoints on their route, and our control room monitors every scan in real time. You receive a daily email report, and if a patrol checkpoint is skipped or a guard's stay-awake alert is breached, you're notified immediately — giving you 100% control over the level of patrol service you pay for.",
  },
  {
    q: "Do you work with my existing system or guard company?",
    a: "Absolutely. We repair and upgrade existing CCTV and alarm systems, and our patrol management layer works alongside your current security guard provider — it makes the service they deliver measurable and accountable.",
  },
  {
    q: "Which areas do you serve?",
    a: "We're based in Midvaal and serve Meyerton, Vanderbijlpark, Vereeniging, the greater Vaal Triangle, Johannesburg South, Alberton, Sasolburg and surrounding areas. If you're nearby and don't see your suburb listed, give us a call — chances are we can help.",
  },
  {
    q: "How quickly can installation happen?",
    a: "After your free on-site assessment and quote, most standard installations are completed within a few working days. We'll confirm an exact installation date with you before any work begins.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The rental option sold us — no huge upfront cost and everything is serviced by Proserve. Being able to check the cameras on my phone while at work has been a game changer.",
    name: "Johan v.",
    detail: "Homeowner, Meyerton",
    stars: 5,
  },
  {
    quote:
      "We manage a complex in Vanderbijlpark and the patrol management system finally gave us proof of what we were paying for. The daily reports keep the guard company on their toes.",
    name: "Reneilwe M.",
    detail: "Body corporate trustee, Vanderbijlpark",
    stars: 5,
  },
  {
    quote:
      "Fast, neat and professional installation. The ANPR camera at our gate logs every vehicle that comes in — exactly what our estate needed.",
    name: "Pieter d.W.",
    detail: "Estate manager, Vaal Triangle",
    stars: 5,
  },
] as const;

export const SERVICE_OPTIONS = [
  "CCTV System Rental (4 or 8 zone)",
  "Guard Patrol Management",
  "Access Control",
  "Number Plate Recognition (ANPR)",
  "Alarm System / Electric Fence",
  "Gate Motor / Boom Installation",
  "Repairs of existing system",
  "Something else",
] as const;
