const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const { CUSTOMER_TABLE } = require('./customer.model');

const SALE_TABLE = 'sales';

const SaleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'sale_id'
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  userDni: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'user_dni',
    references: {
      model: USER_TABLE,
      key: 'user_dni'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  customerDni: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'customer_dni',
    references: {
      model: CUSTOMER_TABLE,
      key: 'customer_dni'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Sale extends Model {

  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'customer'
    });
    this.belongsTo(models.User, {
      as: 'user'
    });
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    })
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALE_TABLE,
      modelName: 'Sale',
      timestamps: false
    }
  }
}

module.exports = { SALE_TABLE, SaleSchema, Sale };