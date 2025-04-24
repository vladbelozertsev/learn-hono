import { isStringOrNumber } from "../../helpers/utils";
import { sql } from "bun";

export const getSQLFilter = (filter: [string, string, (string | number | boolean) | (string | number | boolean)[]]) => {
  const operator = filter[1].toUpperCase();
  const column = filter[0];
  const value = filter[2];

  switch (operator) {
    case "=":
      return sql`${sql(column)} = ${value}`;

    case ">":
      return sql`${sql(column)} > ${value}`;

    case "<":
      return sql`${sql(column)} < ${value}`;

    case ">=":
      return sql`${sql(column)} >= ${value}`;

    case "<=":
      return sql`${sql(column)} <= ${value}`;

    case "<>":
      return sql`${sql(column)} <> ${value}`;

    case "BTW":
      if (!Array.isArray(value) || value.length !== 2) return null;
      const from = isStringOrNumber(value[0]) && value[0];
      const to = isStringOrNumber(value[1]) && value[1];
      if (!from || !to) return null;
      return sql`${sql(column)} BETWEEN ${from} and ${to}`;

    case "LIKE":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} LIKE ${value}`;

    case "IN":
      if (!Array.isArray(value)) return null;
      const all = value.map((v) => isStringOrNumber(v) && v);
      const filtered = all.filter((v) => v !== false);
      if (!filtered.length) return null;
      return sql`${sql(column)} IN ${sql(filtered)}`;

    default:
      return null;
  }
};
