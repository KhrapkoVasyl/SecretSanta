'use strict';

const db = require('../db/db');
const getAllUsersId = require('./getAllUsersId');
const insertSantaUserPair = require('./insertSantaUserPair');

const {
  santaForUserTableScript,
} = require('../db/scripts/tableСreationScripts');

const shuffleArray = require('../utils/shuffleArray');
const { MIN_PLAYERS_NUMBER, MSG_TABLE_ALREADY_EXISTS } = require('../config');

const shuffleService = callback => {
  getAllUsersId((err, santasIdArr) => {
    if (santasIdArr.length < MIN_PLAYERS_NUMBER) {
      err = new Error(
        `The number of players must be at least ${MIN_PLAYERS_NUMBER}`
      );
    }
    if (err) return callback(err);
    db.run(santaForUserTableScript, err => {
      if (err?.message === MSG_TABLE_ALREADY_EXISTS)
        err = new Error('Pairs of santa and users have already been made');
      const uidArr = shuffleArray(santasIdArr);

      insertSantaUserPair(err, { santasIdArr, uidArr }, callback);
    });
  });
};

module.exports = shuffleService;
