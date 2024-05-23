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

  static async createIngredient(formdata) {
    try {
      const { data, error } = await supabase.from("ingredients").insert([
        {
          name: formdata.name,
        },
      ]);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error creating ingredient: ${error}`);
    }
  }

  static async updateIngredient(formdata) {
    try {
      let { data, error } = await supabase
        .from("ingredients")
        .update([
          {
            name: formdata.name,
          },
        ])
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error updating ingredient: ${error}`);
    }
  }

  static async deleteIngredient(formdata) {
    try {
      let { data, error } = await supabase
        .from("ingredients")
        .delete()
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error deleting ingredient: ${error}`);
    }
  }
}
