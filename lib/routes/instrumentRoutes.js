'use strict';

const instrumentService = require('../services/instrumentService');

function getForUser (req, res, next) {
  return instrumentService.getByUser()
    .then(instruments => {
      res.send(instruments);
    });
}

function update (req, res, next) {
  delete req.body.id;

  return instrumentService.update(req.params.id, req.body)
    .then(instrument => {
      res.send(instrument);
    })
    .catch(err => {
      res.send(500, err);
    });
}

function create (req, res, next) {
  req.body.userId = req.auth.userId;
  return instrumentService.create(req.body)
    .then(instrument => {
      res.send(instrument);
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
