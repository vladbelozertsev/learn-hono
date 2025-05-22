import { FlowerVariety } from "./types/flower-variety";
import { LIST, PAGE, WHERE } from "../../libs/sql";

app.get("api/flowers/varieties", async (c) => {
  const flowersVarieties = await LIST<FlowerVariety["value"]>(c, {
    select: ["flowers_variety", ["id", "name_en"]],
    where: WHERE(c),
    page: PAGE(c),
  });

  return c.json<FlowerVariety["valid"]>({ data: flowersVarieties });
});

// https://stackoverflow.com/questions/349559/sql-how-to-search-a-many-to-many-relationship
