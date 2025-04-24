import { Flowers, FlowersHistory } from "../../../prisma/types";
import { OR } from "../../libs/sql/or";
import { PAGE, SELECT, WHERE } from "../../libs/sql";
import { sql } from "bun";

app.get("api/flowers", async (c) => {
  const select = SELECT(c, "Flowers", ["hist"]);

  const flowers: Flowers[] = await sql`
    ${select.SQL}
    ${PAGE(c)}
    ${WHERE(c)}
  `;

  if (!select.join || select.join.hist) {
    let flowersHistory: FlowersHistory[] = await sql`
      SELECT * FROM "FlowersHistory"
      WHERE "flowersId" IN ${sql(flowers.map((f) => f.id))}
    `;

    const groupById = flowersHistory.reduce((acc, cur) => {
      const prev = acc[cur.flowersId] || [];
      return { ...acc, [cur.flowersId]: prev.concat(cur) };
    }, {} as { [key: string]: FlowersHistory[] });

    console.log(groupById);

    return c.json({ data: flowers.map((f) => ({ ...f, hist: groupById[f.id] })) });
  }

  return c.json({ data: flowers });
});
