/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `partner` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "partner_title_key" ON "partner"("title");
