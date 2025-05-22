import { Context } from "hono";
import { SQLQuery, sql } from "bun";

export const setCountHeader = async (c: Context<any, any, any>, SELECT_COUNT: SQLQuery, WHERE: SQLQuery) => {
  if (c.req.query("count") !== "1") return;

  const res: [{ count: string }] = await sql`
    ${SELECT_COUNT}
    ${WHERE}
  `;

  c.header("X-Count", res[0].count);

  return res[0].count;
};
