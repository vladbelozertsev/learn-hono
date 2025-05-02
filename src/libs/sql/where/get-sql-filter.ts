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
      const fromBtw = isStringOrNumber(value[0]) && value[0];
      const toBtw = isStringOrNumber(value[1]) && value[1];
      if (!fromBtw || !toBtw) return null;
      return sql`${sql(column)} BETWEEN ${fromBtw} and ${toBtw}`;

    case "NOT_BTW":
      if (!Array.isArray(value) || value.length !== 2) return null;
      const fromNotBtw = isStringOrNumber(value[0]) && value[0];
      const toNotBtw = isStringOrNumber(value[1]) && value[1];
      if (!fromNotBtw || !toNotBtw) return null;
      return sql`${sql(column)} NOT BETWEEN ${fromNotBtw} and ${toNotBtw}`;

    case "LIKE":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} LIKE ${value}`;

    case "NOT_LIKE":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} NOT LIKE ${value}`;

    case "IN":
      if (!Array.isArray(value)) return null;
      const allIn = value.map((v) => isStringOrNumber(v) && v);
      const filteredIn = allIn.filter((v) => v !== false);
      if (!filteredIn.length) return null;
      return sql`${sql(column)} IN ${sql(filteredIn)}`;

    case "NOT_IN":
      if (!Array.isArray(value)) return null;
      const allNotIn = value.map((v) => isStringOrNumber(v) && v);
      const filteredNotIn = allNotIn.filter((v) => v !== false);
      if (!filteredNotIn.length) return null;
      return sql`${sql(column)} NOT IN ${sql(filteredNotIn)}`;

    default:
      return null;
  }
};
