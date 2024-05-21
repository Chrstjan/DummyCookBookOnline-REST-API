import express from "express";
import CategoryModel from "../Models/category.model.js";
export const CategoryController = express.Router();

CategoryController.get("/categories", async (req, res) => {
  const data = await CategoryModel.getAllCategories();
  res.send(data);
});
