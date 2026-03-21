'use strict';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['example.com'], // Replace with your allowed domains
  },
  // Additional Next.js configurations for production
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
