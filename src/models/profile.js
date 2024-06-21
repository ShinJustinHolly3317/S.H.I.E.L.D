const { DataTypes, Model } = require('sequelize')
// const { dbConnection } = require('../connections')
// const { Hero } = require('./hero')

class Profile extends Model {}

// Profile.init({
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   str: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   int: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   agi: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   luk: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   heroId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// }, {
//   sequelize: dbConnection,
//   tableName: 'Profiles',
//   paranoid: true,
// })

// Profile.belongsTo(Hero)

module.exports = {
  Profile,
}