'use strict';

const userService = require('../services/userService');

/* function getById (req, res, next) {
  let userId = req.auth.userId;
  return userService.getById(userId)
    .then(goals => {
      res.send(goals);
    });
}

function update (req, res, next) {
  delete req.body.id;

  return userService.update(req.params.id, req.body)
    .then(goal => {
      res.send(goal);
    })
    .catch(err => {
      res.send(500, err);
    });
}*/

function create (req, res, next) {
  return userService.create(req.body)
    .then(goal => {
      res.send(goal);
    })
    .catch(err => {
      res.send(500, err);
    });
}

module.exports = {
/*  getById,
  update,*/
  create
};
