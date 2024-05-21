import express from "express";
import dotenv from "dotenv";

import { CategoryController } from "./Controllers/category.controller.js";
import { MealController } from "./Controllers/meal.controller.js";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the DummyCookBookOnline REST API");
});

app.use(CategoryController, MealController);

app.use((req, res) => {
  res.status(404).send("Site was not found");
});

app.listen(port, () => {
  console.log(`Webserver is running on http://localhost:${port}`);
});
