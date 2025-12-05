import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;
