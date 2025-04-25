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

-- AddForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" ADD CONSTRAINT "FlowersBouquetsAndFlowers_flowersId_fkey" FOREIGN KEY ("flowersId") REFERENCES "Flowers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowersBouquetsAndFlowers" ADD CONSTRAINT "FlowersBouquetsAndFlowers_flowersBouquetsId_fkey" FOREIGN KEY ("flowersBouquetsId") REFERENCES "FlowersBouquets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
