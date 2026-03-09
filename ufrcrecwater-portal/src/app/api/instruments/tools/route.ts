import { NextResponse } from "next/server";
import { logger, serializeError } from "../../../../../lib/logger";
import prisma from "../../../../../lib/prisma";
import { generateDownloadUrl } from "../../../../../lib/aws/s3";

export async function GET(req: Request) {
  try {
    logger.info({request: "GET /api/tools", message: `Fetching instrument tools...`});
    const { searchParams } = new URL(req.url);
    const instrument_id = searchParams.get("instrument_id");
    if (!instrument_id) {
      return NextResponse.json(
        { message: "instrument_id is required", success: false },
        { status: 400 }
      );
    }
    const tools = await prisma.tool.findMany({
      where: { instrument_id },
      select: {
        id: true,
        tool_title: true,
        tool_desc: true,
      },
      orderBy: { created_at: "asc" },
    });

    const payload = {
      tools: await Promise.all(tools.map(async (tool) => ({
        id: tool.id,
        tool_title: tool.tool_title,
        tool_desc: tool.tool_desc,
        s3_url: await generateDownloadUrl(`Instruments/${tool.id}.jpg`)
      }))),
      success: true,
    };

    logger.info({request: "GET /api/tools", message: "Successfully fetched tools data", success: true});
    return NextResponse.json(payload);
  } catch (error) {
    logger.error({request: "GET /api/tools", message: "Unable to fetch tools data because of an error", success: false,}, { error: serializeError(error) });
    const payload = {
      message: "Unable to fetch tools",
      success: false,
    };
    return NextResponse.json(payload, { status: 500 });
  }
}
