/*
  Warnings:

  - Made the column `test123` on table `Flowers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `FlowersVariety` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Flowers" ALTER COLUMN "test123" SET NOT NULL;

-- AlterTable
ALTER TABLE "FlowersVariety" ALTER COLUMN "title" SET NOT NULL;
