const { HeroRepository } = require('../../repositories/hero-repository');
const { shieldDb } = require('../../connections');

module.exports = {
  getHeroProfilesHandler: async (req, res, next) => {
    try {
      // 1. use case
      const heroRepo = new HeroRepository(shieldDb);
      const allHeroProfiles = await heroRepo.getAllHeroProfiles();

      // 2. response
      if (!allHeroProfiles || !allHeroProfiles.length) {
        res.status(404).json({
          message: 'I am sorry, no hero here.',
        });
      } else {
        res.status(200).json({
          heroes: allHeroProfiles,
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
