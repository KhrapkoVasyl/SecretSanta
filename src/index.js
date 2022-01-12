'use strict';

require('dotenv').config();
const app = require('./app');

(async () => {
  app.listen(
    process.env.PORT || 3000,
    process.env.HOST_NAME || 'localhost',
    () => {
      console.log('server running');
    }
  );
})();
