import { Equal } from "../../../libs/types/valid";
import { Flowers } from "../../../../prisma/types";

export type Flower = Equal<
  Flowers,
  {
    name: string;
    id: number;
    color: string;
    price: number;
    varietyId: number;
  }
>;
