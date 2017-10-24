'use strict';

const houseService = require('../services/houseService');

function getForUser (req, res, next) {
  let userId = req.auth.userId;
  return houseService.getByUser(userId)
    .then(houses => {
      res.send(houses);
    });
}

function update (req, res, next) {
  delete req.body.id;

  return houseService.update(req.params.id, req.body)
    .then(house => {
      res.send(house);
    })
    .catch(err => {
      res.send(500, err);
    });
}

function create (req, res, next) {
  req.body.userId = req.auth.userId;
  return houseService.create(req.body)
    .then(house => {
      res.send(house);
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
