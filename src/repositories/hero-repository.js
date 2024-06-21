
class HeroRepository {
  model;

  constructor(model) {
    this.model = model;
  }

  getHero(id) {
    return this.model.Hero.findOne({
      where: {
        id,
      },
    })
  }

  getHeroProfile(id) {
    return this.model.Hero.findOne({
      where: {
        id,
      },
      include: {
        model: this.model.Profile,
        as: 'profile',
        attributes: ['str', 'int', 'agi', 'luk']
      },
      raw: true,
      nest: true,
    })
  }

  getAllHeroes() {
    return this.model.Hero.findAll();
  }

  getAllHeroProfiles() {
    return this.model.Hero.findAll({
      include: {
        model: this.model.Profile,
        as: 'profile',
        attributes: ['str', 'int', 'agi', 'luk']
      },
      raw: true,
      nest: true,
    })
  }
}

module.exports = {
  HeroRepository
}