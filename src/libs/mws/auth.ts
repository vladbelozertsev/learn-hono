import { HTTPException } from "hono/http-exception";
import { bearerAuth } from "hono/bearer-auth";
import { verify } from "hono/jwt";

export const auth = bearerAuth({
  verifyToken: async (token) => {
    const secret = process.env.JWT_ACCESS_SECRET;
    if (!secret) throw new HTTPException(401, { message: "Process env failed" });
    const result = await verify(token, secret).catch(console.error);
    return !!result;
  },
});
