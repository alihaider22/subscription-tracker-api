import express from "express";
const app = express();
import { PORT } from "./config/env.js";

app.get("/", (req, res) => {
  res.send("Subscription tracker API!");
});

app.listen(PORT, () => {
  console.log(`Subscription tracker API running on http://localhost:${PORT}`);
});

export default app;
