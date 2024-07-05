/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dogsapi.origamid.dev",
      },
    ],
  },
};

export default nextConfig;
