import { NextResponse } from "next/server";

import prisma from "../../../../lib/prisma";
import { generateDownloadUrl } from "../../../../lib/aws/s3";

export async function GET() {
  try {
    const research = await prisma.research.findMany({
      orderBy: { updated_at: "desc" },
    });

    const payload = {
      research: await Promise.all(
        research.map(async (item) => ({
          id: item.id,
          research_title: item.research_title,
          research_desc: item.research_desc,
          s3_url: await generateDownloadUrl(`Research/${item.id}.jpg`)
        }))
      ),
    };

    return NextResponse.json(payload);
  } catch (error) {
    console.error("Error fetching research", error);
    return NextResponse.json(
      { error: "Unable to fetch research" },
      { status: 500 }
    );
  }
}
