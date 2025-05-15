/*
  Warnings:

  - The primary key for the `FlowersAndFiles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `flowersId` on the `FlowersAndFiles` table. All the data in the column will be lost.
  - You are about to drop the column `publicFilesId` on the `FlowersAndFiles` table. All the data in the column will be lost.
  - You are about to drop the column `publicFilesName` on the `FlowersAndFiles` table. All the data in the column will be lost.
  - Added the required column `flowerId` to the `FlowersAndFiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publicFileName` to the `FlowersAndFiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FlowersAndFiles" DROP CONSTRAINT "FlowersAndFiles_flowersId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersAndFiles" DROP CONSTRAINT "FlowersAndFiles_publicFilesId_fkey";

-- AlterTable
ALTER TABLE "FlowersAndFiles" DROP CONSTRAINT "FlowersAndFiles_pkey",
DROP COLUMN "flowersId",
DROP COLUMN "publicFilesId",
DROP COLUMN "publicFilesName",
ADD COLUMN     "flowerId" INTEGER NOT NULL,
ADD COLUMN     "publicFileName" TEXT NOT NULL,
ADD CONSTRAINT "FlowersAndFiles_pkey" PRIMARY KEY ("flowerId", "publicFileName");

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "asd" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FlowersAndFiles" ADD CONSTRAINT "FlowersAndFiles_flowerId_fkey" FOREIGN KEY ("flowerId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersAndFiles" ADD CONSTRAINT "FlowersAndFiles_publicFileName_fkey" FOREIGN KEY ("publicFileName") REFERENCES "PublicFiles"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
