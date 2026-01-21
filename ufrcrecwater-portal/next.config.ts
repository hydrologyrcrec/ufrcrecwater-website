import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  serverExternalPackages: [
    "@aws-sdk/client-s3", 
    "@aws-sdk/s3-request-presigner"
  ],
};

export default nextConfig;
