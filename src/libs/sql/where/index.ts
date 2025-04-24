import { Context } from "hono";
import { atobURL, safeParseJSON } from "../../helpers/utils";
import { getSQLFilter } from "./get-sql-filter";
import { sql } from "bun";
import { z } from "zod";

const filterSchema = z
  .tuple([
    z.string().refine((column) => /^[A-Za-z0-9]+$/.test(column)),
    z.string().nonempty(),
    z.union([
      z.string().nonempty().or(z.number()).or(z.boolean()),
      z.string().nonempty().or(z.number()).or(z.boolean()).array(),
    ]),
  ])
  .array();

export const WHERE = (c: Context<any, any, any>) => {
  const filterJSON = atobURL(c.req.query("filter"));
  if (!filterJSON) return sql``;

  const filters = filterSchema.safeParse(safeParseJSON(filterJSON));

  if (!filters.success || !filters.data) {
    console.error(filters.error);
    return sql``;
  }

  return filters.data
    .map(getSQLFilter)
    .filter((sqlQuery) => !!sqlQuery)
    .reduce((acc, cur, index) => {
      if (!index) return sql`WHERE ${cur}`;
      return sql`${acc} AND ${cur}`;
    }, sql``);
};

/**
 * Useful links:
 * https://stackoverflow.com/questions/75511010/is-it-possible-to-chain-regex-expressions-in-zod
 **/
