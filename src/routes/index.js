const { Router } = require('express');
const { HeroRepository } = require('../repositories/hero-repository')
const { Hero } = require('../models/hero');
const { where } = require('sequelize');

const router = Router();

router.get('/heroes', async (req, res) => {
  const heroRepo = new HeroRepository(Hero);
  const allHeroesDao = await heroRepo.getAllHeroes();
  const allHeroes = allHeroesDao.map(allHeroeDao => allHeroeDao.toJSON())
  res.status(200).json({
    heroes: allHeroes,
  })
})

router.get('/heroes/:id', async (req, res) => {
  const heroRepo = new HeroRepository(Hero);

  const { id } = req.params

  const hero = await heroRepo.getHero(id)
  if (hero) {
    res.status(200).json(hero.toJSON())

  } else {
    res.status(404).json({
      message: 'not found'
    })
  }
})

router.post('/heroes', async (req, res) => {
  const heroRepo = new HeroRepository(Hero);
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
  const heroRepo = new HeroRepository(Hero);
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