import { FlowerVariety } from "./types/flower-variety";
import { sanitize } from "../../libs/helpers/utils";
import { sql } from "bun";
import { validator } from "../../libs/mws/validator";
import { z } from "zod";

const jsonv = validator({
  target: "json",
  schema: z.object({
    title: z.string().nonempty().transform(sanitize),
  }),
});

app.post("api/flowers/varieties", jsonv, async (c) => {
  const [flowerVariety]: [FlowerVariety["value"]] = await sql`
    INSERT INTO "FlowersVariety"
    ${sql(c.req.valid("json"))}
    RETURNING *
  `;

  return c.json<FlowerVariety["valid"]>({ flowerVariety });
});

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll
