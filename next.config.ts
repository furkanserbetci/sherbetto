import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/urunler",
        destination: "/tr/products",
        permanent: true,
      },
      {
        source: "/urunler/:path*",
        destination: "/tr/products/:path*",
        permanent: true,
      },
      {
        source: "/hakkimizda",
        destination: "/tr/about",
        permanent: true,
      },
      {
        source: "/iletisim",
        destination: "/tr/contact",
        permanent: true,
      },
      {
        source: "/siparis",
        destination: "/tr/order",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/tr/blog/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
