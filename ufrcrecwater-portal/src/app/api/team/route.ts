import { NextResponse } from "next/server";

import prisma from "../../../../lib/prisma";
import { generateDownloadUrl } from "../../../../lib/aws/s3";

export async function GET() {
  try {
    const members = await prisma.teamMember.findMany({
      include: {
        user: {
          select: {
            id: true,
            user_name: true,
          },
        },
      },
      orderBy: [
        { status: "asc" },        
        { tenure_start: "asc" },
      ],
    });

    const payload = {
      members: await Promise.all(
        members.map(async (member) => ({
          user_id: member.user_id,
          user_name: member.user.user_name,
          position: member.position,
          tenure_start: member.tenure_start,
          tenure_end: member.tenure_end ?? "Present",
          status: member.status,
          description: member.description ?? "",
          s3_url:
            (await generateDownloadUrl(`Team/${member.user_id}.jpg`))
        }))
      ),
    };

    return NextResponse.json(payload);
  } catch (error) {
    console.error("Error fetching team members", error);
    return NextResponse.json(
      { error: "Unable to fetch team members" },
      { status: 500 }
    );
  }
}
