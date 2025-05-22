import { sql } from "bun";

export const SELECT = <T = any>(from: string, select: (keyof T)[]) => {
  const SELECT_SQL = select.reduce((acc, cur, index) => {
    if (!index) return sql`SELECT ${sql(cur)}`;
    return sql`${acc}, ${sql(cur)}`;
  }, sql``);

  return sql`${SELECT_SQL} FROM ${sql(from)}`;
};
