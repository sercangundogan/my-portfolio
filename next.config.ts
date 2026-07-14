import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent Next from picking a parent yarn.lock as the monorepo root
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
