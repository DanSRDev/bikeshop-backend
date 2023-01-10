'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');
const { SupplierSchema, SUPPLIER_TABLE } = require('../models/supplier.model');
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');
const { RoleSchema, ROLE_TABLE } = require('../models/role.model');
const { UserSchema, USER_TABLE } = require('../models/user.model');
const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');
const { SaleSchema, SALE_TABLE } = require('../models/sale.model');
const { SaleProductSchema, SALE_PRODUCT_TABLE } = require('../models/sale-product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(SUPPLIER_TABLE, SupplierSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ROLE_TABLE, RoleSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(SALE_TABLE, SaleSchema);
    await queryInterface.createTable(SALE_PRODUCT_TABLE, SaleProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(SALE_PRODUCT_TABLE);
    await queryInterface.dropTable(SALE_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ROLE_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(SUPPLIER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
