const express = require('express');
const UserService = require('../services/user.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getUserSchema, createUserSchema, updateUserSchema } = require('../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:dni',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { dni } = req.params;
      const user = await service.findOne(dni);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:dni',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { dni } = req.params;
      const body = req.body;
      const user = await service.update(dni, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:dni',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { dni } = req.params;
      const rta = await service.delete(dni);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;