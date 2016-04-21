'use strict';

function authenticate (req, res, next) {
  req.auth = {
    userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a'
  };

  return next();
}

module.exports = {
  authenticate
};
