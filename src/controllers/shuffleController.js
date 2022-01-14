'use strict';

const shuffleService = require('../services/shuffleService');

const shuffleController = (req, res) => {
  shuffleService(err => {
    if (err) {
      return res.status(404).json({
        status: 'fail',
        message: err.message,
      });
    }
    console.log('sdsdadsa');
    return res.status(201).json({ status: 'success' });
  });
};

module.exports = shuffleController;
