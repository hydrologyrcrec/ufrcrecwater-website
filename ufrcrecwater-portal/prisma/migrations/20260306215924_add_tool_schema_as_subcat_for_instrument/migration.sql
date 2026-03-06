-- CreateTable
CREATE TABLE "Tool" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "instrument_id" UUID NOT NULL,
    "tool_title" TEXT NOT NULL DEFAULT 'Title',
    "tool_desc" TEXT NOT NULL DEFAULT 'Tool',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_instrument_id_fkey" FOREIGN KEY ("instrument_id") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;
