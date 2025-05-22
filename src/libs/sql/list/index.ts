import { Context } from "hono";
import { SELECT } from "../select";
import { SQLQuery, sql } from "bun";
import { setCountHeader } from "./set-count-header";

export const LIST = async <T>(
  c: Context<any, any, any>,
  data: {
    exposeHeaders?: string[];
    select: [from: string, select: (keyof T)[]];
    where: SQLQuery;
    page: SQLQuery;
  }
) => {
  const select = SELECT(data.select[0], data.select[1]);
  await setCountHeader(c, select[1], data.where);
  return sql`${select[0]} ${data.where} ${data.page}` as unknown as T[];
};
