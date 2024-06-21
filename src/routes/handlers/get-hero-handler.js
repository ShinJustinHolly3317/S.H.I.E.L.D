const { HeroRepository } = require('../../repositories/hero-repository');
const { shieldDb } = require('../../connections');
const getHeroProfileHandler = require('./get-hero-profile-handler');

module.exports = {
  getHeroHandler: async (req, res) => {
    const heroRepo = new HeroRepository(shieldDb);
  
    const { id } = req.params;
  
    const hero = await heroRepo.getHero(id);
    if (hero) {
      res.status(200).json(hero);
    } else {
      res.status(404).json({
        message: 'not found',
      });
    }
  },
}