'use strict';

const sessionService = require('../services/sessionService');

function fixPayload (payload) {
  if (payload.duration) {
    payload.duration = Number.parseInt(payload.duration, 10);
  }

  if (payload.date) {
    payload.date = new Date(payload.date);
  }

  if (payload.rating) {
    payload.rating = Number.parseInt(payload.rating, 10);
  }

  return payload;
}

function getForUser (req, res, next) {
  return sessionService.getByUser(req.auth.userId)
    .then(sessions => {
      console.log('sessions', sessions);
      res.send(sessions);
    });
}

function update (req, res, next) {
  delete req.body.id;
  req.body = fixPayload(req.body);

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
  req.body = fixPayload(req.body);

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
