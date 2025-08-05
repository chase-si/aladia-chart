import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // basePath: '/aladia-chart',
  // assetPrefix: '/aladia-chart/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
