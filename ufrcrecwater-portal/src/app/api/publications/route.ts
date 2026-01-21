import { NextResponse } from "next/server";

import prisma from "../../../../lib/prisma";
import { generateDownloadUrl } from "../../../../lib/aws/s3";

export async function GET() {
  try {
    const publications = await prisma.publication.findMany({
      where: {
        authors: {
          some: {},
        },
      },
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
          authors: pub.authors
          .filter(author => author.user) // 🔑 CRITICAL
          .map(author => ({
            user_id: author.user!.id,
            user_name: author.user!.user_name,
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
