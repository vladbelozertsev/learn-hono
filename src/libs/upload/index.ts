import type { Context } from "hono";
import type { mimeTypes } from "./mime-types.js";
import { HTTPException } from "hono/http-exception";
import { onFile } from "./save-file.js";
import { private_files, public_files } from "../prisma/index.js";
import { sql } from "bun";

type Prams = {
  allowed?: { [Key in keyof typeof mimeTypes]?: boolean };
  onFile?: (file: public_files | private_files) => void | Promise<void>;
  dir: "public" | "private";
  maxSize?: number;
  filesName?: string;
};

export const upload = async (c: Context, prams: Prams) => {
  const contentType = c.req.raw.headers.get("Content-Type");
  const isMultipart = contentType?.includes("multipart/form-data");
  if (!isMultipart) throw new HTTPException(415, { message: "CONTENT_TYPE_IS_NOT_MULTIPART" });
  if (!c.req.raw.body) throw new HTTPException(422, { message: "BODY_IS_UNDEFINED" });

  const formData = await c.req.formData();
  const files = formData.getAll(prams.filesName || "$files");

  const result = files.map(async (file) => {
    const data = await onFile({ ...prams, file }).catch(console.error);
    if (!data) return;
    const url = `${process.env.URL}/${prams.dir}/${data.name}`;

    if (prams.dir === "public") {
      const dbFile = await sql`INSERT INTO "PublicFiles" ${sql(data)} RETURNING *`;
      if (prams.onFile) await prams.onFile(dbFile[0]);
      return { url, file: dbFile[0] as public_files };
    }

    const dbFile = await sql`INSERT INTO "PrivateFiles" ${sql(data)} RETURNING *`;
    if (prams.onFile) await prams.onFile(dbFile[0]);
    return { url, file: dbFile[0] as private_files };
  });

  return Promise.allSettled(result);
};
