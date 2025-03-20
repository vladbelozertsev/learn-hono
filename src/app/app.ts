import "dotenv/config";
import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { cors } from "hono/cors";

import type { BlankEnv, BlankSchema } from "hono/types";

const basePath = "api" as const;
export const _app = new Hono().basePath(basePath);
export const _prisma = new PrismaClient();

global.app = _app;
global.prisma = _prisma;

_app.use(
  "*",
  cors({
    origin: ["http://localhost:3001", "http://192.168.0.10:3001"],
    // allowHeaders: ["Origin", "Content-Type", "Authorization"],
    // allowMethods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
    // credentials: true, // for cookies
  })
);

type App = Hono<BlankEnv, BlankSchema, typeof basePath>;

declare global {
  var app: App;
  var prisma: PrismaClient;
}
