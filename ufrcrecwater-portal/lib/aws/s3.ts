import "server-only";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { logger, serializeError } from "../logger";
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
    logger.info({ request: "GET /api/publications -> generateDownloadUrl", message: "Generating presigned URLs..." });
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 180 });
    logger.info({ request: "GET /api/publications -> generateDownloadUrl", message: "Successfully generated presigned URLs", success: true });
    return url;
  } catch (error: any) {
    logger.error({ request: "GET /api/publications -> generateDownloadUrl", message: "Unable to generate presigned URLs because of an error", success: false }, { error: serializeError(error) });
    return null;
  }
}