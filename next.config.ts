import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows CI/verification builds to write elsewhere (NEXT_DIST_DIR=.next-build)
  // so `next build` never corrupts a running `next dev` server's .next output.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
