/*
  Warnings:

  - You are about to drop the column `pdf_s3_url` on the `Publication` table. All the data in the column will be lost.
  - You are about to drop the column `photo_s3_url` on the `TeamMember` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Publication" DROP COLUMN "pdf_s3_url";

-- AlterTable
ALTER TABLE "TeamMember" DROP COLUMN "photo_s3_url";
