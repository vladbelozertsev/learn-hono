import { COUNT, INTERSECT, PAGE, SELECT, WHERE } from "../../libs/sql";
import { Flower } from "./types/flower";
import { FlowersAndFiles, FlowersHistory, PublicFiles } from "../../libs/prisma";
import { getImgs, groupBy, queryIds } from "../../libs/helpers/utils";
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

  let flowers = await COUNT<Flower["value"][]>(c, {
    select: select.sql,
    where: WHERE(c, and),
    page: PAGE(c),
  });

  if (!select.join || select.join.hist) {
    const history: { [key: string]: FlowersHistory[] } = await sql`
      SELECT * FROM "FlowersHistory"
      WHERE "flowersId" IN ${sql(flowers.map((f) => f.id))}
    `.then((arr) => groupBy("flowersId", arr));
    flowers = flowers.map((f) => ({ ...f, hist: history[f.id] }));
  }

  if (!select.join || select.join.imgs) {
    const sqlImgs: { [key: string]: (FlowersAndFiles & PublicFiles)[] } = await sql`
      SELECT *
      FROM "FlowersAndFiles"
      INNER JOIN "PublicFiles"
      ON ${sql("FlowersAndFiles.publicFilesId")} = ${sql("PublicFiles.id")}
      WHERE "flowersId" IN ${sql(flowers.map((f) => f.id))}
    `.then((arr) => groupBy("flowersId", arr));

    flowers = flowers.map((f) => {
      const imgs = getImgs(sqlImgs[f.id]);
      return { ...f, imgs };
    });
  }

  return c.json<Flower["valid"]>({ data: flowers });
});

// https://stackoverflow.com/questions/349559/sql-how-to-search-a-many-to-many-relationship
