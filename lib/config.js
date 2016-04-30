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
  port: nconf.get('port') || 8000,
  rethinkdb: {
    host: nconf.get('rethinkdb:host') || 'rethinkdb',
    port: Number(nconf.get('rethinkdb:port')) || 28015,
    db: nconf.get('rethinkdb:db') || 'guitarjournal'
  },
  imageFolder: '/data/instrument-photos/images/',
  env: process.env.env || nconf.get('env') || 'local'
};

config.env = config.env.toUpperCase();

module.exports = config;
