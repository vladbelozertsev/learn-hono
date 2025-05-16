import { Context } from "hono";
import { SQLQuery, sql } from "bun";
import { atobURL, safeParseJSON } from "../../helpers/utils";
import { z } from "zod";

type Params<T> = {
  from: string;
  select?: T extends any ? string[] : (keyof T)[];
  exclude?: string[];
};

const selectSchema = z
  .string()
  .refine((column) => /^[A-Za-z0-9]+$/.test(column))
  .array();

export const SELECT = <T = any>(c: Context<any, any, any>, params: Params<T>) => {
  const result = (SQL?: SQLQuery, join?: { [key: string]: boolean }) => {
    const main = SQL || sql`SELECT * FROM ${sql(params.from)}`;
    const count = sql`SELECT COUNT(*) FROM ${sql(params.from)}`;
    return { sql: [main, count], join };
  };

  let select = (params.select || []) as string[];
  const selectJSON = atobURL(c.req.query("select"));

  if (selectJSON) {
    const orderParsed = safeParseJSON(selectJSON);
    const safeParsed = selectSchema.safeParse(orderParsed);
    if (!select.length && !safeParsed.data?.length) return result();
    if (safeParsed.success) select = safeParsed.data;
  }

  let join: { [key: string]: boolean } = {};

  const filtered = !params.exclude?.length
    ? select
    : select.filter((item) => {
        if (!params.exclude?.includes(item)) return true;
        join[item] = true;
        return false;
      });

  const SELECT_SQL = filtered.reduce((acc, cur, index) => {
    if (!index) return sql`SELECT ${sql(cur)}`;
    return sql`${acc}, ${sql(cur)}`;
  }, sql``);

  return result(sql`${SELECT_SQL} FROM ${sql(params.from)}`, join);
};
