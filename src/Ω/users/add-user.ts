import { hash } from "bcrypt";
import { delkeys } from "../../libs/utils/index.js";
import { token } from "../../libs/token/index.js";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const jsonv = zValidator(
  "json",
  z.object({
    email: z.string(),
    name: z.string(),
    password: z.string().min(6),
  })
);

app.post("/users", jsonv, async (c) => {
  const json = c.req.valid("json");
  const isUser = await prisma.user?.findUnique({ where: { email: json.email } }).catch(console.error);

  if (isUser) return c.text("Email already busy", 401);
  const refreshToken = await token.refresh(json.email);
  const accessToken = await token.access(json.email);
  const signature = await hash(refreshToken.split(".")[2], 10);

  const user = await prisma.user.create({
    data: { ...json, refreshToken: signature },
  });

  return c.json({
    user: delkeys(user, ["refreshToken", "password"]),
    accessToken,
    refreshToken,
  });
});
