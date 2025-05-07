import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[  {
    protocol: "http",
    hostname: `62.72.29.120`,
  },
  {
    protocol: "https",
    hostname: `62.72.29.120`,
  },]}
};

export default nextConfig;
