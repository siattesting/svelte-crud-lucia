/*
  Warnings:

  - Added the required column `content` to the `transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaction" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
