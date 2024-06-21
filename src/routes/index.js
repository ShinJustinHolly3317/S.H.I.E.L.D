const { Router } = require('express');
const { HeroRepository } = require('../repositories/hero-repository')
const { shieldDb } = require('../connections')
const { passwordAuthenticator } = require('./utils/password-authenticator')

const router = Router();

// router.use(passwordAuthenticator);

router.get('/heroes', async (req, res, next) => {
  console.log('first');

  const { name, password } = req.headers;
console.log(req.headers);
  if (!passwordAuthenticator(name, password)) return next('route');


  const heroRepo = new HeroRepository(shieldDb);
  const allHeroes = await heroRepo.getAllHeroProfiles();
  console.log(allHeroes);
  res.status(200).json({
    heroes: allHeroes,
  })
})

router.get('/heroes', async (req, res) => {
  console.log('second');
  const heroRepo = new HeroRepository(shieldDb);
  const allHeroes = await heroRepo.getAllHeroes();
  res.status(200).json({
    heroes: allHeroes,
  })
})


router.get('/heroes/:id', async (req, res) => {
  const heroRepo = new HeroRepository(shieldDb);

  const { id } = req.params

  const hero = await heroRepo.getHero(id)
  if (hero) {
    res.status(200).json(hero)

  } else {
    res.status(404).json({
      message: 'not found'
    })
  }
})

router.post('/heroes', async (req, res) => {
  const heroRepo = new HeroRepository(shieldDb);
  await heroRepo.model.create({
    id:5,
    name: 'homeland',
    image: 'https://test'
  })
  res.status(200).json({
    message: 'success'
  })
})

router.delete('/heroes/:id', async (req, res) => {
  const heroRepo = new HeroRepository(shieldDb);
  await heroRepo.model.destroy({
    where: {
      id: 5
    }
  })
  res.status(200).json({
    message: 'success'
  })
})

module.exports = { router }