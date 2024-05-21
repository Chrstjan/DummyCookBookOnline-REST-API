import express from "express";
import CategoryModel from "../Models/category.model.js";
export const CategoryController = express.Router();

CategoryController.get("/categories", async (req, res) => {
  const data = await CategoryModel.getAllCategories();
  res.send(data);
});

CategoryController.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const data = await CategoryModel.getCategoryById(id);
  res.send(data);
});
