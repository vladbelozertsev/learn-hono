import type { mimeTypes } from "./mime-types.js";
import { fileTypeFromBlob } from "file-type";
import { randomBytes } from "node:crypto";

type Prams = {
  allowed?: { [Key in keyof typeof mimeTypes]?: boolean };
  dir: "public" | "private";
  file?: unknown;
  maxSize?: number;
};

const allowedDefault: Prams["allowed"] = {
  png: true,
  gif: true,
  jpeg: true,
  jpg: true,
  svg: true,
  webp: true,
};

export const onFile = async (prams: Prams) => {
  // prams.file.text - sanitize sgv
  if (!(prams.file instanceof Blob)) return;
  if (prams.file?.size > (prams.maxSize || Infinity)) return;
  const fileType = await fileTypeFromBlob(prams.file);
  if (!fileType?.ext) return;
  const allowed = { ...allowedDefault, ...prams.allowed };
  if (!allowed[fileType.ext as keyof typeof mimeTypes]) return;
  const now = Math.round(Date.now() / 1000);
  const name = randomBytes(7).toString("hex");
  const savedAs = `${now}-${name}.${fileType.ext}`;
  await Bun.write(`${prams.dir}/${savedAs}`, prams.file);
  return { name: savedAs, size: prams.file.size };
};
