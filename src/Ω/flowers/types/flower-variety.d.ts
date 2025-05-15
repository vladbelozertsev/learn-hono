import { Equal } from "../../../libs/types/valid";
import { FlowersVariety as PrismaFlowersVariety } from "../../../libs/prisma";

export type FlowerVariety = Equal<
  PrismaFlowersVariety,
  {
    id: number;
    title: string;
  }
>;
