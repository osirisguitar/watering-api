'use strict';

let instruments = require('./routes/instrumentRoutes');

module.exports = {
  register (app) {
    app.get('/instruments', /*authenticated.signature,*/ instruments.getForUser);
  }
};
