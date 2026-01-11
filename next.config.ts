import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [],
    domains: ['static.toss.im'],
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;
