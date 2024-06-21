'use strict';
const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    await queryInterface.bulkInsert(
      'Heroes',
      [
        {
          id: 1,
          name: 'Daredevil',
          image:
            'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Thor',
          image:
            'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Iron Man',
          image:
            'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Hulk',
          image:
            'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        transaction,
      }
    );
    await queryInterface.bulkInsert(
      'Profiles',
      [
        {
          str: 0,
          int: 8,
          agi: 10,
          luk: 7,
          heroId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          str: 8,
          int: 2,
          agi: 0,
          luk: 14,
          heroId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          str: 6,
          int: 9,
          agi: 6,
          luk: 9,
          heroId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          str: 10,
          int: 1,
          agi: 4,
          luk: 2,
          heroId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        transaction,
      }
    );
    await transaction.commit();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Heroes', {
      id: {
        [Op.in]: [1, 2, 3, 4],
      },
    });
  },
};
