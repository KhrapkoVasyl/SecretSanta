'use strict';

const signUpService = require('../services/signUpService');

const signUpController = (req, res) => {
  signUpService(req.body, err => {
    if (err) {
      return res.status(404).json({
        status: 'fail',
        message: err.message,
      });
    }
    return res.status(201).json({ status: 'success', result: req.body });
  });
};

module.exports = signUpController;
