import { Context } from "hono";
import { SELECT } from "./select";
import { SQLQuery, sql } from "bun";

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

  if (c.req.query("count") === "1") {
    const res: [{ count: string }] = await sql`
      ${select[1]}
      ${data.where}
    `;

    c.header("X-Count", res[0].count);
  }

  return sql`${select[0]} ${data.where} ${data.page}` as unknown as T[];
};
