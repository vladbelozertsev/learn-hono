import { Equal } from "../../../libs/types/valid";
import { flowers_variety } from "../../../libs/prisma";

export type FlowerVariety = Equal<
  flowers_variety,
  {
    id: number;
    name_en: string;
    name_ru: string;
  }
>;
