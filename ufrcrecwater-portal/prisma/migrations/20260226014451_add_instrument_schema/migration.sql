-- CreateTable
CREATE TABLE "Instrument" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "instrument_title" TEXT NOT NULL DEFAULT 'Title',
    "instrument_desc" TEXT NOT NULL DEFAULT 'Instrument',
    "date_installed" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);
