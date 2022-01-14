'use strict';

const db = require('../db/db');

const getAllUsersIdScript = require('../db/scripts/getAllUsersIdScript');

const getAllUsersIdService = callback => {
  db.all(getAllUsersIdScript, [], (err, rows) => {
    if (err) {
      throw err;
    }

    const uidArr = rows.map(el => el.id);

    callback(err, uidArr);
  });
};

module.exports = getAllUsersIdService;
