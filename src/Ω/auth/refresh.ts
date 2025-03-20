import type { JWTPayload } from "hono/utils/jwt/types";
import { HTTPException } from "hono/http-exception";
import { bearerAuth } from "hono/bearer-auth";
import { compare } from "bcrypt";
import { decode } from "hono/jwt";
import { hash } from "bcrypt";
import { token } from "../../libs/token/index.js";
import { verify } from "hono/jwt";

const refresh = bearerAuth({
  verifyToken: async (token) => {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) throw new HTTPException(401, { message: "Process env failed" });
    const result = await verify(token, secret).catch(console.error);
    return !!result;
  },
});

app.post("/auth/refresh", refresh, async (c) => {
  const tokenJwt = c.req.header().authorization.split(" ")[1];
  const tokenDecoded = decode(tokenJwt).payload as JWTPayload & { email: string };
  if (!tokenDecoded.exp || !tokenDecoded.email) throw new HTTPException(401, { message: "Payload undefined" });

  const user = await prisma.user.findUnique({ where: { email: tokenDecoded.email } });
  if (!user?.refreshToken) throw new HTTPException(401, { message: "Token cancelled" });

  const isValid = await compare(tokenJwt.split(".")[2], user.refreshToken);
  if (!isValid) throw new HTTPException(401, { message: "Token changed" });

  const accessTokenTime = +(process.env.JWT_ACCESS_TOKEN_LIFE_TIME_S || 0);
  const refreshTokenTime = +(process.env.JWT_REFRESH_TOKEN_LIFE_TIME_S || 0);
  if (!accessTokenTime || !refreshTokenTime) throw new HTTPException(401, { message: "Time undefined" });

  const refreshTokenRestTime = tokenDecoded.exp - Math.round(Date.now() / 1000) + 30;
  const isAccessTokenExpired = refreshTokenRestTime + accessTokenTime < refreshTokenTime;

  if (isAccessTokenExpired) {
    const accessToken = await token.access(tokenDecoded.email);
    const refreshToken = await token.refresh(tokenDecoded.email);
    const signature = await hash(refreshToken.split(".")[2], 10);
    await prisma.user.update({ where: { email: tokenDecoded.email }, data: { refreshToken: signature } });
    return c.json({ accessToken, refreshToken });
  }

  await prisma.user.update({
    where: { email: tokenDecoded.email },
    data: { refreshToken: "" },
  });

  throw new HTTPException(401, { message: "Suspicious activity" });
});

// return
