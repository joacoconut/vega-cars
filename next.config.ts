import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "q226nf8l3k.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
