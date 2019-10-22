const express = require('express');
const RecipesService = require('../services/recipes');

function recipesApi(app) {
  const router = express.Router();

  const recipesService = new RecipesService();

  app.use("/api/recipes", router);

  router.get("/", async function(req, res, next) {
    const { tags } = req.query;
    try {
      const recipes = await recipesService.getRecipes({ tags });

      res.status(200).json({
        data: recipes,
        message: 'Recipes listed'
      });
    } catch (err) {
        next(err) 
    }
  });

  router.get("/:recipeId", async function(req, res, next) {
    const { recipeId } = req.params;
    try {
      const recipes = await recipesService.getRecipe({ recipeId });

      res.status(200).json({
        data: recipes,
        message: 'Recipe retrieved'
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function(req, res, next) {
    const { body: recipe } = req;
    try {
      const createdRecipeId = await recipesService.createRecipe({ recipe });

      res.status(201).json({
        data: createdRecipeId,
        message: 'Recipe created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:recipeId", async function(req, res, next) {
    const { body: recipe } = req;
    const { recipeId } = req.params;
    try {
      const updatedRecipeId = await recipesService.updateRecipe({ recipeId, recipe });

      res.status(200).json({
        data: updatedRecipeId,
        message: 'Recipe updated'
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:recipeId", async function(req, res, next) {
    const { recipeId } = req.params;
    try {
      const deletedRecipeId = await recipesService.deleteRecipe({ recipeId });

      res.status(200).json({
        data: deletedRecipeId,
        message: 'Recipe deleted'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = recipesApi;
