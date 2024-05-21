import { supabase } from "../Config/supabase.config.js";

export default class IngredientModel {
  static async getAllIngredients() {
    try {
      const { data, error } = await supabase.from("ingredients").select("*");
      if (error) {
        throw new Error(error);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching ingredients: ${error}`);
    }
  }

  static async getIngredientById(id) {
    try {
      const { data, error } = await supabase
        .from("ingredients")
        .select("*")
        .single();
      if (error) {
        throw new Error(error);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching ingredient: ${error}`);
    }
  }
}
