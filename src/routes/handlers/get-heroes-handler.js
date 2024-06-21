const { HeroRepository } = require('../../repositories/hero-repository');
const { shieldDb } = require('../../connections');

module.exports = {
  getHeroesHandler: async (req, res) => {
    const heroRepo = new HeroRepository(shieldDb);
  const allHeroes = await heroRepo.getAllHeroes();
  res.status(200).json({
    heroes: allHeroes,
  });
  }
}