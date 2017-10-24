'use strict';

let houses = require('./routes/houseRoutes');
let rooms = require('./routes/roomRoutes');
let plants = require('./routes/plantRoutes');
let users = require('./routes/userRoutes');
let authentication = require('./utils/authentication');

module.exports = {
  register (app) {
    app.get('/houses', authentication.authenticate, houses.getForUser);

    app.post('/houses', authentication.authenticate, houses.create);

    app.get('/rooms', authentication.authenticate, rooms.getForUser);

    app.post('/rooms', authentication.authenticate, rooms.create);

    app.put('/rooms/:id', authentication.authenticate, rooms.update);

    app.get('/plants', authentication.authenticate, plants.getForUser);

    app.post('/plants', authentication.authenticate, plants.create);

    app.put('/plants/:id', authentication.authenticate, plants.update);

    app.post('/token', authentication.token);

    app.post('/users', users.create);
  }
};
