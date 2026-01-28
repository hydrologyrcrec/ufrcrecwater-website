import type { NextConfig } from "next";
import "dotenv/config"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ufrcrecwater-assets.s3.us-east-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
  env:{
    DATABASE_URL: process.env.DATABASE_URL,
    REGION: process.env.REGION,
    S3_BUCKET: process.env.S3_BUCKET,
    MYAPP_AWS_ACCESS_KEY_ID: process.env.MYAPP_AWS_ACCESS_KEY_ID,
    MYAPP_AWS_SECRET_ACCESS_KEY: process.env.MYAPP_AWS_SECRET_ACCESS_KEY
  },
  output: 'standalone',
  serverExternalPackages: [
    "@aws-sdk/client-s3", 
    "@aws-sdk/s3-request-presigner"
  ],
};

export default nextConfig;
