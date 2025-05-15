/*
  Warnings:

  - You are about to drop the column `asd` on the `Test` table. All the data in the column will be lost.
  - Added the required column `ddd` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test" DROP COLUMN "asd",
ADD COLUMN     "ddd" TEXT NOT NULL;
