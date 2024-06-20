
class HeroRepository {
  model;

  constructor(model) {
    this.model = model;
  }

  getHero(id) {
    return this.model.findOne({
      where: {
        id,
      }
    })
  }

  getAllHeroes() {
    return this.model.findAll();
  }
}

module.exports = {
  HeroRepository
}