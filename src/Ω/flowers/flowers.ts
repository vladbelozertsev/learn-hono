import { COUNT, INTERSECT, PAGE, SELECT, WHERE } from "../../libs/sql";
import { Flowers, FlowersHistory } from "../../../prisma/types";
import { groupBy, queryIds } from "../../libs/helpers/utils";
import { sql } from "bun";

app.get("api/flowers", async (c) => {
  const select = SELECT(c, "Flowers", ["hist"]);

  const and = INTERSECT("id", [
    {
      select: "flowersId",
      from: "FlowersFarmsAndFlowers",
      where: "flowersFarmsId",
      in: queryIds(c, "farms"),
    },
    {
      select: "flowersId",
      from: "FlowersBouquetsAndFlowers",
      where: "flowersBouquetsId",
      in: queryIds(c, "bouquets"),
    },
  ]);

  const flowers = await COUNT<Flowers[]>(c, {
    select: [select.SQL, select.COUNT],
    where: WHERE(c, and),
    page: PAGE(c),
  });

  if (!select.join || select.join.hist) {
    const history: { [key: string]: FlowersHistory[] } = await sql`
      SELECT * FROM "FlowersHistory"
      WHERE "flowersId" IN ${sql(flowers.map((f) => f.id))}
    `.then((arr) => groupBy("flowersId", arr));
    return c.json({
      data: flowers.map((f) => ({
        ...f,
        hist: history[f.id],
        img: "http://localhost:3000/public/1742829153-5cbec2c72f241d.jpg",
      })),
    });
  }

  flowers.map((f) => ({ ...f, img: "http://localhost:3000/public/1742829153-5cbec2c72f241d.jpg" }));

  return c.json(flowers);
});

// https://stackoverflow.com/questions/349559/sql-how-to-search-a-many-to-many-relationship
