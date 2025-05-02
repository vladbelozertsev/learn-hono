import { Hono } from "hono";
import { admin } from "../libs/mws/admin";
import { cors } from "hono/cors";
import { privatemw } from "../libs/mws/private";
import { serveStatic } from "hono/bun";
import { upload } from "../libs/helpers/upload";

export const _app = new Hono();
_app.get("public/*", serveStatic({}));

_app.get("private/*", privatemw, serveStatic({}));

_app.post("public", admin, async (ctx) => {
  const result = await upload({ ctx, dir: "public" });
  const filtered = result.filter((r) => r.status === "fulfilled");
  return ctx.json(filtered.map((r) => r.value?.url));
});

if (process.env.URL_ORIGIN) {
  _app.use(
    "*",
    cors({
      origin: process.env.URL_ORIGIN,
      // allowHeaders: ["Origin", "Content-Type", "Authorization", "Access-Control-Allow-Origin"],
      // allowMethods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
      exposeHeaders: ["X-Count"],
      credentials: true, // for cookies
    })
  );
}

global.app = _app;

/**
 * Typescript errors:
 * 1. install global typescript: <| bun install -g typescript |>
 * 1.1 to uninstall global tsc: <| bun uninstall typescript |>
 * https://www.typescriptlang.org/download/
 *
 * 2. Add command to package.json:
 * <| "ts": "tsc --skipLibCheck", |>
 * https://stackoverflow.com/questions/51634361/how-to-force-tsc-to-ignore-node-modules-folder
 */
