import Stream from "node:stream";
import busboy from "busboy";
import { createWriteStream } from "node:fs";
import { finished } from "node:stream/promises";
import { randomBytes } from "node:crypto";
import type { mimeTypes } from "./mime-types.js";

type Prams = {
  dir: "public" | "private";
  allowed?: { [Key in keyof typeof mimeTypes]?: boolean };
  file: Stream.Readable & { truncated?: boolean };
  info: busboy.FileInfo;
};

const allowedDefault: Prams["allowed"] = {
  png: true,
  gif: true,
  jpeg: true,
  jpg: true,
  svg: true,
  webp: true,
};

export const onFile = (prams: Prams) => {
  const allowed = { ...allowedDefault, ...prams.allowed };
  const ext = prams.info.filename.split(".")[1];
  if (!allowed[ext as keyof typeof mimeTypes]) return;
  const now = Math.round(Date.now() / 1000);
  const name = randomBytes(7).toString("hex");
  const savedAs = `${now}-${name}.${ext}`;
  const writeStream = createWriteStream(`${prams.dir}/${savedAs}`);
  prams.file.pipe(writeStream);
  return finished(writeStream).then(() => ({ savedAs }));
};
