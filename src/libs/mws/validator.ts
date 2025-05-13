import type { ValidationTargets } from "hono";
import { HTTPException } from "hono/http-exception";
import { ZodSchema } from "zod";
import { zValidator } from "@hono/zod-validator";

export const validator = <Schema extends ZodSchema, Target extends keyof ValidationTargets>(prams: {
  schema: Schema;
  target: Target;
  message?: string;
}) => {
  return zValidator(prams.target, prams.schema, (result) => {
    if (!result.success) {
      console.error("libs/mws/validator error: ", result);
      const message = prams.message || "Zod validation failed!";
      throw new HTTPException(400, { message });
    }
  });
};
