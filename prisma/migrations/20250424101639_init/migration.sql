-- CreateTable
CREATE TABLE "Files" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" INTEGER NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flowers" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Flowers_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Files_name_key" ON "Files"("name");

-- AddForeignKey
ALTER TABLE "FlowersHistory" ADD CONSTRAINT "FlowersHistory_flowersId_fkey" FOREIGN KEY ("flowersId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersFarmsAndFlowers" ADD CONSTRAINT "FlowersFarmsAndFlowers_flowersId_fkey" FOREIGN KEY ("flowersId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersFarmsAndFlowers" ADD CONSTRAINT "FlowersFarmsAndFlowers_flowersFarmsId_fkey" FOREIGN KEY ("flowersFarmsId") REFERENCES "FlowersFarms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
