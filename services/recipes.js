const MongoLib = require('../lib/mongo');

class RecipesService {
  constructor() {
    this.collection = 'recipes';
    this.mongoDB = new MongoLib();
  }
  async getRecipes({ tags }) {
    const query = tags && {tags: { $in: tags }};
    const recipes = await this.mongoDB.getAll(this.collection, query);
    return recipes || [];
  }

  async getRecipe({ recipeId }) {
    const recipe = await this.mongoDB.get(this.collection, recipeId);
    return recipe || {};
  }

  async createMovie({ recipe }) {
    const createdRecipeId = await this.mongoDB.create(this.collection, recipe);
    return createdRecipeId;
  }

  async updateMovie({ recipeId, recipe } = {}) {
    const updatedRecipeId = await this.mongoDB.update(this.collection, recipeId, recipe);
    return updatedRecipeId;
  }

  async deleteMovie({ recipeId }) {
    const deletedRecipeId = this.mongoDB.delete(this.collection, recipeId);
    return deletedRecipeId;
  }
}

module.exports = RecipesService;