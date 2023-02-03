const { Model, DataTypes } = require('sequelize');

const SUPPLIER_TABLE  = 'suppliers';

const SupplierSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'supplier_id'
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    field: 'supplier_name'
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Supplier extends Model {

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey:'supplierId'
    });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUPPLIER_TABLE,
      modelName: 'Supplier',
      timestamps: false
    }
  }
}

module.exports = { SUPPLIER_TABLE, SupplierSchema, Supplier };