'use strict';

const db = require('../db/db');
const insertUserWish = require('./insertUserWish');
const userInsertScript = require('../db/scripts/userInsertScript');
const getAllUsersId = require('./getAllUsersId');
const { MAX_PLAYERS_NUMBER } = require('../config');

const signUpService = ({ name, surname, wishes }, callback) => {
  getAllUsersId((err, uidArray) => {
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
          for (const wish of wishes) {
            insertUserWish(wish, this.lastID);
          }
        } catch (e) {
          err = e;
        } finally {
          callback(err, this.lastID);
        }
      }
    );
  });
};

module.exports = signUpService;
