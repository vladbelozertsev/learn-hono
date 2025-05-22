import { SQLQuery, sql } from "bun";

export const SELECT = <T = any>(from: string, select: (keyof T)[]) => {
  const result = (SQL?: SQLQuery) => {
    const main = SQL || sql`SELECT * FROM ${sql(from)}`;
    const count = sql`SELECT COUNT(*) FROM ${sql(from)}`;
    return [main, count];
  };

  if (!select?.length) return result();

  // const SELECT_SQL = select?.reduce((acc, cur, index) => {
  //   if (!index) return sql`SELECT ${sql(cur)}`;
  //   return sql`${acc}, ${sql(cur)}`;
  // }, sql``);

  const SELECT_SQL = sql`SELECT ${["id", "name_en"]} FROM ${sql(from)}`;

  return result(sql`${SELECT_SQL} FROM ${sql(from)}`);
};
