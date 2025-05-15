import { sql } from "bun";
import { validator } from "../../libs/mws/validator";
import { z } from "zod";

const paramv = validator({
  target: "param",
  schema: z.object({
    id: z.string().refine((id) => !isNaN(+id)),
  }),
});

app.delete("api/flowers/varieties/:id", paramv, async (c) => {
  const id = +c.req.valid("param").id;

  await sql`
    DELETE FROM "FlowersVariety"
    WHERE "id" = ${id}
  `;

  return c.json({ success: true });
});
