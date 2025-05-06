import { Flower } from "./types/flower";
import { sanitize } from "../../libs/helpers/utils";
import { sql } from "bun";
import { validator } from "../../libs/mws/validator";
import { z } from "zod";

const jsonv = validator({
  target: "json",
  schema: z.object({
    color: z.string().nonempty().transform(sanitize),
    name: z.string().nonempty().transform(sanitize),
    price: z.number(),
    varieryId: z.number(),
  }),
});

app.post("api/flowers", jsonv, async (c) => {
  const [flower]: [Flower["value"]] = await sql`
    INSERT INTO "Flowers"
    ${sql(c.req.valid("json"))}
    RETURNING *
  `;

  return c.json<Flower["valid"]>({ flower });
});

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll
