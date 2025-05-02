/*
  Warnings:

  - You are about to drop the `Files` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Files";

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
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "uploadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PrivateFiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowersAndFiles" (
    "flowersId" INTEGER NOT NULL,
    "publicFilesId" INTEGER NOT NULL,

    CONSTRAINT "FlowersAndFiles_pkey" PRIMARY KEY ("flowersId","publicFilesId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PublicFiles_name_key" ON "PublicFiles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PrivateFiles_name_key" ON "PrivateFiles"("name");

-- AddForeignKey
ALTER TABLE "FlowersAndFiles" ADD CONSTRAINT "FlowersAndFiles_flowersId_fkey" FOREIGN KEY ("flowersId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersAndFiles" ADD CONSTRAINT "FlowersAndFiles_publicFilesId_fkey" FOREIGN KEY ("publicFilesId") REFERENCES "PublicFiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
