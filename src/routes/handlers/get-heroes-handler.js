const { HeroRepository } = require('../../repositories/hero-repository');
const { shieldDb } = require('../../connections');

module.exports = {
  getHeroesHandler: async (req, res, next) => {
    try {
      // 1. use case
      const heroRepo = new HeroRepository(shieldDb);
      const allHeroes = await heroRepo.getAllHeroes();

      // 2. response
      if (!allHeroes || !allHeroes.length) {
        res.status(404).json({
          message: 'I am sorry, no hero here.',
        });
      } else {
        res.status(200).json({
          heroes: allHeroes,
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
