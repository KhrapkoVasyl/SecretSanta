'use strict';

const db = require('../db/db');
const getAllUsersIdService = require('./getAllUsersIdService');
const pairSantaUserService = require('./pairSantaUserService');

const {
  santaForUserTableScript,
} = require('../db/scripts/tableСreationScripts');

const shuffleArray = require('../utils/shuffleArray');
const { MIN_PLAYERS_NUMBER } = require('../config');

const shuffleService = callback => {
  getAllUsersIdService((err, santasIdArr) => {
    if (santasIdArr.length < MIN_PLAYERS_NUMBER) {
      err = new Error(
        `The number of players must be at least ${MIN_PLAYERS_NUMBER}`
      );
    }
    if (err) return callback(err);
    db.run(santaForUserTableScript, err => {
      const uidArr = shuffleArray(santasIdArr);

      pairSantaUserService(err, { santasIdArr, uidArr }, callback);
    });
  });
};

module.exports = shuffleService;
