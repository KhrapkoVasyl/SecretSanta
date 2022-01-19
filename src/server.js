'use strict';

require('dotenv').config();
require('./db/db');
const app = require('./app');
const eventEmitter = require('./utils/eventEmitter');

eventEmitter.on('database connected', () => {
  app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost', () => {
    console.log('server running');
  });
});
