const joi = require("@hapi/joi");

const recipeIdSchema = joi.object({
  recipeId: joi.string().regex(/^[0-9a-fA-F]{24}$/)
});
const recipeTitleSchema = joi.string().max(50);
const recipeDescriptionSchema = joi.string().max(300);
const recipeImgUrlSchema = joi.string().uri();
const recipeTimeSchema = joi.object({
  number: joi.number().min(1),
  unit: joi.string().length(2)
});
const recipePeopleSchema = joi.number().min(1);
const recipeLikesSchema = joi.number().min(0);
const recipeTagSchema = joi.string();
const recipeIngredientsSchema = joi.array().items(joi.object({
  name: joi.string(),
  price: joi.number().min(1),
  quantity: joi.object({
    number: joi.number().min(1),
    unit: joi.string().length(2)
  }),
}));

const createRecipeSchema = joi.object({
  title: recipeTitleSchema.required(),
  description: recipeDescriptionSchema.required(),
  imgUrl: recipeImgUrlSchema.required(),
  time: recipeTimeSchema.required(),
  people: recipePeopleSchema.required(),
  likes: recipeLikesSchema.required(),
  tag: recipeTagSchema.required(),
  ingredients: recipeIngredientsSchema.required(),
});

const updateRecipeSchema = joi.object({
  title: recipeTitleSchema,
  description: recipeDescriptionSchema,
  imgUrl: recipeImgUrlSchema,
  time: recipeTimeSchema,
  people: recipePeopleSchema,
  likes: recipeLikesSchema,
  tag: recipeTagSchema,
  ingredients: recipeIngredientsSchema,
});

module.exports = {
  recipeIdSchema,
  createRecipeSchema,
  updateRecipeSchema
};
