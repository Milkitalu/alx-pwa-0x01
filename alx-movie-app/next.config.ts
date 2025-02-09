import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;

const withPWA = require('@ducanh2912/next-pwa').default;

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public', // Destination directory for the PWA files
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker to activate
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  },
});