import { SQLQuery, sql } from "bun";

export const INTERSECT = (column: string, select: any[]) => {
  const arr = select.filter((item) => !!item);
  if (!arr.length) return sql``;

  return arr.reduce((acc, cur, index) => {
    if (arr.length === 1) return sql`${acc}${cur})`;
    if (arr.length === index + 1) return sql`${acc} INTERSECT ${cur})`;
    if (index === 0) return sql`${acc}${cur}`;
    return sql`${acc} INTERSECT ${cur}`;
  }, sql`${sql(column)} IN (`);
};
