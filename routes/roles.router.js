const express = require('express');
const RoleService = require('../services/role.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getRoleSchema, createRoleSchema, updateRoleSchema } = require('../schemas/role.schema');

const router = express.Router();
const service = new RoleService();

router.get('/', async (req, res, next) => {
  try {
    const roles = await service.find();
    res.json(roles);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getRoleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const role = await service.findOne(id);
      res.json(role);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createRoleSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRole = await service.create(body);
      res.json(newRole);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getRoleSchema, 'params'),
  validatorHandler(updateRoleSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const role = await service.update(id, body);
      res.json(role);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getRoleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;