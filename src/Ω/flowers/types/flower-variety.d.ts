import { Equal } from "../../../libs/types/valid";
import { FlowersVariety as PrismaFlowersVariety } from "../../../../prisma/types";

export type FlowerVariety = Equal<
  PrismaFlowersVariety,
  {
    id: number;
    title: string;
  }
>;
