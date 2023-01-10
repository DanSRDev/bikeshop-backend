const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(30);
const description = Joi.string();
const stock = Joi.number().integer();
const price = Joi.number();

const getProductSchema = Joi.object({
  id: id.required()
});

const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  stock: stock.required(),
  price: price.required()
});

const updateProductSchema = Joi.object({
  name: name,
  description: description,
  stock: stock,
  price: price
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema };