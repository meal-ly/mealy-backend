const joi = require("@hapi/joi");

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userNameSchema = joi.string().max(10);
const userLastNameSchema = joi.string().max(10);
const userSubscriptionPlanSchema = joi.string().max(10);
const userRoleSchema = joi.string().max(10);
const usersAddressSchema = joi.string().max(10);

const createUserSchema = {
  name: userNameSchema.required(),
  lastName: userLastNameSchema.required(),
  subscriptionPlan: userSubscriptionPlanSchema.required(),
  roles: userRoleSchema.required(),
  address: userAddressSchema.required(),
}

const updateUserSchema = {
  name: userNameSchema,
  lastName: userLastNameSchema,
  subscriptionPlan: userSubscriptionPlanSchema,
  roles: userRoleSchema,
  address: usersAddressSchema,
}

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema
};
