'use strict';

const goalService = require('../services/goalService');

function getForUser (req, res, next) {
  let userId = req.auth.userId;
  return goalService.getByUser(userId)
    .then(goals => {
      res.send(goals);
    });
}

function update (req, res, next) {
  delete req.body.id;

  return goalService.update(req.params.id, req.body)
    .then(goal => {
      res.send(goal);
    })
    .catch(err => {
      res.send(500, err);
    });
}

function create (req, res, next) {
  req.body.userId = req.auth.userId;
  return goalService.create(req.body)
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
