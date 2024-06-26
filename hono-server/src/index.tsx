import { Hono } from "hono";
import { handleCreateOrder } from "./controller/create_order";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/create", handleCreateOrder);

export default app;
