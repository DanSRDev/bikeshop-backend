const Joi = require('joi');

const dni = Joi.number().integer();
const lastName = Joi.string().max(30);
const firstName = Joi.string().max(30);
const username = Joi.string().max(30);
const password = Joi.string().max(30);
const sales = Joi.number().integer();

const getUserSchema = Joi.object({
  dni: dni.required()
});

const createUserSchema = Joi.object({
  lastName: lastName.required(),
  firstName: firstName.required(),
  username: username.required(),
  password: password.required(),
  sales: sales.required()
});

const updateUserSchema = Joi.object({
  lastName: lastName,
  firstName: firstName,
  username: username,
  password: password,
  sales: sales
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };