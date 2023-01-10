const { Model, DataTypes } = require('sequelize');
const { ROLE_TABLE } = require('./role.model');

const USER_TABLE = 'users';

const UserSchema = {
  dni: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    field: 'user_dni'
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'user_last_name'
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'user_first_name'
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sales: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  roleId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'role_id',
    references: {
      model: ROLE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class User extends Model {

  static associate(models) {
    this.belongsTo(models.Role, {
      as: 'role'
    });
    this.hasMany(models.Sale, {
      as: 'sales',
      foreignKey: 'userDni'
    });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User };