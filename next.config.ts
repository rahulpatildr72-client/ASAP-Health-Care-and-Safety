import type { NextConfig } from "next";

/**
 * NEXT_OUTPUT=export  → fully static export into `out/` (for Cloudflare Pages,
 *                       Netlify, GitHub Pages or any static host).
 * Default (unset)     → standard build (for Vercel / `next start`).
 */
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  // Allows CI/verification builds to write elsewhere (NEXT_DIST_DIR=.next-build)
  // so `next build` never corrupts a running `next dev` server's .next output.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  images: {
    // Static hosts have no image-optimization server, so serve images as-is there.
    unoptimized: isStaticExport,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
