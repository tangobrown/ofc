/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "theoldfashionedcocktailco.com",
      },
    ],
  },
};

export default nextConfig;
