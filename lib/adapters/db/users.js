'use strict';

const r = require('./index');
const bcrypt = require('bcryptjs');

/* function update (goalId, goal) {
  return r.table('goals').get(goalId).update(goal);
}*/

function create (user) {
  user.password = bcrypt.hashSync(user.password, 10);
  return r.table('users').insert(user);
}

function getByEmail (userEmail) {
  return r.table('users').filter({ email: userEmail })
    .then(users => {
      return users[0];
    });
}

function createUserToken (user) {
  return r.table('userTokens').filter({ userId: user.id }).delete()
    .then(() => {
      return r.table('userTokens').insert({
        userId: user.id,
        expires: Date.now() + 12 * 60 * 60 * 1000
      });
    })
    .then(result => {
      let tokenId = result.generated_keys[0];

      return tokenId;
    });
}

function getUserToken (userToken) {
  return r.table('userTokens').get(userToken);
}

module.exports = {
/*  getById,
  update,*/
  getByEmail,
  create,
  createUserToken,
  getUserToken
};
