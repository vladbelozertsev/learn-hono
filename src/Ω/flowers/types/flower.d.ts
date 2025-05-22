import { Equal, Extend } from "../../../libs/types/valid";
import { flowers } from "../../../libs/prisma";

export type Flower = Equal<
  flowers,
  {
    color: string;
    id: number;
    name_en: string;
    name_ru: string;
    price: number;
    variety_id: number;
  }
>;

export type SFlower = Extend<
  flowers,
  {
    id: number;
    name_en: string;
  }
>;
