'use strict';

const script = `INSERT INTO user(name, surname) VALUES($name, $surname)`;

module.exports = script;
