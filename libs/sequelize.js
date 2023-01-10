const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : console.log
}

const sequelize = new Sequelize(config.dbUrl, options);

module.exports = sequelize;