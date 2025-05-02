import { SQLQuery, sql } from "bun";

type Select = {
  select: string;
  from: string;
  where: string;
  in: (string | number | boolean)[];
};

export const INTERSECT = (column: string, data: Select[]) => {
  const select = data.map((item) => {
    if (!item.in.length) return null;
    return sql`
      SELECT ${sql(item.select)}
      FROM ${sql(item.from)}
      WHERE ${sql(item.where)} IN ${sql(item.in)}
    `;
  });

  const arr = select.filter((item) => !!item);
  if (!arr.length) return;

  return arr.reduce((acc, cur, index) => {
    if (arr.length === 1) return sql`${acc}${cur})`;
    if (arr.length === index + 1) return sql`${acc} INTERSECT ${cur})`;
    if (index === 0) return sql`${acc}${cur}`;
    return sql`${acc} INTERSECT ${cur}`;
  }, sql`${sql(column)} IN (`);
};
