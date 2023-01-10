const { Model, DataTypes } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');
const { SUPPLIER_TABLE } = require('./supplier.model');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'product_id'
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'product_name'
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'category_id',
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  supplierId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'supplier_id',
    references: {
      model: SUPPLIER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Product extends Model {

  static associate(models) {
    this.belongsTo(models.Category, {
      as: 'category'
    });
    this.belongsTo(models.Supplier, {
      as: 'supplier'
    });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };