import { Flower } from "./types/flower";
import { sanitize } from "../../libs/helpers/utils";
import { sql } from "bun";
import { upload } from "../../libs/upload";
import { validator } from "../../libs/mws/validator";
import { z } from "zod";

const formv = validator({
  target: "form",
  schema: z.object({
    color: z.string().nonempty().transform(sanitize),
    name: z.string().nonempty().transform(sanitize),
    price: z
      .string()
      .refine((v) => !isNaN(+v))
      .transform((v) => +sanitize(v)),
    varietyId: z
      .string()
      .refine((v) => Number.isInteger(+v))
      .transform((v) => +sanitize(v)),
  }),
});

app.post("api/flowers", formv, async (c) => {
  const [flower]: [Flower["value"]] = await sql`
    INSERT INTO "Flowers"
    ${sql(c.req.valid("form"))}
    RETURNING *
  `;

  await upload(c, {
    dir: "public",
    filesName: "gfhghghg",
    onFile: async ({ name: publicFileName }) => {
      const data = { flowersId: flower.id, publicFileName };
      await sql`INSERT INTO "FlowersAndFiles" ${sql(data)}`;
      console.log("onFile2");
    },
  });

  return c.json<Flower["valid"]>({ flower });
});

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll
