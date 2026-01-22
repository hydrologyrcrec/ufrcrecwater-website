import "server-only";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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
  if (!s3 || !bucket) {
    return null;
  }

  try {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    return await getSignedUrl(s3, command, { expiresIn: 300 });
  } catch (error) {
    console.error("Failed to generate S3 download URL", error);
    return null;
  }
}
