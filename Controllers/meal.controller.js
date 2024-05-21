import express from "express";
import MealModel from "../Models/meal.model.js";
export const MealController = express.Router();

MealController.get("/meals", async (req, res) => {
  const data = await MealModel.getAllMeals();
  res.send(data);
});

MealController.get("/meals/:id", async (req, res) => {
  const { id } = req.params;
  const data = await MealModel.getMealById(id);
  res.send(data);
});
