-- AlterTable
ALTER TABLE "partner" ADD COLUMN     "authorId" TEXT NOT NULL DEFAULT 'fh5sydlqhh3r3ey',
ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "tag" ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;
