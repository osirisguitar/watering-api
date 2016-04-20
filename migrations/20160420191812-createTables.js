exports.up = function (r, connection) {
  return Promise.all([
    r.tableCreate('users').run(connection),
    r.tableCreate('userTokens').run(connection),
    r.tableCreate('instruments').run(connection),
    r.tableCreate('goals').run(connection),
    r.tableCreate('sessions').run(connection)
  ]);
};

exports.down = function (r, connection) {
  return Promise.all([
    r.tableDrop('users').run(connection),
    r.tableDrop('userTokens').run(connection),
    r.tableDrop('instruments').run(connection),
    r.tableDrop('sessions').run(connection),
    r.tableDrop('goals').run(connection)
  ]);
};

