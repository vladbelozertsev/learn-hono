-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "hstore" WITH SCHEMA "public";

-- CreateTable
CREATE TABLE "PublicFiles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "uploadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PublicFiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrivateFiles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "uploadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PrivateFiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flowers" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "varietyId" INTEGER NOT NULL,
    "test123" hstore,

    CONSTRAINT "Flowers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowersVariety" (
    "id" SERIAL NOT NULL,
    "title" hstore,

    CONSTRAINT "FlowersVariety_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowersHistory" (
    "id" SERIAL NOT NULL,
    "flowersId" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "FlowersHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowersFarms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "FlowersFarms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowersFarmsAndFlowers" (
    "flowersId" INTEGER NOT NULL,
    "flowersFarmsId" INTEGER NOT NULL,

    CONSTRAINT "FlowersFarmsAndFlowers_pkey" PRIMARY KEY ("flowersId","flowersFarmsId")
);

-- CreateTable
CREATE TABLE "FlowersBouquets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "FlowersBouquets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowersBouquetsAndFlowers" (
    "flowersId" INTEGER NOT NULL,
    "flowersBouquetsId" INTEGER NOT NULL,

    CONSTRAINT "FlowersBouquetsAndFlowers_pkey" PRIMARY KEY ("flowersId","flowersBouquetsId")
);

-- CreateTable
CREATE TABLE "FlowersAndFiles" (
    "flowerId" INTEGER NOT NULL,
    "publicFileName" TEXT NOT NULL,

    CONSTRAINT "FlowersAndFiles_pkey" PRIMARY KEY ("flowerId","publicFileName")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "ddd1" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test2" (
    "id" SERIAL NOT NULL,
    "ddd1" TEXT NOT NULL,

    CONSTRAINT "Test2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "signature" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "oauth" TEXT,
    "oauthId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersFiles" (
    "userId" INTEGER NOT NULL,
    "fileId" INTEGER NOT NULL,

    CONSTRAINT "UsersFiles_pkey" PRIMARY KEY ("userId","fileId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PublicFiles_name_key" ON "PublicFiles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PrivateFiles_name_key" ON "PrivateFiles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Languages_id_key" ON "Languages"("id");

-- AddForeignKey
ALTER TABLE "Flowers" ADD CONSTRAINT "Flowers_varietyId_fkey" FOREIGN KEY ("varietyId") REFERENCES "FlowersVariety"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersHistory" ADD CONSTRAINT "FlowersHistory_flowersId_fkey" FOREIGN KEY ("flowersId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersFarmsAndFlowers" ADD CONSTRAINT "FlowersFarmsAndFlowers_flowersId_fkey" FOREIGN KEY ("flowersId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersFarmsAndFlowers" ADD CONSTRAINT "FlowersFarmsAndFlowers_flowersFarmsId_fkey" FOREIGN KEY ("flowersFarmsId") REFERENCES "FlowersFarms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" ADD CONSTRAINT "FlowersBouquetsAndFlowers_flowersId_fkey" FOREIGN KEY ("flowersId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" ADD CONSTRAINT "FlowersBouquetsAndFlowers_flowersBouquetsId_fkey" FOREIGN KEY ("flowersBouquetsId") REFERENCES "FlowersBouquets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersAndFiles" ADD CONSTRAINT "FlowersAndFiles_flowerId_fkey" FOREIGN KEY ("flowerId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersAndFiles" ADD CONSTRAINT "FlowersAndFiles_publicFileName_fkey" FOREIGN KEY ("publicFileName") REFERENCES "PublicFiles"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
