'use strict';

const db = require('../db/db');
const insertScript = require('../db/scripts/santaForUserInsertScript');

const insertSantaUserPair = (err, { santasIdArr, uidArr }, callback) => {
  try {
    for (let i = 0; i < santasIdArr.length; i++) {
      db.run(insertScript, {
        $sid: santasIdArr[i],
        $uid: uidArr[i],
      });
    }
  } catch (e) {
    err = e;
  } finally {
    callback(err);
  }
};

module.exports = insertSantaUserPair;
