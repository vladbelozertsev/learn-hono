import type { Context } from "hono";
import type { mimeTypes } from "./mime-types.js";
import { HTTPException } from "hono/http-exception";
import { PrivateFiles, PublicFiles } from "../../../../prisma/types/index.js";
import { onFile } from "./save-file.js";
import { sql } from "bun";

type Prams = {
  allowed?: { [Key in keyof typeof mimeTypes]?: boolean };
  ctx: Context;
  dir: "public" | "private";
  maxSize?: number;
};

export const upload = async (prams: Prams) => {
  const contentType = prams.ctx.req.raw.headers.get("Content-Type");
  const isMultipart = contentType?.includes("multipart/form-data");
  if (!isMultipart) throw new HTTPException(415, { message: "CONTENT_TYPE_IS_NOT_MULTIPART" });
  if (!prams.ctx.req.raw.body) throw new HTTPException(422, { message: "BODY_IS_UNDEFINED" });

  const formData = await prams.ctx.req.formData();
  const files = formData.getAll("files");

  const result = files.map(async (file) => {
    const data = await onFile({ ...prams, file }).catch(console.error);
    if (!data) return;
    const url = `${process.env.URL}/${prams.dir}/${data.name}`;

    if (prams.dir === "public") {
      const dbFile = await sql`INSERT INTO "PublicFiles" ${sql(data)} RETURNING *`;
      return { url, file: dbFile as PublicFiles };
    }

    const dbFile = await sql`INSERT INTO "PrivateFiles" ${sql(data)} RETURNING *`;
    return { url, file: dbFile as PrivateFiles };
  });

  return Promise.allSettled(result);
};
