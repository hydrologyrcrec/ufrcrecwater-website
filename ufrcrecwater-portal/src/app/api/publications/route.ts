import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({ region: "us-east-1" });

export async function generateDownloadUrl(key: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    Key: key,
  });

  const url = await getSignedUrl(s3, command, {
    expiresIn: 60 * 5, // 5 minutes
  });

  return url;
}

export async function GET() {
  try {
    const publications = await prisma.publication.findMany({
      include: {
        journal: {
          select: {
            id: true,
            journal_name: true,
          },
        },
        authors: {
          include: {
            user: {
              select: {
                id: true,
                user_name: true,
              },
            },
          },
        },
      },
      orderBy: { date_published: "desc" },
    });

    type PublicationWithRelations = (typeof publications)[number];
    type AuthorWithRelations = PublicationWithRelations["authors"][number];

    const payload = {
      publications: await Promise.all(
        publications.map(async (pub: PublicationWithRelations) => ({
          id: pub.id,
          journal_id: pub.journal_id,
          journal_name: pub.journal.journal_name,
          publication_title: pub.publication_title,
          publication_url: pub.publication_url,
          publication_desc: pub.publication_desc,
          s3_url: await generateDownloadUrl(`Publications/${pub.id}`),
          date_published: pub.date_published,
          authors: pub.authors.map((author: AuthorWithRelations) => ({
            user_id: author.user.id,
            user_name: author.user.user_name,
          })),
        }))
      ),
    };

    return NextResponse.json(payload);
  } catch (error) {
    console.error("Error fetching publications", error);
    return NextResponse.json(
      { error: "Unable to fetch publications" },
      { status: 500 }
    );
  }
}
