'use strict';

const db = require('../db/db');
const insertUserWishService = require('./insertUserWishService');
const userInsertScript = require('../db/scripts/userInsertScript');
const getAllUsersIdService = require('./getAllUsersIdService');
const { MAX_PLAYERS_NUMBER } = require('../config');

const signUpService = ({ name, surname, wishes }, callback) => {
  getAllUsersIdService((err, uidArray) => {
    if (uidArray.length >= MAX_PLAYERS_NUMBER) {
      err = new Error(
        `Maximum number of players (${MAX_PLAYERS_NUMBER}) reached`
      );
    }
    if (err) return callback(err);
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
              insertUserWishService(wish, this.lastID);
            }
          }
        } catch (e) {
          err = e;
        } finally {
          callback(err);
        }
      }
    );
  });
};

module.exports = signUpService;
