'use strict';

const express = require('express');

const signUpValidationScheme = require('./validation/signUpValidationScheme');
const signUpController = require('./controllers/signUpController');
const shuffleController = require('./controllers/shuffleController');
const getUserBySanta = require('./controllers/getUserBySanta');
const { PREFIX } = require('./config');

const app = express();

app.use(express.json());
app.post(PREFIX + '/signUp', signUpValidationScheme, signUpController);
app.post(PREFIX + '/shuffle', shuffleController);
app.get(PREFIX + '/:id', getUserBySanta);

module.exports = app;
