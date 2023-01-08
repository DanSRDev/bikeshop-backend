const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json('supplier');
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.json('supplier');
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.json('supplier');
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    res.json('supplier');
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    res.json('supplier');
  } catch (error) {
    next(error);
  }
});

module.exports = router;