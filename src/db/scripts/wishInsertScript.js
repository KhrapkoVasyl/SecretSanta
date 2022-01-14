'use strict';

const script = `INSERT INTO wish(name, user_id) VALUES($name, $uid)`;

module.exports = script;
