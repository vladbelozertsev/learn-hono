import { Flower } from "./types/flower";
import { sanitize } from "../../libs/helpers/utils";
import { sql } from "bun";
import { upload } from "../../libs/helpers/upload";
import { validator } from "../../libs/mws/validator";
import { z } from "zod";

const formv = validator({
  target: "form",
  schema: z.object({
    color: z.string().nonempty().transform(sanitize),
    name: z.string().nonempty().transform(sanitize),
    price: z.string().refine((v) => !isNaN(+v)),
    varietyId: z.string().refine((v) => !isNaN(+v)),
  }),
});

app.post("api/flowers", formv, async (c) => {
  const form = await c.req.formData();
  const color = form.get("color") as string;
  const name = form.get("name") as string;
  const price = +form.get("price")!;
  const varietyId = +form.get("varietyId")!;

  const [flower]: [Flower["value"]] = await sql`
    INSERT INTO "Flowers"
    ${sql({ color, name, price, varietyId })}
    RETURNING *
  `;

  await upload(c, {
    dir: "public",
    onFile: async ({ name: publicFileName }) => {
      const data = { flowersId: flower.id, publicFileName };
      await sql`INSERT INTO "FlowersAndFiles" ${sql(data)}`;
      console.log("onFile2");
    },
  });

  return c.json<Flower["valid"]>({ flower });
});

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll
