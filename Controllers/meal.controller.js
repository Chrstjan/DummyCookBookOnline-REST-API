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

MealController.post("/meals", async (req, res) => {
  const data = await MealModel.createMeal(req.body);
  res.send(data);
});

MealController.put("/meals", async (req, res) => {
  const data = await MealModel.updateMeal(req.body);
  res.send(data);
});

MealController.delete("/meals", async (req, res) => {
  const data = await MealModel.deleteMeal(req.body);
  console.log("Deleted Meal");
  res.send(data);
});
