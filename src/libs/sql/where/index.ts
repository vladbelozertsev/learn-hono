import { Context } from "hono";
import { SQLQuery, sql } from "bun";
import { atobURL, safeParseJSON } from "../../helpers/utils";
import { getSQLFilter } from "./get-sql-filter";
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

export const WHERE = (c: Context<any, any, any>, and?: SQLQuery) => {
  const filterJSON = atobURL(c.req.query("filter"));
  if (!filterJSON) return and ? sql`WHERE ${and}` : sql``;

  const filters = filterSchema.safeParse(safeParseJSON(filterJSON));

  if (!filters.success || !filters.data?.length) {
    if (filters.error) console.error("SQL_WHERE", filters.error);
    return and ? sql`WHERE ${and}` : sql``;
  }

  return filters.data
    .map(getSQLFilter)
    .filter((sqlQuery) => !!sqlQuery)
    .reduce((acc, cur, index) => {
      if (!index && and) return sql`WHERE ${and} AND ${cur}`;
      if (!index) return sql`WHERE ${cur}`;
      return sql`${acc} AND ${cur}`;
    }, sql``);
};

/**
 * Useful links:
 * https://stackoverflow.com/questions/75511010/is-it-possible-to-chain-regex-expressions-in-zod
 **/
