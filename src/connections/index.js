const { Sequelize } = require('sequelize');
const { ShieldDb } = require('../models');

const sequelize = new Sequelize({
  host: process.env.DB_ADDRESS,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  dialect: 'mysql',
  logQueryParameters: true,
  logging: false,
});
const shieldDb = new ShieldDb(sequelize);

module.exports = {
  shieldDb,
};
