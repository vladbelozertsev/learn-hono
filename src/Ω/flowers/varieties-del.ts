import { sql } from "bun";
import { validator } from "../../libs/mws/validator";
import { z } from "zod";

const paramv = validator({
  target: "param",
  schema: z.object({
    id: z.string().refine((id) => Number.isInteger(+id)),
  }),
});

app.delete("api/flowers/varieties/:id", paramv, async (c) => {
  await sql`
    DELETE FROM "flowers_variety"
    WHERE "id" = ${c.req.valid("param").id}
  `;

  return c.json({ success: true });
});
