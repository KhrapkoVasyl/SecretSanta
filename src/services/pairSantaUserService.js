'use strict';

const db = require('../db/db');
const insertScript = require('../db/scripts/santaForUserInsertScript');

const insertSantaUserPairService = (err, { santasIdArr, uidArr }, callback) => {
  try {
    for (let i = 0; i < santasIdArr.length; i++) {
      db.run(
        insertScript,
        {
          $sid: santasIdArr[i],
          $uid: uidArr[i],
        },
        e => {
          if (e) {
            throw e;
          }
        }
      );
    }
  } catch (e) {
    err = e;
  } finally {
    callback(err);
  }
};

module.exports = insertSantaUserPairService;
