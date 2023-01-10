const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(30);
const description = Joi.string();
const stock = Joi.number().integer();
const price = Joi.number();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

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

const queryProductSchema = Joi.object({
  limit: limit,
  offset: offset
})

module.exports = { getProductSchema, createProductSchema, updateProductSchema, queryProductSchema };