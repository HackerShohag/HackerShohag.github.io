/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      // basePath: "/api",
      // serverActionsDir: "./server-actions
    },
  },
};

module.exports = nextConfig;
