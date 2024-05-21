import express from "express";
import CategoryModel from "../Models/category.model.js";
export const CategoryController = express.Router();

CategoryController.get("/categories", async (req, res) => {
  const data = await CategoryModel.getAllCategories();
  res.send(data);
  console.log(data);
});

CategoryController.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const data = await CategoryModel.getCategoryById(id);
  res.send(data);
});

CategoryController.post("/categories", async (req, res) => {
  const data = await CategoryModel.createCategory(req.body);
  res.send(data);
  console.log(data);
});
