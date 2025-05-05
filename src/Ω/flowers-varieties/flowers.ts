import { COUNT, INTERSECT, PAGE, SELECT, WHERE } from "../../libs/sql";
import { groupBy, queryIds } from "../../libs/helpers/utils";
import { sql } from "bun";

app.get("api/flowers-varieties", async (c) => {
  console.log("first");
  return c.json({ ok: "123" });
});

// https://stackoverflow.com/questions/349559/sql-how-to-search-a-many-to-many-relationship
