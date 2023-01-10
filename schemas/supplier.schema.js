const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(30);
const phone = Joi.string();

const getSupplierSchema = Joi.object({
  id: id.required()
});

const createSupplierSchema = Joi.object({
  name: name.required(),
  phone: phone.required()
});

const updateSupplierSchema = Joi.object({
  name: name,
  phone: phone
});

module.exports = { getSupplierSchema, createSupplierSchema, updateSupplierSchema };