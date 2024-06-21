const { HeroRepository } = require('../../repositories/hero-repository');
const { shieldDb } = require('../../connections');

module.exports = {
  getHeroProfileHandler: async (req, res) => {
    const heroRepo = new HeroRepository(shieldDb);

    const { id } = req.params;

    const hero = await heroRepo.getHeroProfile(id);
    if (hero) {
      res.status(200).json(hero);
    } else {
      res.status(404).json({
        message: 'not found',
      });
    }
  }
}