/*
  Warnings:

  - You are about to drop the column `name__en` on the `flowers` table. All the data in the column will be lost.
  - You are about to drop the column `name__ru` on the `flowers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `flowers_bouquets` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `flowers_farms` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `flowers_variety` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_en]` on the table `flowers_variety` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_ru]` on the table `flowers_variety` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_en` to the `flowers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `flowers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `flowers_bouquets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `flowers_bouquets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `flowers_farms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `flowers_farms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `flowers_variety` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `flowers_variety` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "flowers_variety_name_key";

-- AlterTable
ALTER TABLE "flowers" DROP COLUMN "name__en",
DROP COLUMN "name__ru",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "flowers_bouquets" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "flowers_farms" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "flowers_variety" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "flowers_variety_name_en_key" ON "flowers_variety"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "flowers_variety_name_ru_key" ON "flowers_variety"("name_ru");
