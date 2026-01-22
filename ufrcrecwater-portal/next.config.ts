import type { NextConfig } from "next";
import "dotenv/config"

const nextConfig: NextConfig = {
  /* config options here */
  env:{
    DATABASE_URL: process.env.DATABASE_URL
  },
  output: 'standalone',
  serverExternalPackages: [
    "@aws-sdk/client-s3", 
    "@aws-sdk/s3-request-presigner"
  ],
};

export default nextConfig;
