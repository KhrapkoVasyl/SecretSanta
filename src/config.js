'use strict';

const PREFIX = '/api/v1';
const MIN_PLAYERS_NUMBER = 3;
const MAX_PLAYERS_NUMBER = 500;
const MAX_WISHES_NUMBER = 10;
const MSG_TABLE_ALREADY_EXISTS =
  'SQLITE_ERROR: table "santa_for_user" already exists';
module.exports = {
  PREFIX,
  MIN_PLAYERS_NUMBER,
  MAX_PLAYERS_NUMBER,
  MAX_WISHES_NUMBER,
  MSG_TABLE_ALREADY_EXISTS,
};
