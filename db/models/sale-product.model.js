const { Model, DataTypes} = require('sequelize');
const { SALE_TABLE } = require('./sale.model');
const { PRODUCT_TABLE } = require('./product.model');

const SALE_PRODUCT_TABLE = 'sales';

const SaleProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'sale_product_id'
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  saleId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'sale_id',
    references: {
      model: SALE_TABLE,
      key: 'sale_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'product_id',
    references: {
      model: PRODUCT_TABLE,
      key: 'product_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class SaleProduct extends Model {

  static associate() {};

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALE_PRODUCT_TABLE,
      modelName: 'SaleProduct',
      timestamps: false
    }
  }
}

module.exports = { SALE_PRODUCT_TABLE, SaleProductSchema, SaleProduct };