import { auth } from "../../libs/mws/auth.js";
import { decode } from "hono/jwt";

app.delete("auth/", auth, async (c) => {
  const tokenJwt = c.req.header().authorization.split(" ")[1];
  const tokenDecoded = decode(tokenJwt).payload as { email: string };

  await prisma.user.update({
    where: { email: tokenDecoded.email },
    data: { refreshToken: "" },
  });

  return c.text("Logout succeed");
});
