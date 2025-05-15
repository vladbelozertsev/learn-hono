import { FlowerVariety } from "./types/flower-variety";
import { sanitize } from "../../libs/helpers/utils";
import { sql } from "bun";
import { validator } from "../../libs/mws/validator";
import { z } from "zod";

const paramv = validator({
  target: "param",
  schema: z.object({
    id: z.string().refine((id) => Number.isInteger(+id)),
  }),
});

const jsonv = validator({
  target: "json",
  schema: z.object({
    title: z.string().nonempty().transform(sanitize),
  }),
});

app.put("api/flowers/varieties/:id", paramv, jsonv, async (c) => {
  const [flowerVariety]: [FlowerVariety["value"]] = await sql`
    UPDATE "FlowersVariety"
    SET ${sql(c.req.valid("json"))}
    WHERE "id" = ${+c.req.valid("param").id}
    RETURNING *
  `;

  return c.json<FlowerVariety["valid"]>({ flowerVariety });
});

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll
