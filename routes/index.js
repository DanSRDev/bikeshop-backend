const express = require('express');

const usersRouter = require('./users.router');
const rolesRouter = require('./roles.router');
const productsRouter = require('./products.router');
const categoriesRouters = require('./categories.router');
const customersRouter = require('./customers.router');
const suppliersRouter = require('./suppliers.router');
const salesRouter = require('./sales.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/roles', rolesRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouters);
  router.use('/suppliers', suppliersRouter);
  router.use('/customers', customersRouter);
  router.use('/sales', salesRouter);
}

module.exports = routerApi;
