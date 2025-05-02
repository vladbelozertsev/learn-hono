import { isStringOrNumber } from "../../helpers/utils";
import { sql } from "bun";

// | Filter              | Description                       |
// | ------------------- | --------------------------------- |
// | eq                  | Equal                             |
// | ne                  | Not equal                         |
// | lt                  | Less than                         |
// | gt                  | Greater than                      |
// | lte                 | Less than or equal to             |
// | gte                 | Greater than or equal to          |
// | in                  | Included in an array              |
// | nin                 | Not included in an array          |
// | contains            | Contains                          |
// | ncontains           | Doesn't contain                   |
// | containss           | Contains, case sensitive          |
// | ncontainss          | Doesn't contain, case sensitive   |
// | null                | Is null or not null               |
// | startswith          | Starts with                       |
// | nstartswith         | Doesn't start with                |
// | startswiths         | Starts with, case sensitive       |
// | nstartswiths        | Doesn't start with, case sensitive|
// | endswith            | Ends with                         |
// | nendswith           | Doesn't end with                  |
// | endswiths           | Ends with, case sensitive         |
// | nendswiths          | Doesn't end with, case sensitive  |
//-|---------------------|-----------------------------------|

export const getSQLFilter = (filter: [string, string, (string | number | boolean) | (string | number | boolean)[]]) => {
  const column = filter[0];
  const value = filter[2];

  switch (filter[1]) {
    case "eq":
      return sql`${sql(column)} = ${value}`;

    case "ne":
      return sql`${sql(column)} <> ${value}`;

    case "ln":
      return sql`${sql(column)} < ${value}`;

    case "gt":
      return sql`${sql(column)} > ${value}`;

    case "lte":
      return sql`${sql(column)} <= ${value}`;

    case "gte":
      return sql`${sql(column)} >= ${value}`;

    case "in":
      if (!Array.isArray(value)) return null;
      const allIn = value.map((v) => isStringOrNumber(v) && v);
      const filteredIn = allIn.filter((v) => v !== false);
      if (!filteredIn.length) return null;
      return sql`${sql(column)} IN ${sql(filteredIn)}`;

    case "nin":
      if (!Array.isArray(value)) return null;
      const allNotIn = value.map((v) => isStringOrNumber(v) && v);
      const filteredNotIn = allNotIn.filter((v) => v !== false);
      if (!filteredNotIn.length) return null;
      return sql`${sql(column)} NOT IN ${sql(filteredNotIn)}`;

    case "contains":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} LIKE ${value}`;

    case "ncontains":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} NOT LIKE ${value}`;

    case "containss":
      if (typeof value !== "string") return null;
      return sql`LOWER(${sql(column)}) LIKE LOWER(${value})`;

    case "ncontainss":
      if (typeof value !== "string") return null;
      return sql`LOWER(${sql(column)}) NOT LIKE LOWER(${value})`;

    case "null":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} IS NULL`;

    case "startswith":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} LIKE ${value + "%"}`;

    case "nstartswith":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} NOT LIKE ${value + "%"}`;

    case "startswiths":
      if (typeof value !== "string") return null;
      return sql`LOWER(${sql(column)}) LIKE LOWER(${value + "%"})`;

    case "nstartswiths":
      if (typeof value !== "string") return null;
      return sql`LOWER(${sql(column)}) NOT LIKE LOWER(${value + "%"})`;

    case "endswith":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} LIKE ${"%" + value}`;

    case "nendswith":
      if (typeof value !== "string") return null;
      return sql`${sql(column)} NOT LIKE ${"%" + value}`;

    case "endswiths":
      if (typeof value !== "string") return null;
      return sql`LOWER(${sql(column)}) LIKE LOWER(${"%" + value})`;

    case "nendswiths":
      if (typeof value !== "string") return null;
      return sql`LOWER(${sql(column)}) NOT LIKE LOWER(${"%" + value})`;

    case "btw":
      if (!Array.isArray(value) || value.length !== 2) return null;
      const fromBtw = isStringOrNumber(value[0]) && value[0];
      const toBtw = isStringOrNumber(value[1]) && value[1];
      if (!fromBtw || !toBtw) return null;
      return sql`${sql(column)} BETWEEN ${fromBtw} and ${toBtw}`;

    case "nbtw":
      if (!Array.isArray(value) || value.length !== 2) return null;
      const fromNotBtw = isStringOrNumber(value[0]) && value[0];
      const toNotBtw = isStringOrNumber(value[1]) && value[1];
      if (!fromNotBtw || !toNotBtw) return null;
      return sql`${sql(column)} NOT BETWEEN ${fromNotBtw} and ${toNotBtw}`;

    default:
      return null;
  }
};
