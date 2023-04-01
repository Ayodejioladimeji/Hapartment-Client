/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com"],
    // unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  // useFileSystemPublicRoutes: false,
  distDir: "build",
  // trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
