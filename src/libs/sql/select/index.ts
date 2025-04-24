import { Context } from "hono";
import { SQLQuery, sql } from "bun";
import { atobURL, safeParseJSON } from "../../helpers/utils";
import { z } from "zod";

const selectSchema = z
  .string()
  .refine((column) => /^[A-Za-z0-9]+$/.test(column))
  .array();

export const SELECT = (c: Context<any, any, any>, from: string, exclude?: string[]) => {
  const result = (psql?: SQLQuery, join?: { [key: string]: boolean }) => {
    return { SQL: psql, join };
  };

  const selectJSON = c.req.query("select");
  if (!selectJSON) return result();

  const orderParsed = safeParseJSON(selectJSON);
  const select = selectSchema.safeParse(orderParsed);
  if (!select.data || !select.success) return result();

  let join: { [key: string]: boolean } = {};
  const filtered = !exclude?.length
    ? select.data
    : select.data.filter((item) => {
        if (!exclude.includes(item)) return true;
        join[item] = true;
        return false;
      });

  const SELECT_SQL = filtered.reduce((acc, cur, index) => {
    if (!index) return sql`SELECT ${sql(cur)}`;
    return sql`${acc}, ${sql(cur)}`;
  }, sql``);

  return result(sql`${SELECT_SQL} FROM ${sql(from)}`, join);
};
