const { recipesMock } = require('../utils/mocks/recipes');

class RecipesService {
  async getRecipes() {
    const recipes = await Promise.resolve(recipesMock);
    return recipes || [];
  }

  async getRecipe() {
    const recipe = await Promise.resolve(recipesMock[0]);
    return recipe || {};
  }

  async createRecipe() {
    const createdRecipeId = await Promise.resolve(recipesMock[0].id);
    return createdRecipeId;
  }

  async updateRecipe() {
    const updatedRecipeId = await Promise.resolve(recipesMock[0].id);
    return updatedRecipeId;
  }

  async deleteRecipe() {
    const deletedRecipeId = await Promise.resolve(recipesMock[0].id);
    return deletedRecipeId;
  }
}

module.exports = RecipesService;