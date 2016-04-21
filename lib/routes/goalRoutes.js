'use strict';

const goalService = require('../services/goalService');

function getForUser (req, res, next) {
  return goalService.getByUser()
    .then(goals => {
      res.send(goals);
    });
}

module.exports = {
  getForUser
};
