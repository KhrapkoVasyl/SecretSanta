'use strict';

const express = require('express');
const signUpController = require('./controllers/signUpController');
const { PREFIX } = require('./config');

const app = express();

app.use(express.json());

app.route(PREFIX + '/signUp').post(signUpController);

module.exports = app;
