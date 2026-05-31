import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGhPages && {
    basePath: "/engagement",
    assetPrefix: "/engagement/",
  }),
};

export default nextConfig;
