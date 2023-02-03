const Joi = require('joi');

const dni = Joi.string().length(8);
const lastName = Joi.string().max(30);
const firstName = Joi.string().max(30);
const username = Joi.string().max(30);
const password = Joi.string().max(30);
const sales = Joi.number().integer();

const roleId = Joi.number().integer();

const getUserSchema = Joi.object({
  dni: dni.required()
});

const createUserSchema = Joi.object({
  dni: dni.required(),
  lastName: lastName.required(),
  firstName: firstName.required(),
  username: username.required(),
  password: password.required(),
  sales: sales,
  roleId: roleId.required()
});

const updateUserSchema = Joi.object({
  lastName: lastName,
  firstName: firstName,
  username: username,
  password: password,
  sales: sales,
  roleId: roleId
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };