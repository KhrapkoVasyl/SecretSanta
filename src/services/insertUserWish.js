'use strict';

const db = require('../db/db');

const wishInsertScript = require('../db/scripts/wishInsertScript');

const insertUserWish = (wish, uid) => {
  try {
    db.run(wishInsertScript, {
      $name: wish,
      $uid: uid,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = insertUserWish;
