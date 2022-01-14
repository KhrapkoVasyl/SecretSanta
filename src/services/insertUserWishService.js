'use strict';

const db = require('../db/db');

const wishInsertScript = require('../db/scripts/wishInsertScript');

const insertUserWish = (wish, uid) => {
  db.run(
    wishInsertScript,
    {
      $name: wish,
      $uid: uid,
    },
    err => {
      if (err) throw err;
    }
  );
};

module.exports = insertUserWish;
