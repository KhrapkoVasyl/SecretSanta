'use strict';

const db = require('../db/db');

const getUserBySantaIdScript = require('../db/scripts/getUserBySantaIdScript');
const getAllUserWishesScript = require('../db/scripts/getAllUserWishesScript');

const getRecipientBySantaIdService = (id, callback) => {
  db.get(getUserBySantaIdScript, [id], (err, user) => {
    if (err) console.log(err);
    if (!user) {
      err = new Error(`No user found with the id ${id}`);
    }
    db.all(getAllUserWishesScript, [user.id], (err, wishes) => {
      delete user.id;
      wishes = wishes.map(el => el.name);
      user.wishes = wishes;
      callback(err, user);
    });
  });
};

module.exports = getRecipientBySantaIdService;
