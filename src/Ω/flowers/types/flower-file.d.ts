import { Equal } from "../../../libs/types/valid";
import { flowers_and_files } from "../../../libs/prisma";

export type FlowerFile = Equal<
  flowers_and_files,
  {
    flower_id: number;
    public_file_name: string;
  }
>;
