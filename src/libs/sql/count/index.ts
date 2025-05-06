import { Context } from "hono";
import { SQLQuery, sql } from "bun";
import { setCountHeader } from "./set-count-header";

export const COUNT = async <T>(
  c: Context<any, any, any>,
  data: {
    exposeHeaders?: string[];
    select: SQLQuery[];
    where: SQLQuery;
    page: SQLQuery;
  }
) => {
  await setCountHeader(c, data.select[1], data.where);
  return sql`${data.select[0]} ${data.where} ${data.page}` as T;
};
