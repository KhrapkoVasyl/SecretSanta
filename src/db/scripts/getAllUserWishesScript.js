'use strict';

const script = `SELECT name from wish 
                WHERE user_id = ?`;

module.exports = script;
