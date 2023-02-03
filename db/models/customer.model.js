const { Model, DataTypes } = require('sequelize');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  dni: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    field: 'customer_dni'
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'customer_last_name'
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'customer_first_name'
  },
  ruc: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING,
    field: 'customer_ruc'
  }
}

class Customer extends Model {

  static associate(models) {
    this.hasMany(models.Sale, {
      as: 'sales',
      foreignKey: 'customerDni'
    });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };