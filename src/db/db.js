'use strict';

const sqlite3 = require('sqlite3').verbose();
const createTables = require('../utils/createTables');
const {
  userTableScript,
  wishTableScript,
} = require('./scripts/tableСreationScripts');
const eventEmitter = require('../utils/eventEmitter');

const db = new sqlite3.Database(`${__dirname}/../../data/database.db`, err => {
  if (err) {
    return console.error(err.message);
  }

  createTables(db, {
    userTableScript,
    wishTableScript,
  });
  console.log('Connected to the database');
  eventEmitter.emit('database connected');
});

module.exports = db;
