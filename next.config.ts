import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is for sandbox/Docker-style deploys; Vercel builds natively.
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
