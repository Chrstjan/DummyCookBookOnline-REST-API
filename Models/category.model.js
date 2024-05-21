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
}
