import { Hono } from "hono";
import { BlankEnv, BlankSchema } from "hono/types";
import { type PrismaClient } from "@prisma/client";

type App = Hono<BlankEnv, BlankSchema, "api">;

declare global {
  var app: App;
  var prisma: PrismaClient;
}
