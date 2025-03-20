import { HTTPException } from "hono/http-exception";
import { delkeys } from "../../libs/utils/index.js";
import { hash } from "bcrypt";
import { token } from "../../libs/token/index.js";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const jsonv = zValidator(
  "json",
  z.object({
    email: z.string().email().nonempty(),
    password: z.string().nonempty(),
  })
);

app.post("auth", jsonv, async (c) => {
  console.log("asasas");
  const json = c.req.valid("json");
  const user = await prisma.user.findUnique({ where: { email: json.email } });
  if (!user) throw new HTTPException(401, { message: "Invalid email" });
  if (user.password !== json.password) throw new HTTPException(401, { message: "Invalid password" });
  const refreshToken = await token.refresh(user.email);
  const accessToken = await token.access(user.email);
  const signature = await hash(refreshToken.split(".")[2], 10);

  await prisma.user.update({
    where: { email: json.email },
    data: { refreshToken: signature },
  });

  return c.json({
    user: delkeys(user, ["password", "refreshToken"]),
    accessToken,
    refreshToken,
  });
});
