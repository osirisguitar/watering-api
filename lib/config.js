'use strict';

const nconf = require('nconf').env({
  separator: '__',
  lowerCase: true
}).file({
  file: 'config.json',
  dir: '../../',
  search: true
});

const config = {
  port: nconf.get('port') || 8007,
  rethinkdb: {
    host: nconf.get('rethinkdb:host') || 'localhost',
    port: Number(nconf.get('rethinkdb:port')) || 28016,
    db: nconf.get('rethinkdb:db') || 'watering'
  },
  imageFolder: '/data/watering-photos/images/',
  env: process.env.env || nconf.get('env') || 'local'
};

config.env = config.env.toUpperCase();

module.exports = config;
