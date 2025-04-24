import { Context } from "hono";
import { atobURL, safeParseJSON } from "../../helpers/utils";
import { sql } from "bun";
import { z } from "zod";

const orderSchema = z
  .tuple([z.string().refine((column) => /^[A-Za-z0-9]+$/.test(column)), z.enum(["ASC", "DESC"])])
  .or(z.tuple([z.string().refine((column) => /^[A-Za-z0-9]+$/.test(column))]))
  .array();

export const PAGE = (c: Context<any, any, any>) => {
  if (c.req.query("nopages") === "1") return sql``;
  const limit = parseInt(c.req.query("limit") || "10");
  const offset = parseInt(c.req.query("offset") || "0");
  const orderJSON = atobURL(c.req.query("order"));
  if (!orderJSON) return sql`LIMIT ${limit} OFFSET ${offset}`;

  const orderParsed = safeParseJSON(orderJSON);
  const order = orderSchema.safeParse(orderParsed);
  if (!order.data || !order.success) return sql`LIMIT ${limit} OFFSET ${offset}`;

  const ORDER_BY = order.data.reduce((acc, cur, index) => {
    if (!index && cur[1] === "DESC") return sql`ORDER BY ${sql(cur[0])} DESC`;
    if (!index) return sql`ORDER BY ${sql(cur[0])} ASC`;
    if (cur[1] === "DESC") return sql`${acc}, ${sql(cur[0])} DESC`;
    return sql`${acc}, ${sql(cur[0])} ASC`;
  }, sql``);

  return sql`${ORDER_BY} LIMIT ${limit} OFFSET ${offset}`;
};
