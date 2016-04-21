'use strict';

const sessionService = require('../services/sessionService');

function getForUser (req, res, next) {
  return sessionService.getByUser()
    .then(sessions => {
      res.send(sessions);
    });
}

function update (req, res, next) {
  delete req.body.id;

  return sessionService.update(req.params.id, req.body)
    .then(goal => {
      res.send(goal);
    })
    .catch(err => {
      res.send(500, err);
    });
}

function create (req, res, next) {
  req.body.userId = req.auth.userId;
  return sessionService.create(req.body)
    .then(goal => {
      res.send(goal);
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
