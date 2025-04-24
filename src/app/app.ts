import { Hono } from "hono";
import { cors } from "hono/cors";
import { privatemw } from "../libs/mws/private";
import { serveStatic } from "hono/bun";

export const _app = new Hono();
_app.get("public/*", serveStatic({}));

_app.get("private/*", privatemw, serveStatic({}));

_app.use(
  "*",
  cors({
    origin: "http://localhost:3001",
    // allowHeaders: ["Origin", "Content-Type", "Authorization", "Access-Control-Allow-Origin"],
    // allowMethods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
    credentials: true, // for cookies
  })
);

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
