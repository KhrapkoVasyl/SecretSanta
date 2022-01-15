'use strict';

const express = require('express');
const signUpController = require('./controllers/signUpController');
const shuffleController = require('./controllers/shuffleController');
const getRecipientBySantaId = require('./controllers/getRecipientBySantaId');
const { PREFIX } = require('./config');

const app = express();

app.use(express.json());

app.route(PREFIX + '/signUp').post(signUpController);
app.route(PREFIX + '/shuffle').post(shuffleController);
app.route(PREFIX + '/:id').get(getRecipientBySantaId);

module.exports = app;
