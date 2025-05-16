import { COUNT, PAGE, SELECT, WHERE } from "../../libs/sql";
import { FlowerVariety } from "./types/flower-variety";
import { sql } from "bun";

app.get("api/flowers/varieties2", async (c) => {
  // const flowersVarieties = await COUNT<FlowerVariety["value"][]>(c, {
  //   select: SELECT(c, "FlowersVariety").sql,
  //   where: WHERE(c),
  //   page: PAGE(c),
  // });

  // const flowersVarieties = await sql`
  //   SELECT *, "title" -> 'test3' as "title" FROM "FlowersVariety"
  // `;

  const flowersVarieties = await sql`
    select coalesce(nullif(title -> :lang, ''), title -> 'test3') from "FlowersVariety"
  `;

  console.log(flowersVarieties);

  return c.json<FlowerVariety["valid"]>({ data: flowersVarieties });
});

// https://stackoverflow.com/questions/349559/sql-how-to-search-a-many-to-many-relationship
