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

router.get(
  '/heroes',
  authHeaderValidations,
  routeSkipperByValidation,
  getHeroProfilesHandler
);
router.get('/heroes', getHeroesHandler);

router.get(
  '/heroes/:id',
  authHeaderValidations,
  routeSkipperByValidation,
  getHeroProfileHandler
);
router.get('/heroes/:id', getHeroHandler);

// router.post('/heroes', async (req, res) => {
//   const heroRepo = new HeroRepository(shieldDb);
//   await heroRepo.model.create({
//     id:5,
//     name: 'homeland',
//     image: 'https://test'
//   })
//   res.status(200).json({
//     message: 'success'
//   })
// })

// router.delete('/heroes/:id', async (req, res) => {
//   const heroRepo = new HeroRepository(shieldDb);
//   await heroRepo.model.destroy({
//     where: {
//       id: 5
//     }
//   })
//   res.status(200).json({
//     message: 'success'
//   })
// })

module.exports = { router };
