/*
  Warnings:

  - Added the required column `position` to the `TeamMember` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `TeamMember` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('current', 'former');

-- AlterTable
ALTER TABLE "TeamMember" ADD COLUMN     "position" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;
