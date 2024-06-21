const { Sequelize } = require('sequelize');
const { ShieldDb } = require('../models')
const sequelize = new Sequelize({
  host: process.env.DB_AD_WRITE_ADDRESS,
  database: 'shield',
  username: 'testuser',
  password: 'test',
  port: parseInt(process.env.DB_AD_WRITE_PORT, 10) || 3306,
  dialect: 'mysql',
  logQueryParameters: true,
  logging: false,
});
const shieldDb = new ShieldDb(sequelize)

module.exports = {
  shieldDb,
};
