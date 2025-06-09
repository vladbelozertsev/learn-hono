import { sql } from "bun";
import { z } from "zod";

const orSchema = z.tuple([z.string(), z.string().nonempty().or(z.number()).or(z.boolean())]).array();

export const OR = (data: [string, string | number | boolean][]) => {
  const items = orSchema.safeParse(data);
  if (!items.data || !items.success) return sql``;
  return items.data.reduce((acc, cur, index) => {
    if (!index) return sql`WHERE ${sql(cur[0])} = ${cur[1]}`;
    return sql`${acc} OR ${sql(cur[0])} = ${cur[1]}`;
  }, sql``);
};
