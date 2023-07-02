const Joi = require("joi");

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().allow("starter", "pro", "business"),
  // favorite: Joi.boolean(),
  
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  // favorite: Joi.boolean(),
  
});

const verifySchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  verifySchema,
};