const { DataTypes, Model } = require('sequelize')
// const { dbConnection } = require('../connections')
const { Profile } = require('./profile')

class Hero extends Model {}

// Hero.init({
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING(255),
//     allowNull: false,
//   },
//   image: {
//     type: DataTypes.STRING(255),
//     allowNull: false,
//   }
// }, {
//   sequelize: dbConnection,
//   tableName: 'Heroes',
//   paranoid: true,
// })
// Hero.hasMany(Profile)

module.exports = {
  Hero,
}