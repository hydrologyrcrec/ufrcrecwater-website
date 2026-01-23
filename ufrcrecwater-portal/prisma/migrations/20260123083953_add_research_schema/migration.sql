-- CreateTable
CREATE TABLE "Research" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "research_title" TEXT NOT NULL DEFAULT 'Title',
    "research_desc" TEXT NOT NULL DEFAULT 'Research',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Research_pkey" PRIMARY KEY ("id")
);
