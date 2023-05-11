const express = require('express');
const SaleService = require('../services/sale.service');

const validatorHandler = require('../middlewares/validator.handler');
const { getSaleSchema, createSaleSchema, updateSaleSchema, getItemSchema, addItemSchema, updateItemSchema } = require('../schemas/sale.schema');

const router = express.Router();
const service = new SaleService();

router.get('/', async (req, res, next) => {
  try {
    const sales = await service.find();
    res.json(sales);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getSaleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const sale = await service.findOne(id);
      res.json(sale);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createSaleSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newSale = await service.create(body);
      res.json(newSale);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newSale = await service.addItem(body);
      res.json(newSale);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/item/:id',
  validatorHandler(getItemSchema, 'params'),
  validatorHandler(updateItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const item = await service.updateItem(id, body);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getSaleSchema, 'params'),
  validatorHandler(updateSaleSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const sale = await service.update(id, body);
      res.json(sale);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getSaleSchema, 'params'),
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