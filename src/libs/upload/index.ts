import busboy from "busboy";
import { onFile } from "./save-file.js";
import type { Context } from "hono";
import type { mimeTypes } from "./mime-types.js";

type Prams = {
  ctx: Context;
  config?: Omit<busboy.BusboyConfig, "headers">;
  allowed?: { [Key in keyof typeof mimeTypes]?: boolean };
  dir: "public" | "private";
};

type Return = Promise<{
  success: boolean;
  err?: unknown;
}>;

export const upload = (prams: Prams): Return => {
  const contentType = prams.ctx.req.raw.headers.get("Content-Type");
  const highWaterMark = prams.config?.highWaterMark || 1;
  const cqs = new CountQueuingStrategy({ highWaterMark });
  const isMultipart = contentType?.includes("multipart/form-data");

  if (!isMultipart) throw new Error("CONTENT_TYPE_IS_NOT_MULTIPART");
  if (!prams.ctx.req.raw.body) throw new Error("BODY_IS_UNDEFINED");

  return new Promise((resolve, reject) => {
    const bb = busboy({
      headers: Object.fromEntries(prams.ctx.req.raw.headers.entries()),
      highWaterMark: highWaterMark,
      ...prams.config,
    });

    const writableStream = new WritableStream<Uint8Array>(
      {
        abort(reason) {
          reject(reason);
        },
        write(chunk) {
          bb.write(chunk);
        },
        close() {
          bb.end();
        },
      },
      cqs
    );

    bb.on("file", (_, file, info) => {
      console.log("on file");
      const { allowed, dir } = prams;
      onFile({ file, info, allowed, dir });
    });

    bb.on("error", (err) => {
      bb.removeAllListeners();
      reject({ success: false, err });
    });

    bb.on("close", () => {
      const close = writableStream.getWriter()?.close;
      if (!close) writableStream.close().catch(console.error);
      bb.removeAllListeners();
      resolve({ success: true });
    });

    prams.ctx.req.raw.body!.pipeTo(writableStream).catch((e) => {
      reject(e);
    });
  });
};
