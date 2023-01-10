const express = require('express');
const SupplierService = require('../services/supplier.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getSupplierSchema, createSupplierSchema, updateSupplierSchema } = require('../schemas/supplier.schema');

const router = express.Router();
const service = new SupplierService();

router.get('/', async (req, res, next) => {
  try {
    const suppliers = await service.find();
    res.json(suppliers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getSupplierSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const supplier = await service.findOne(id);
      res.json(supplier);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createSupplierSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newSupplier = await service.create(body);
      res.json(newSupplier);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getSupplierSchema, '´params'),
  validatorHandler(updateSupplierSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const supplier = await service.update(id, body);
      res.json(supplier);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getSupplierSchema, 'params'),
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