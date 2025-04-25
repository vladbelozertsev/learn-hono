import { Flowers, FlowersHistory } from "../../../prisma/types";
import { INTERSECT, PAGE, SELECT, WHERE } from "../../libs/sql";
import { groupBy, queryIds } from "../../libs/helpers/utils";
import { sql } from "bun";

app.get("api/flowers", async (c) => {
  const select = SELECT(c, "Flowers", ["hist"]);
  const farms = queryIds(c, "farms");
  const bouquets = queryIds(c, "bouquets");

  // prettier-ignore
  const flowersFarms = farms.length && sql`
    SELECT "flowersId"
    FROM "FlowersFarmsAndFlowers"
    WHERE "flowersFarmsId" IN ${sql(farms)}
  `;

  const flowersBouquets = sql`
    SELECT "flowersId"
    FROM "FlowersBouquetsAndFlowers"
    WHERE "flowersBouquetsId" IN ${sql(bouquets)}
  `;

  const intersect = [
    farms.length && flowersFarms, //
    bouquets.length && flowersBouquets,
  ];

  const flowers: Flowers[] = await sql`
    ${select.SQL}
    ${WHERE(c, INTERSECT("id", intersect))}
    ${PAGE(c)}
  `;

  console.log("first, flowers", flowers);

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
