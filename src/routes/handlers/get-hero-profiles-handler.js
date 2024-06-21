const { HeroRepository } = require('../../repositories/hero-repository');
const { shieldDb } = require('../../connections');

module.exports = {
  getHeroProfilesHandler: async (req, res) => {
    const heroRepo = new HeroRepository(shieldDb);
    const allHeroes = await heroRepo.getAllHeroProfiles();
    res.status(200).json({
      heroes: allHeroes,
    });
  }
}