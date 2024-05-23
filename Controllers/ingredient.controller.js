import express from "express";
import IngredientModel from "../Models/ingredient.model.js";
export const IngredientController = express.Router();

IngredientController.get("/ingredients", async (req, res) => {
  const data = await IngredientModel.getAllIngredients();
  res.send(data);
});

IngredientController.get("/ingredients/:id", async (req, res) => {
  const { id } = req.params;
  const data = await IngredientModel.getIngredientById(id);
  res.send(data);
});

IngredientController.post("/ingredients", async (req, res) => {
  const data = await IngredientModel.createIngredient(req.body);
  res.send(data);
});

IngredientController.put("/ingredients", async (req, res) => {
  const data = await IngredientModel.updateIngredient(req.body);
  res.send(data);
});
