import Stream from "node:stream";
import busboy from "busboy";
import path from "node:path";
import { createWriteStream } from "node:fs";

export const onFile = (
  listener: Stream.Readable & { truncated?: boolean },
  info: busboy.FileInfo
) => {
  const saveTo = path.join("uploads", info.filename);
  listener.pipe(createWriteStream(saveTo));
};
