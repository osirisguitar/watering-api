'use strict';

const sessionService = require('../services/sessionService');

function getForUser (req, res, next) {
  return sessionService.getByUser()
    .then(sessions => {
      res.send(sessions);
    });
}

module.exports = {
  getForUser
};
