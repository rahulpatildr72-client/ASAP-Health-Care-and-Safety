import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
