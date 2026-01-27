import { NextResponse } from "next/server"
import { logger, serializeError } from "../../../../lib/logger";
import { mockInstrumentList } from "@/data/instrument";

export async function GET() {
  try {
    logger.info({request: "GET /api/instruments", message: "Fetching instruments data..."});
    const payload = {
      instruments: mockInstrumentList.instruments,
      success: true,
    };
    logger.info({request: "GET /api/instruments", message: "Successfully fetched instruments data", success: true});

    return NextResponse.json(payload);
  } catch (error) {
    logger.error({request: "GET /api/instruments", message: "Unable to fetch instruments data because of an error", success: false}, { error: serializeError(error) });
    const payload = { message: "Unable to fetch instruments", success: false};
    return NextResponse.json(payload, { status: 500 });
  }
}
