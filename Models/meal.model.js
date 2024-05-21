import { supabase } from "../Config/supabase.config.js";

export default class MealModel {
  static async getAllMeals() {
    try {
      const { data, error } = await supabase.from("meals").select("*");
      if (error) {
        throw new Error(error);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching meals: ${error}`);
    }
  }

  static async getMealById(id) {
    try {
      const { data, error } = await supabase.from("meals").select("*").single();
      if (error) {
        throw new Error(error);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching meal: ${error}`);
    }
  }
}
