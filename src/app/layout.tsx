import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

// Self-hosted variable fonts — no external requests at build/runtime.
const geistSans = localFont({
  src: "./fonts/geist-latin-var.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const archivo = localFont({
  src: "./fonts/archivo-latin-var.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proserve Security | CCTV Systems & Security Solutions — Midvaal & Vaal Triangle",
  description:
    "Time-proven security systems for homes and businesses in Midvaal, Meyerton, the Vaal Triangle and Johannesburg South. CCTV rental with no upfront cost, guard patrol management, access control, number plate recognition, alarms, installations and repairs.",
  keywords: [
    "CCTV Midvaal",
    "CCTV rental South Africa",
    "security systems Meyerton",
    "guard patrol management",
    "access control Vaal Triangle",
    "number plate recognition camera",
    "alarm installation Johannesburg South",
    "Proserve Security",
  ],
  authors: [{ name: "Proserve Security" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Proserve Security — CCTV Systems & Security Solutions",
    description:
      "Affordable monthly CCTV rental with no upfront cost. Supply, installation and service included. Serving Midvaal, Meyerton & the Vaal Triangle.",
    url: "https://proservesecurity.co.za",
    siteName: "Proserve Security",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proserve Security — CCTV Systems & Security Solutions",
    description:
      "Affordable monthly CCTV rental with no upfront cost. Serving Midvaal, Meyerton & the Vaal Triangle.",
  },
};

export const viewport: Viewport = {
  themeColor: "#121110",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${archivo.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
