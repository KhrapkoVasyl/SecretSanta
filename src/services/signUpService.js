'use strict';

const db = require('../db/db');
const userInsertScript = require('../db/scripts/userInsertScript');
const wishInsertScript = require('../db/scripts/wishInsertScript');

const insertUserWish = (wish, uid) => {
  db.run(
    wishInsertScript,
    {
      $name: wish,
      $uid: uid,
    },
    err => {
      if (err) return err;
    }
  );
};

const signUpService = ({ name, surname, wishes }, callback) => {
  db.run(
    userInsertScript,
    {
      $name: name,
      $surname: surname,
    },
    function (err) {
      try {
        if (!wishes) throw new Error('Wishlist must be completed');
        else {
          for (const wish of wishes) {
            insertUserWish(wish, this.lastID);
          }
        }
      } catch (e) {
        err = e;
      } finally {
        callback(err);
      }
    }
  );
};

module.exports = signUpService;
