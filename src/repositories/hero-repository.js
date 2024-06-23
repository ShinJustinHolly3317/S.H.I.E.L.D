class HeroRepository {
  constructor(model) {
    this.model = model;
  }

  async getHero(id) {
    const heroDao = await this.model.Hero.findOne({
      where: {
        id,
      },
    });
    return heroDao?.toJSON();
  }

  async getHeroProfile(id) {
    const heroProfileDao = await this.model.Hero.findOne({
      where: {
        id,
      },
      include: {
        model: this.model.Profile,
        as: 'profile',
      },
    });
    return heroProfileDao?.toJSON();
  }

  async getAllHeroes() {
    const heroesDao = await this.model.Hero.findAll();
    return heroesDao?.map((heroDao) => heroDao.toJSON());
  }

  async getAllHeroProfiles() {
    const heroProfilesDao = await this.model.Hero.findAll({
      include: {
        model: this.model.Profile,
        as: 'profile',
      },
    });
    return heroProfilesDao?.map((heroProfileDao) => heroProfileDao.toJSON());
  }
}

module.exports = {
  HeroRepository,
};
