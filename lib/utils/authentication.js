'use strict';

const userDb = require('../adapters/db/users');
const bcryptjs = require('bcryptjs');
const restifyErrors = require('restify').errors;

function token (req, res, next) {
  console.log('body', typeof req.body);
  return userDb.getByEmail(req.body.email)
    .then(user => {
      console.log('user', user, req.body.password);
      user.loggedIn = bcryptjs.compareSync(req.body.password, user.password);
      delete user.password;
      return user;
    })
    .then(user => {
      if (user.loggedIn) {
        return userDb.createUserToken(user)
          .then(userToken => {
            res.send({
              userToken: userToken
            });
          });
      } else {
        return next(new restifyErrors.UnauthorizedError('Invalid credentials'));
      }
    });
}

function authenticate (req, res, next) {
  if (!req.headers.authorization) {
    return next(new restifyErrors.UnauthorizedError('Missing user token'));
  } else {
    let userToken = req.headers.authorization.split(' ')[1];
    return userDb.getUserToken(userToken)
      .then(validatedToken => {
        if (!validatedToken) {
          return next(new restifyErrors.UnauthorizedError('Invalid user token'));
        }

        if (Date.now > validatedToken.expires) {
          return next(new restifyErrors.ForbiddenError('Token expired'));
        }

        req.auth = {
          userId: validatedToken.userId
        };

        return next();
      });
  }
}

module.exports = {
  token,
  authenticate
};
