exports.up = function (r, connection) {
  return Promise.all([
    r.tableCreate('users').run(connection),
    r.tableCreate('userTokens').run(connection),
    r.tableCreate('rooms').run(connection),
    r.tableCreate('plants').run(connection)
  ]);
};

exports.down = function (r, connection) {
  return Promise.all([
    r.tableDrop('users').run(connection),
    r.tableDrop('userTokens').run(connection),
    r.tableDrop('rooms').run(connection),
    r.tableDrop('plants').run(connection)
  ]);
};

