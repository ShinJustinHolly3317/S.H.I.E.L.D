const { Router } = require('express');
const {
  authHeaderValidations,
  routeSkipperByValidation,
} = require('../middlewares/password-authenticator');
const { getHeroHandler } = require('./handlers/get-hero-handler');
const {
  getHeroProfileHandler,
} = require('./handlers/get-hero-profile-handler');
const { getHeroesHandler } = require('./handlers/get-heroes-handler');
const {
  getHeroProfilesHandler,
} = require('./handlers/get-hero-profiles-handler');

const router = Router();

/**
 * GET /heroes/:id
 * @tags Hero
 * @summary Get single Hero info
 * @param {number} id.path - hero id
 * @param {string} Name.header - auth user name
 * @param {string} Password.header - auth user password
 * @return {object} 200 - success response
 * @return {object} 404 - if no data found
 * @example response - 200 - single hero basic info when no correct auth header
 * {
 *   "id": 1,
 *   "name": "Daredevil",
 *   "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
 * }
 * @example response - 200 - single hero profile when correct auth header
 * {
 *   "id": 1,
 *   "name": "Daredevil",
 *   "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg",
 *   "profile": {
 *      "str": 0,
 *      "int": 8,
 *      "agi": 10,
 *      "luk": 7
 *   }
 * }
 * @example response - 404 - hero not found
 * {
 *   "message": "I am sorry, hero not found!"
 * }
 */
router.get(
  '/heroes',
  authHeaderValidations,
  routeSkipperByValidation,
  getHeroProfilesHandler,
);
router.get('/heroes', getHeroesHandler);

/**
 * GET /heroes
 * @tags Hero
 * @summary Get all Heroes info
 * @param {number} id.path - hero id
 * @param {string} Name.header - auth user name
 * @param {string} Password.header - auth user password
 * @return {object} 200 - success response
 * @return {object} 404 - if no data found
 * @example response - 200 - heroes' basic info when no correct auth header
 * {
 *    "heroes": [
 *      {
 *        "id": 1,
 *        "name": "Daredevil",
 *        "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
 *      },
 *      {
 *        "id": 2,
 *        "name": "Thor",
 *        "image": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
 *      },
 *      {
 *        "id": 3,
 *        "name": "Iron Man",
 *        "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
 *      },
 *      {
 *        "id": 4,
 *        "name": "Hulk",
 *        "image": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg"
 *      }
 *    ]
 * }
 * @example response - 200 - heroes' profiles when correct auth header
 * {
      "heroes": [
        {
          "id": 1,
          "name": "Daredevil",
          "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg",
          "profile": {
            "str": 0,
            "int": 8,
            "agi": 10,
            "luk": 7
          }
        },
        {
          "id": 2,
          "name": "Thor",
          "image": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
          "profile": {
            "str": 8,
            "int": 2,
            "agi": 0,
            "luk": 14
          }
        },
        {
          "id": 3,
          "name": "Iron Man",
          "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
          "profile": {
            "str": 6,
            "int": 9,
            "agi": 6,
            "luk": 9
          }
        },
        {
          "id": 4,
          "name": "Hulk",
          "image": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
          "profile": {
            "str": 10,
            "int": 1,
            "agi": 4,
            "luk": 2
          }
        }
      ]
    }
 * @example response - 404 - hero not found
 * {
 *   "message": "I am sorry, hero not found!"
 * }
 */
router.get(
  '/heroes/:id',
  authHeaderValidations,
  routeSkipperByValidation,
  getHeroProfileHandler,
);
router.get('/heroes/:id', getHeroHandler);

module.exports = { router };
