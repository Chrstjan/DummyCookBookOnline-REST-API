import express from "express";
import IngredientModel from "../Models/ingredient.model.js";
export const IngredientController = express.Router();

IngredientController.get("/ingredients", async (req, res) => {
  const data = await IngredientModel.getAllIngredients();
  res.send(data);
});
