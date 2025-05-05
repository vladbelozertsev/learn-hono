/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `FlowersVariety` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FlowersVariety_title_key" ON "FlowersVariety"("title");
