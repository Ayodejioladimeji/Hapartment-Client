import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com", "images.nigeriapropertycentre.com"],
    // unoptimized: true,
  },
  // experimental: {
  //   scrollRestoration: true,
  // },
  // useFileSystemPublicRoutes: false,
  // distDir: "build",
  // trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
