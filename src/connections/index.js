const { Sequelize } = require('sequelize')
const dbConnection = new Sequelize({
  host: process.env.DB_AD_WRITE_ADDRESS,
      database: 'shield',
      username: 'testuser',
      password: 'test',
      port: parseInt(process.env.DB_AD_WRITE_PORT, 10) || 3306,
      dialect: 'mysql',
      logQueryParameters: true,
      logging: false,
})

module.exports = {
  dbConnection
}