const express = require('express');
const CustomerService = require('../services/customer.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getCustomerSchema, createCustomerSchema, updateCustomerSchema } = require('../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get('/:dni',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { dni } = req.params;
      const customer = await service.findOne(dni);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCustomer = await service.create(body);
      res.json(newCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:dni',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { dni } = req.params;
      const body = req.body;
      const customer = await service.update(dni, body);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:dni',
  validatorHandler(getCustomerSchema, 'params'),
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