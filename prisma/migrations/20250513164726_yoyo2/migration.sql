/*
  Warnings:

  - You are about to drop the column `ttt` on the `Test` table. All the data in the column will be lost.
  - Added the required column `ddd1` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test"
RENAME COLUMN "ttt" TO "ddd1"
