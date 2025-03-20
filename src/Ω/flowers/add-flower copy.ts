import { createWriteStream } from "node:fs";
import { uploadHandler } from "hono-upload";

app.post("/flowers", async (ctx) => {
  ctx.req.parseBody();

  try {
    const result = await uploadHandler({
      ctx,
      maxFileSize: 5 * 1024 * 1024 * 1024, // 5GB
      onFile: (file, fileInfo) => {
        const writeStream = createWriteStream(fileInfo.filename);
        file.pipe(writeStream);
        writeStream
          .on("close", () => {
            ctx.text("ok", 200);
          })
          .on("error", (err) => {
            ctx.text("fail", 500);
          });
      },
    });
    ctx.status(200);
    return ctx.json({ result });
  } catch (asdasd) {
    console.log(asdasd);
  }
});
