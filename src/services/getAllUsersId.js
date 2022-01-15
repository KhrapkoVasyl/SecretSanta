'use strict';

const db = require('../db/db');

const getAllUsersIdScript = require('../db/scripts/getAllUsersIdScript');

const getAllUsersId = callback => {
  db.all(getAllUsersIdScript, [], (err, rows) => {
    const uidArr = rows.map(el => el.id);

    callback(err, uidArr);
  });
};

module.exports = getAllUsersId;
