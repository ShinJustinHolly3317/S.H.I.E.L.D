const { Router } = require('express');

const router = Router();

router.get('/heroes', (req, res) => {
  res.status(200).json({
    heroes: [{"id":"1","name":"Daredevil","image":"http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"},{"id":"2","name":"Thor","image":"http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"},{"id":"3","name":"Iron Man","image":"http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"},{"id":"4","name":"Hulk","image":"http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg"}]
  })
})

router.get('/heroes/:id', (req, res) => {
  const { id } = req.params
  const heroes = [{"id":"1","name":"Daredevil","image":"http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"},{"id":"2","name":"Thor","image":"http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"},{"id":"3","name":"Iron Man","image":"http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"},{"id":"4","name":"Hulk","image":"http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg"}]

  const hero = heroes.find((h) => h.id === id)
  if (hero) {
    res.status(200).json(hero)

  } else {
    res.status(404).json({
      message: 'not found'
    })
  }
})

module.exports = { router }