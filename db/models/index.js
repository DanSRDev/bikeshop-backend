const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Product, ProductSchema } = require('./product.model');
const { Role, RoleSchema } = require('./role.model');
const { SaleProduct, SaleProductSchema } = require('./sale-product.model');
const { Sale, SaleSchema } = require('./sale.model');
const { Supplier, SupplierSchema } = require('./supplier.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  SaleProduct.init(SaleProductSchema, SaleProduct.config(sequelize));
  Sale.init(SaleSchema, Sale.config(sequelize));
  Supplier.init(SupplierSchema, Supplier.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  User.associate(sequelize.models);
  Role.associate(sequelize);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  Supplier.associate(sequelize.models);
  Sale.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setupModels;

