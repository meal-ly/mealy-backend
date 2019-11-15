const joi = require("@hapi/joi");

const userIdSchema = joi.object({
  userId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
});
const userNameSchema = joi.string().max(10);
const userLastNameSchema = joi.string().max(10);
const userEmailSchema = joi.string().max(10);
const userSubscriptionPlanSchema = joi.string().max(10);
const userRoleSchema = joi.string().max(10);
const userAddressSchema = joi.string().max(10);

const createUserSchema = joi.object({
  name: userNameSchema.required(),
  lastName: userLastNameSchema.required(),
  email: userEmailSchema.required(),
  subscriptionPlan: userSubscriptionPlanSchema.required(),
  roles: userRoleSchema.required(),
  address: userAddressSchema.required(),
});

const updateUserSchema = joi.object({
  name: userNameSchema,
  lastName: userLastNameSchema,
  email: userEmailSchema,
  subscriptionPlan: userSubscriptionPlanSchema,
  roles: userRoleSchema,
  address: userAddressSchema,
});

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema
};
