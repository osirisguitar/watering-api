'use strict';

const instrumentService = require('../services/instrumentService');

function getForUser (req, res, next) {
  return instrumentService.getByUser()
    .then(instruments => {
      res.send(instruments);
    });
}

module.exports = {
  getForUser
};
