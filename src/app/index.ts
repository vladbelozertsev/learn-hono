import { _app, _prisma } from "./app.js"; // imported first!!! declare Global Variables
import { serve } from "@hono/node-server";
import "./routes.js";

serve(
  {
    fetch: _app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
).on("close", () => {
  _prisma.$disconnect().catch(console.error);
});
