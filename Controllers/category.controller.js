import express from "express";
import CategoryModel from "../Models/category.model.js";
export const CategoryController = express.Router();

CategoryController.get("/categories", async (req, res) => {
  const data = await CategoryModel.getAllCategories();
  res.send(data);
  console.log(data);
});

// CategoryController.get("/categories/:name", async (req, res) => {
//   console.log(req.params);
//   const { name } = req.params;
//   const data = await CategoryModel.getCategoryByName(name.trim());
//   res.send(data);
// });

// CategoryController.get("/categories/:id", async (req, res) => {
//   const { id } = req.params;
//   const data = await CategoryModel.getCategoryById(id);
//   res.send(data);
// });

/*
 This uses a regex to test if the url paramenter passes the regex.
 if it does it runs the id route else it runs the name route
 */
CategoryController.get("/categories/:param", async (req, res) => {
  const { param } = req.params;

  const isUuid = (param) => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(param);
  };

  let data;
  if (isUuid(param)) {
    data = await CategoryModel.getCategoryById(param.trim());
  } else {
    data = await CategoryModel.getCategoryByName(param.trim());
  }

  res.send(data);
});

CategoryController.post("/categories", async (req, res) => {
  const data = await CategoryModel.createCategory(req.body);
  res.send(data);
  console.log(data);
});

CategoryController.put("/categories", async (req, res) => {
  const data = await CategoryModel.updateCategory(req.body);
  res.send(data);
});

CategoryController.delete("/categories", async (req, res) => {
  const data = await CategoryModel.deleteCategory(req.body);
  console.log("Deleted Category");
  res.send(data);
});
