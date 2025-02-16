import express from "express";
const app = express();
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";

app.get("/", (req, res) => {
  res.send("Subscription tracker API!");
});

app.listen(PORT, async () => {
  console.log(`Subscription tracker API running on http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;
