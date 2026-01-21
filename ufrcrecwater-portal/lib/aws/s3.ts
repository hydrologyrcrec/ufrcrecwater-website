import "server-only";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
});

export async function generateDownloadUrl(key: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    Key: key,
  });

  return getSignedUrl(s3, command, { expiresIn: 300 });
}
