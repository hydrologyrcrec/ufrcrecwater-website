import { NextResponse } from "next/server"
import { logger, serializeError } from "../../../../lib/logger";
import { mockInstrumentList } from "@/data/instrument";
import { getInstruments } from "../../../../lib/db/instrument";
import { generateDownloadUrl } from "../../../../lib/aws/s3";

export async function GET() {
  try {
    logger.info({request: "GET /api/instruments", message: "Fetching instruments data..."});
    const instruments = await getInstruments();
    type InstrumentWithRelations = (typeof instruments)[number];
    const payload = {
      instruments: await Promise.all(
        instruments.map(async (ins: InstrumentWithRelations) => ({
          id: ins.id,
          instrument_title: ins.instrument_title,
          instrument_desc: ins.instrument_desc,
          date_installed: ins.date_installed,
          s3_url: await generateDownloadUrl(`Instruments/${ins.id}.jpg`)
          })),        
        )
    , success: true,
    };
    logger.info({request: "GET /api/instruments", message: "Successfully fetched instruments data", success: true});

    return NextResponse.json(payload);
  } catch (error) {
    logger.error({request: "GET /api/instruments", message: "Unable to fetch instruments data because of an error", success: false}, { error: serializeError(error) });
    const payload = { message: "Unable to fetch instruments", success: false};
    return NextResponse.json(payload, { status: 500 });
  }
}
