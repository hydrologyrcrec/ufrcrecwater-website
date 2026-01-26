import { NextResponse } from "next/server";
import { getTeam } from "../../../../lib/db/team";
import { generateDownloadUrl } from "../../../../lib/aws/s3";
import { logger, serializeError } from "../../../../lib/logger";

export async function GET() {
  try {
    logger.info({ request: "GET /api/team", message: "Fetching team members data..."});
    const members = await getTeam();
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
      success: true
    };
    logger.info({ request: "GET /api/team", message: "Successfully fetched team members data", success: true });

    return NextResponse.json(payload);
  } catch (error) {
    logger.error({ request: "GET /api/team", message: "Unable to fetch team members data because of an error", success: false }, { error: serializeError(error) });
    const payload = { message: "Unable to fetch team members", success: false};
    return NextResponse.json(payload, { status: 500 });
  }
}
