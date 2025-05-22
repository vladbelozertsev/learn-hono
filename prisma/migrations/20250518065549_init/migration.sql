/*
  Warnings:

  - You are about to drop the column `test123` on the `Flowers` table. All the data in the column will be lost.
  - The primary key for the `FlowersBouquetsAndFlowers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `flowersBouquetsId` on the `FlowersBouquetsAndFlowers` table. All the data in the column will be lost.
  - You are about to drop the column `flowersId` on the `FlowersBouquetsAndFlowers` table. All the data in the column will be lost.
  - You are about to drop the column `flowersId` on the `FlowersHistory` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `FlowersVariety` table. All the data in the column will be lost.
  - You are about to drop the `FlowersFarmsAndFlowers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Languages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Test2` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `FlowersVariety` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `flowerBouquetId` to the `FlowersBouquetsAndFlowers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flowerId` to the `FlowersBouquetsAndFlowers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flowerId` to the `FlowersHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `FlowersVariety` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" DROP CONSTRAINT "FlowersBouquetsAndFlowers_flowersBouquetsId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" DROP CONSTRAINT "FlowersBouquetsAndFlowers_flowersId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersFarmsAndFlowers" DROP CONSTRAINT "FlowersFarmsAndFlowers_flowersFarmsId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersFarmsAndFlowers" DROP CONSTRAINT "FlowersFarmsAndFlowers_flowersId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersHistory" DROP CONSTRAINT "FlowersHistory_flowersId_fkey";

-- AlterTable
ALTER TABLE "Flowers" DROP COLUMN "test123";

-- AlterTable
ALTER TABLE "FlowersBouquetsAndFlowers" DROP CONSTRAINT "FlowersBouquetsAndFlowers_pkey",
DROP COLUMN "flowersBouquetsId",
DROP COLUMN "flowersId",
ADD COLUMN     "flowerBouquetId" INTEGER NOT NULL,
ADD COLUMN     "flowerId" INTEGER NOT NULL,
ADD CONSTRAINT "FlowersBouquetsAndFlowers_pkey" PRIMARY KEY ("flowerId", "flowerBouquetId");

-- AlterTable
ALTER TABLE "FlowersHistory" DROP COLUMN "flowersId",
ADD COLUMN     "flowerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "FlowersVariety" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "FlowersFarmsAndFlowers";

-- DropTable
DROP TABLE "Languages";

-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "Test2";

-- CreateTable
CREATE TABLE "FlowersAndFlowersFarms" (
    "flowerId" INTEGER NOT NULL,
    "flowerFarmId" INTEGER NOT NULL,

    CONSTRAINT "FlowersAndFlowersFarms_pkey" PRIMARY KEY ("flowerId","flowerFarmId")
);

-- CreateIndex
CREATE UNIQUE INDEX "FlowersVariety_name_key" ON "FlowersVariety"("name");

-- AddForeignKey
ALTER TABLE "FlowersHistory" ADD CONSTRAINT "FlowersHistory_flowerId_fkey" FOREIGN KEY ("flowerId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersAndFlowersFarms" ADD CONSTRAINT "FlowersAndFlowersFarms_flowerId_fkey" FOREIGN KEY ("flowerId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersAndFlowersFarms" ADD CONSTRAINT "FlowersAndFlowersFarms_flowerFarmId_fkey" FOREIGN KEY ("flowerFarmId") REFERENCES "FlowersFarms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" ADD CONSTRAINT "FlowersBouquetsAndFlowers_flowerId_fkey" FOREIGN KEY ("flowerId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" ADD CONSTRAINT "FlowersBouquetsAndFlowers_flowerBouquetId_fkey" FOREIGN KEY ("flowerBouquetId") REFERENCES "FlowersBouquets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
