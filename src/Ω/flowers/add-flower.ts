import { createWriteStream } from "node:fs";
import { uploadHandler } from "hono-upload";
import { upload } from "../../libs/upload/index.js";

app.post("/flowers", async (ctx) => {
  console.log("/flowers/flowers/flowers");
  upload({ ctx, dir: "public" });
  return ctx.text("ok");
});

app.get("/flowers", (ctx) => {
  // honoUploader(ctx);
  console.log("asasa");
  return ctx.html("yoyo 123");
});
