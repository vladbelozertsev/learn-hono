import { Flowers, FlowersHistory } from "../../../prisma/types";
import { INTERSECT, PAGE, SELECT, WHERE } from "../../libs/sql";
import { groupBy, queryIds } from "../../libs/helpers/utils";
import { sql } from "bun";

app.get("api/flowers", async (c) => {
  const select = SELECT(c, "Flowers", ["hist"]);

  const and = INTERSECT("id", [
    {
      in: queryIds(c, "farms"),
      select: "flowersId",
      from: "FlowersFarmsAndFlowers",
      where: "flowersFarmsId",
    },
    {
      in: queryIds(c, "bouquets"),
      select: "flowersId",
      from: "FlowersBouquetsAndFlowers",
      where: "flowersBouquetsId",
    },
  ]);

  const flowers: Flowers[] = await sql`
    ${select.SQL}
    ${WHERE(c, and)}
    ${PAGE(c)}
  `;

  if (!select.join || select.join.hist) {
    let history: { [key: string]: FlowersHistory[] } = await sql`
      SELECT * FROM "FlowersHistory"
      WHERE "flowersId" IN ${sql(flowers.map((f) => f.id))}
    `.then((arr) => groupBy("flowersId", arr));
    return c.json({ data: flowers.map((f) => ({ ...f, hist: history[f.id] })) });
  }

  return c.json({ data: flowers });
});

///

///https://stackoverflow.com/questions/349559/sql-how-to-search-a-many-to-many-relationship
