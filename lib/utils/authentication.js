'use strict';

const userDb = require('../adapters/db/users');
const bcryptjs = require('bcryptjs');
const restifyErrors = require('restify').errors;
const request = require('request');

function getUserEmailFromFaceBook (fbAccessToken) {
  return new Promise((resolve, reject) => {
    request(`https://graph.facebook.com/v2.6/me?access_token=${fbAccessToken}&debug=all&fields=id%2Cname%2Cemail&format=json&method=get&pretty=0&suppress_http_code=1`,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        json: true
      }, (err, response, body) => {
        if (err) {
          return reject(err);
        }

        resolve(body.email);
      });
  });
}

function getUserEmail (req) {
  return new Promise((resolve, reject) => {
    if (req.body.email) {
      return resolve(req.body.email);
    } else if (req.body.fbAccessToken) {
      return getUserEmailFromFaceBook(req.body.fbAccessToken)
        .then(email => {
          return resolve(email);
        });
    } else {
      return reject(new Error('Invalid credentials'));
    }
  });
}

function verifyUser (req, user) {
  if (req.body.email && req.body.password) {
    return bcryptjs.compareSync(req.body.password, user.password);
  } else if (req.body.fbAccessToken) {
    return true;
  }
}

function token (req, res, next) {
  return getUserEmail(req)
    .then(userEmail => {
      return userDb.getByEmail(userEmail);
    })
    .then(user => {
      if (verifyUser(req, user)) {
        return userDb.createUserToken(user)
          .then(userToken => {
            res.send({
              userToken: userToken
            });
          });
      } else {
        return next(new restifyErrors.UnauthorizedError('Invalid credentials'));
      }
    })
    .catch(error => {
      console.error(error);
      return next(new restifyErrors.UnauthorizedError('Invalid credentials'));
    });
}

function authenticate (req, res, next) {
  req.auth = {
    userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a'
  };

  return next();

/*  if (!req.headers.authorization) {
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
  }*/
}

module.exports = {
  token,
  authenticate
};
