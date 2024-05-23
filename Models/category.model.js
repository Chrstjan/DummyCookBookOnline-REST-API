import { supabase } from "../Config/supabase.config.js";

export default class CategoryModel {
  static async getAllCategories() {
    try {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        throw new Error(error);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching categories: ${error}`);
    }
  }

  static async getCategoryById(id) {
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .single();
      if (error) {
        throw new Error(error);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching category: ${error}`);
    }
  }

  static async createCategory(formdata) {
    try {
      const { data, error } = await supabase.from("categories").insert([
        {
          name: formdata.name,
          description: formdata.description,
          thumbnail: formdata.thumbnail,
        },
      ]);
      if (error) {
        throw new Error(error);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error creating category: ${error}`);
    }
  }

  static async updateCategory(formdata) {
    try {
      let { data, error } = await supabase
        .from("categories")
        .update([
          {
            name: formdata.name,
            description: formdata.description,
            thumbnail: formdata.thumbnail,
          },
        ])
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error updating category: ${error}`);
    }
  }
}
