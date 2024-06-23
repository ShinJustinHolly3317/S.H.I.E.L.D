const { DataTypes } = require('sequelize');
const { Hero } = require('./hero');
const { Profile } = require('./profile');

/**
 * Create model for tables and define their association.
 * 1. init: create DB models
 * 2. associate: create foreign key of models
 */
class ShieldDb {
  constructor(sequelize) {
    this.Hero = Hero;
    this.Profile = Profile;

    // 1. init
    Hero.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'Heroes',
      paranoid: true,
      defaultScope: {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt'],
        },
      },
    });

    Profile.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      str: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      int: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      agi: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      luk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      heroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'Profiles',
      paranoid: true,
      defaultScope: {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt'],
        },
      },
    });

    // 2. associate
    Hero.hasOne(Profile, {
      as: 'profile',
      foreignKey: 'heroId',
    });
    Profile.belongsTo(Hero);
  }
}

module.exports = {
  ShieldDb,
};
