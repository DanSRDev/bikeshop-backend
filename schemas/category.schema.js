const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(30);

const getCategorySchema = Joi.object({
  id: id.required()
});

const createCategorySchema = Joi.object({
  name: name.required()
});

const updateCategorySchema = Joi.object({
  name: name
});

module.exports = { getCategorySchema, createCategorySchema, updateCategorySchema };