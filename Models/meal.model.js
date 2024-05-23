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
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching meal: ${error}`);
    }
  }

  static async createMeal(formdata) {
    try {
      const { data, error } = await supabase.from("meals").insert([
        {
          meal_name: formdata.meal_name,
          category: formdata.category,
          created_by: formdata.created_by,
          created_at: formdata.created_at,
          updated_at: formdata.updated_at,
          meal_thumbnail: formdata.meal_thumbnail,
          meal_description: formdata.meal_description,
          meal_prep_time: formdata.meal_prep_time,
          meal_cook_time: formdata.meal_cook_time,
          meal_instructions: formdata.meal_instructions,
        },
      ]);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error creating meal: ${error}`);
      console.log(error.meesage);
    }
  }

  static async updateMeal(formdata) {
    try {
      let { data, error } = await supabase
        .from("meals")
        .update([
          {
            meal_name: formdata.meal_name,
            category: formdata.category,
            created_by: formdata.created_by,
            created_at: formdata.created_at,
            updated_at: formdata.updated_at,
            meal_thumbnail: formdata.meal_thumbnail,
            meal_description: formdata.meal_description,
            meal_prep_time: formdata.meal_prep_time,
            meal_cook_time: formdata.meal_cook_time,
            meal_instructions: formdata.meal_instructions,
          },
        ])
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error updating meal: ${error}`);
    }
  }

  static async deleteMeal(formdata) {
    try {
      let { data, error } = await supabase
        .from("meals")
        .delete()
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error deleteing meal: ${error}`);
    }
  }
}
