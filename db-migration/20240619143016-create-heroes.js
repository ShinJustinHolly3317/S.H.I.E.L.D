'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Heroes',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: Sequelize.DataTypes.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deletedAt: {
          type: Sequelize.DataTypes.DATE,
        },
      },
      {
        charset: 'utf8mb4',
      },
    );
    await queryInterface.createTable(
      'Profiles',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        heroId: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        str: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        int: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        agi: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        luk: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deletedAt: {
          type: Sequelize.DataTypes.DATE,
        },
      },
      {
        charset: 'utf8mb4',
      },
    );

    // 
    await queryInterface.addConstraint('Profiles', {
      fields: ['heroId'],
      type: 'foreign key',
      name: 'Profiles_heroId_Heroes_fk',
      references: {
        table: 'Heroes',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'Profiles',
      'Profiles_heroId_Heroes_fk',
    );
    await queryInterface.dropTable('Heroes');
    await queryInterface.dropTable('Profiles');
  }
};