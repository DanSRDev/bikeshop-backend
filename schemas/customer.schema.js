const Joi = require('joi');

const dni = Joi.string().length(8);
const lastName = Joi.string().max(30);
const firstName = Joi.string().max(30);
const ruc = Joi.string().length(11);

const getCustomerSchema = Joi.object({
  dni: dni.required()
});

const createCustomerSchema = Joi.object({
  dni: dni.required(),
  lastName: lastName.required(),
  firstName: firstName.required(),
  ruc: ruc
});

const updateCustomerSchema = Joi.object({
  lastName: lastName,
  firstName: firstName,
  ruc: ruc
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };