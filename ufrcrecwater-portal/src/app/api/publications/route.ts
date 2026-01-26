import { NextResponse } from "next/server";
import { getPublications } from "../../../../lib/db/publications";
import { generateDownloadUrl } from "../../../../lib/aws/s3";
import { logger, serializeError } from "../../../../lib/logger";

export async function GET() {
  try {
    logger.info({ request: "GET /api/publications", message: "Fetching publications data..." });
    const publications = await getPublications();
    type PublicationWithRelations = (typeof publications)[number];
    type AuthorWithRelations = PublicationWithRelations["authors"][number];
    const payload = {
      publications: await Promise.all(
        publications.map(async (pub: PublicationWithRelations) => ({
          id: pub.id,
          journal_id: pub.journal_id,
          journal_name: pub.journal.journal_name,
          journal_url: pub.journal.journal_url,
          publication_title: pub.publication_title,
          publication_url: pub.publication_url,
          publication_desc: pub.publication_desc,
          s3_url: await generateDownloadUrl(`Publications/${pub.id}.pdf`),
          date_published: pub.date_published,
          authors: pub.authors
          .filter((author: AuthorWithRelations) => author.user)
          .map((author: AuthorWithRelations) => ({
            user_id: author.user!.id,
            user_name: author.user!.user_name,
          })),        
        }))
      ),
      success: true,
    };
    logger.info({request: "GET /api/publications", message: "Successfully fetched publications data", success: true});

    return NextResponse.json(payload);
  } catch (error) {
    logger.error({ request: "GET /api/publications", message: "Unable to fetch publications data because of an error", success: false },{ error: serializeError(error) });
    const payload = { message: "Unable to fetch publications", success: false};
    return NextResponse.json(payload, { status: 500 });
  }
}
