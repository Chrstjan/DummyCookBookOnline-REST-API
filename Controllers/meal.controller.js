import express from "express";
import MealModel from "../Models/meal.model.js";
export const MealController = express.Router();

MealController.get("/meals", async (req, res) => {
  const data = await MealModel.getAllMeals();
  res.send(data);
});
