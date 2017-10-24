'use strict';

const roomService = require('../services/roomService');

function getForUser (req, res, next) {
  let userId = req.auth.userId;
  return roomService.getByUser(userId)
    .then(rooms => {
      res.send(rooms);
    });
}

function update (req, res, next) {
  delete req.body.id;

  return roomService.update(req.params.id, req.body)
    .then(room => {
      res.send(room);
    })
    .catch(err => {
      res.send(500, err);
    });
}

function create (req, res, next) {
  req.body.userId = req.auth.userId;
  return roomService.create(req.body)
    .then(room => {
      res.send(room);
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
