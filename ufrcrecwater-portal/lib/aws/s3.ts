import "server-only";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import "dotenv/config";

const region = process.env.REGION;
const bucket = process.env.S3_BUCKET;

// Only instantiate when config is present
const s3 = new S3Client({
  region: region,
  credentials: {
    accessKeyId: process.env.MYAPP_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.MYAPP_AWS_SECRET_ACCESS_KEY!,
  },
});


export async function generateDownloadUrl(key: string) {
  try {
    console.log("🔍 Attempting to generate presigned URL...");
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 300 });
    console.log("✅ SUCCESS - URL GENERATED");
    return url;
  } catch (error: any) {
    console.error("❌ S3 ERROR DETAILS:");
    console.error("   Name:", error.name);
    console.error("   Message:", error.message);
    console.error("   Code:", error.$metadata?.httpStatusCode);
    return null;
  }
}