'use strict';

const plantService = require('../services/plantService');

function getForUser (req, res, next) {
  return plantService.getByUser(req.auth.userId)
    .then(plants => {
      res.send(plants);
    });
}

function update (req, res, next) {
  delete req.body.id;

  return plantService.update(req.params.id, req.body)
    .then(plant => {
      res.send(plant);
    })
    .catch(err => {
      res.send(500, err);
    });
}

function create (req, res, next) {
  req.body.userId = req.auth.userId;
  return plantService.create(req.body)
    .then(plant => {
      res.send(plant);
    })
    .catch(err => {
      res.send(500, err);
    });
}

module.exports = {
  getForUser,
  update,
  create
};
