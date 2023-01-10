const Joi = require('joi');

const id = Joi.number().integer();
const date = Joi.date();
const total = Joi.number();
const dniUser = Joi.string().length(8);
const dniCustomer = Joi.string().length(8);
const productId = Joi.number().integer();
const amount = Joi.number().min(1);


const getSaleSchema = Joi.object({
  id: id.required()
});

const createSaleSchema = Joi.object({
  date: date.required(),
  total: total.required(),
  dniUser: dniUser.required(),
  dniCustomer: dniCustomer.required()
});

const updateSaleSchema = Joi.object({
  date: date,
  total: total,
  dniUser: dniUser,
  dniCustomer: dniCustomer
});

const addItemSchema = Joi.object({
  saleId: id.required(),
  productId: productId.required(),
  amount: amount.required()
})

module.exports = { getSaleSchema, createSaleSchema, updateSaleSchema, addItemSchema };