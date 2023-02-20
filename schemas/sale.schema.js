const Joi = require('joi');

const id = Joi.number().integer();
const date = Joi.date();

const userDni = Joi.string().length(8);
const customerDni = Joi.string().length(8);

const productId = Joi.number().integer();
const amount = Joi.number().min(1);

const getSaleSchema = Joi.object({
  id: id.required()
});

const createSaleSchema = Joi.object({
  date: date,
  userDni: userDni.required(),
  customerDni: customerDni.required()
});

const updateSaleSchema = Joi.object({
  date: date,
  userDni: userDni,
  customerDni: customerDni
});

const addItemSchema = Joi.object({
  saleId: id.required(),
  productId: productId.required(),
  amount: amount.required()
});

module.exports = { getSaleSchema, createSaleSchema, updateSaleSchema, addItemSchema };