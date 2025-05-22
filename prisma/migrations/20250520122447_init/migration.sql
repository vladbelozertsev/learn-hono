/*
  Warnings:

  - You are about to drop the `Flowers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowersAndFiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowersAndFlowersFarms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowersBouquets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowersBouquetsAndFlowers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowersFarms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowersHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowersVariety` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PrivateFiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PublicFiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersFiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Flowers" DROP CONSTRAINT "Flowers_varietyId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersAndFiles" DROP CONSTRAINT "FlowersAndFiles_flowerId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersAndFiles" DROP CONSTRAINT "FlowersAndFiles_publicFileName_fkey";

-- DropForeignKey
ALTER TABLE "FlowersAndFlowersFarms" DROP CONSTRAINT "FlowersAndFlowersFarms_flowerFarmId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersAndFlowersFarms" DROP CONSTRAINT "FlowersAndFlowersFarms_flowerId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" DROP CONSTRAINT "FlowersBouquetsAndFlowers_flowerBouquetId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" DROP CONSTRAINT "FlowersBouquetsAndFlowers_flowerId_fkey";

-- DropForeignKey
ALTER TABLE "FlowersHistory" DROP CONSTRAINT "FlowersHistory_flowerId_fkey";

-- DropTable
DROP TABLE "Flowers";

-- DropTable
DROP TABLE "FlowersAndFiles";

-- DropTable
DROP TABLE "FlowersAndFlowersFarms";

-- DropTable
DROP TABLE "FlowersBouquets";

-- DropTable
DROP TABLE "FlowersBouquetsAndFlowers";

-- DropTable
DROP TABLE "FlowersFarms";

-- DropTable
DROP TABLE "FlowersHistory";

-- DropTable
DROP TABLE "FlowersVariety";

-- DropTable
DROP TABLE "PrivateFiles";

-- DropTable
DROP TABLE "PublicFiles";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "UsersFiles";

-- CreateTable
CREATE TABLE "public_files" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "upload_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "public_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private_files" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "upload_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "private_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flowers" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "name__en" TEXT NOT NULL,
    "name__ru" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "variety_id" INTEGER NOT NULL,

    CONSTRAINT "flowers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flowers_variety" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "flowers_variety_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flowers_history" (
    "id" SERIAL NOT NULL,
    "flower_id" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "flowers_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flowers_farms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "flowers_farms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flowers_and_flowers_farms" (
    "flower_id" INTEGER NOT NULL,
    "flower_farm_id" INTEGER NOT NULL,

    CONSTRAINT "flowers_and_flowers_farms_pkey" PRIMARY KEY ("flower_id","flower_farm_id")
);

-- CreateTable
CREATE TABLE "flowers_bouquets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "flowers_bouquets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flowers_and_flowers_bouquets" (
    "flower_id" INTEGER NOT NULL,
    "flower_bouquet_id" INTEGER NOT NULL,

    CONSTRAINT "flowers_and_flowers_bouquets_pkey" PRIMARY KEY ("flower_id","flower_bouquet_id")
);

-- CreateTable
CREATE TABLE "flowers_and_files" (
    "flower_id" INTEGER NOT NULL,
    "public_file_name" TEXT NOT NULL,

    CONSTRAINT "flowers_and_files_pkey" PRIMARY KEY ("flower_id","public_file_name")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "signature" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "oauth" TEXT,
    "oauth_id" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_files" (
    "user_id" INTEGER NOT NULL,
    "file_id" INTEGER NOT NULL,

    CONSTRAINT "users_files_pkey" PRIMARY KEY ("user_id","file_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "public_files_name_key" ON "public_files"("name");

-- CreateIndex
CREATE UNIQUE INDEX "private_files_name_key" ON "private_files"("name");

-- CreateIndex
CREATE UNIQUE INDEX "flowers_variety_name_key" ON "flowers_variety"("name");

-- AddForeignKey
ALTER TABLE "flowers" ADD CONSTRAINT "flowers_variety_id_fkey" FOREIGN KEY ("variety_id") REFERENCES "flowers_variety"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flowers_history" ADD CONSTRAINT "flowers_history_flower_id_fkey" FOREIGN KEY ("flower_id") REFERENCES "flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flowers_and_flowers_farms" ADD CONSTRAINT "flowers_and_flowers_farms_flower_id_fkey" FOREIGN KEY ("flower_id") REFERENCES "flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flowers_and_flowers_farms" ADD CONSTRAINT "flowers_and_flowers_farms_flower_farm_id_fkey" FOREIGN KEY ("flower_farm_id") REFERENCES "flowers_farms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flowers_and_flowers_bouquets" ADD CONSTRAINT "flowers_and_flowers_bouquets_flower_id_fkey" FOREIGN KEY ("flower_id") REFERENCES "flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flowers_and_flowers_bouquets" ADD CONSTRAINT "flowers_and_flowers_bouquets_flower_bouquet_id_fkey" FOREIGN KEY ("flower_bouquet_id") REFERENCES "flowers_bouquets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flowers_and_files" ADD CONSTRAINT "flowers_and_files_flower_id_fkey" FOREIGN KEY ("flower_id") REFERENCES "flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flowers_and_files" ADD CONSTRAINT "flowers_and_files_public_file_name_fkey" FOREIGN KEY ("public_file_name") REFERENCES "public_files"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
