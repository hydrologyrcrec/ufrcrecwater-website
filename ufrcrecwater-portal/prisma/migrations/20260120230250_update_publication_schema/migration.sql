-- AlterTable
ALTER TABLE "Publication" ADD COLUMN     "publication_desc" TEXT NOT NULL DEFAULT 'Publication',
ADD COLUMN     "publication_title" TEXT NOT NULL DEFAULT 'Title';
