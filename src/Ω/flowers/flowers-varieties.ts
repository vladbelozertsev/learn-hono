import { COUNT, PAGE, SELECT, WHERE } from "../../libs/sql";
import { FlowerVariety } from "./types/flower-variety";

app.get("api/flowers/varieties", async (c) => {
  console.log("varietiesvarietiesvarietiesvarieties");
  const flowersVarieties = await COUNT<FlowerVariety["value"][]>(c, {
    select: SELECT(c, "FlowersVariety").sql,
    where: WHERE(c),
    page: PAGE(c),
  });

  console.log(flowersVarieties);

  return c.json<FlowerVariety["valid"]>({ data: flowersVarieties });
});

// https://stackoverflow.com/questions/349559/sql-how-to-search-a-many-to-many-relationship
