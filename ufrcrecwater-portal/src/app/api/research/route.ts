import { NextResponse } from "next/server";
import { getResearch } from "../../../../lib/db/research";
import { generateDownloadUrl } from "../../../../lib/aws/s3";
import { logger, serializeError } from "../../../../lib/logger";

export async function GET() {
  try {
    logger.info({request: "GET /api/research", message: "Fetching research data..."});
    const research = await getResearch();
    const payload = {
      research: await Promise.all(
        research.map(async (item) => ({
          id: item.id,
          research_title: item.research_title,
          research_desc: item.research_desc,
          s3_url: await generateDownloadUrl(`Research/${item.id}.jpg`)
        }))
      ),
      success: true,
    };
    logger.info({request: "GET /api/research", message: "Successfully fetched research data", success: true});

    return NextResponse.json(payload);
  } catch (error) {
    logger.error({request: "GET /api/research", message: "Unable to fetch research data because of an error", success: false}, { error: serializeError(error) });
    const payload = { message: "Unable to fetch research", success: false};
    return NextResponse.json(payload, { status: 500 });
  }
}
