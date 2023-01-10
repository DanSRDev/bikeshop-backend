const Joi = require('joi');

const dni = Joi.number().integer();
const lastName = Joi.string().max(30);
const firstName = Joi.string().max(30);
const ruc = Joi.number().integer();

const getCustomerSchema = Joi.object({
  dni: dni.required()
});

const createCustomerSchema = Joi.object({
  lastName: lastName.required(),
  firstName: firstName.required(),
  ruc: ruc.required()
});

const updateCustomerSchema = Joi.object({
  lastName: lastName,
  firstName: firstName,
  ruc: ruc
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };