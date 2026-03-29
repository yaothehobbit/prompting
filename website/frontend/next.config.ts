import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/prompting",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
