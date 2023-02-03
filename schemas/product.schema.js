const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(50);
const description = Joi.string();
const stock = Joi.number().integer();
const price = Joi.number();

const categoryId = Joi.number().integer();
const supplierId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const getProductSchema = Joi.object({
  id: id.required()
});

const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  stock: stock.required(),
  price: price.required(),
  categoryId: categoryId.required(),
  supplierId: supplierId.required()
});

const updateProductSchema = Joi.object({
  name: name,
  description: description,
  stock: stock,
  price: price,
  categoryId: categoryId,
  supplierId: supplierId
});

const queryProductSchema = Joi.object({
  limit: limit,
  offset: offset
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema, queryProductSchema };