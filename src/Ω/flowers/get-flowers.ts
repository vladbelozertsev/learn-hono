import { INTERSECT, LIST, PAGE, WHERE } from "../../libs/sql";
import { SFlower } from "./types/flower";
import { fileURL, groupBy, queryIds } from "../../libs/helpers/utils";
import { flowers_and_files as FFiles } from "../../libs/prisma";
import { sql } from "bun";

app.get("api/flowers", async (c) => {
  const and = INTERSECT("id", [
    {
      select: "flower_id",
      from: "flowers_farms_and_flowers",
      where: "flowers_farm_id",
      in: queryIds(c, "farms"),
    },
    {
      select: "flower_id",
      from: "flowers_bouquets_and_flowers",
      where: "flowers_bouquet_id",
      in: queryIds(c, "bouquets"),
    },
  ]);

  let flowers = await LIST<SFlower["value"]>(c, {
    select: ["Flowers", ["id", "name_en"]],
    where: WHERE(c, and),
    page: PAGE(c),
  });

  const faf: { [key: string]: FFiles[] } = await sql`
    SELECT *
    FROM "flowers_and_files"
    WHERE "flower_id" IN ${sql(flowers.map((f) => f.id))}
  `.then((arr) => groupBy("flower_id", arr));

  flowers = flowers.map((f) => {
    const imgs = faf[f.id]?.map((img) => fileURL(img.public_file_name));
    return { ...f, imgs };
  });

  return c.json<SFlower["valid"]>({ data: flowers });
});

// https://stackoverflow.com/questions/349559/sql-how-to-search-a-many-to-many-relationship
