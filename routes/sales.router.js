const express = require('express');
const SaleService = require('../services/sale.service');

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

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await service.findOne(id);
    res.json(sale);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newSale = await service.create(body);
    res.json(newSale);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const sale = await service.update(id, body);
    res.json(sale);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;