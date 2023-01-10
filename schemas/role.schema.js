const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(30);

const getRoleSchema = Joi.object({
  id: id.required()
});

const createRoleSchema = Joi.object({
  name: name.required()
});

const updateRoleSchema = Joi.object({
  name: name
});

module.exports = { getRoleSchema, createRoleSchema, updateRoleSchema };