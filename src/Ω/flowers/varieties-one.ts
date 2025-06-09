import { FlowerVariety } from "./types/flower-variety";
import { sql } from "bun";
import { validator } from "../../libs/mws/validator";
import { z } from "zod";

const paramv = validator({
  target: "param",
  schema: z.object({
    id: z.string().refine((id) => Number.isInteger(+id)),
  }),
});

app.get("api/flowers/varieties/:id", paramv, async (c) => {
  const [flowerVariety]: FlowerVariety[] = await sql`
    SELECT * FROM "flowers_variety"
    WHERE "id" = ${c.req.valid("param").id}
  `;

  return c.json<FlowerVariety["valid"]>({ data: flowerVariety });
});
