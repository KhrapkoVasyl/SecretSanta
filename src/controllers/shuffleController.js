'use strict';

const shuffleService = require('../services/shuffleService');

const shuffleController = (req, res) => {
  shuffleService(err => {
    if (err) {
      return res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
    return res.status(201).json({ status: 'success' });
  });
};

module.exports = shuffleController;
