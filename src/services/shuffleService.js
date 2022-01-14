'use strict';

const getAllUsersIdService = require('./getAllUsersIdService');
const pairSantaUserService = require('./pairSantaUserService');

const shuffleService = callback => {
  getAllUsersIdService((err, uidArr) => {
    const santasIdArr = uidArr.slice(); //copy the id array
    //shuffle
    pairSantaUserService(err, { santasIdArr, uidArr }, callback);
  });
};

module.exports = shuffleService;
