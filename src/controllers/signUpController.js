'use strict';

const { validationResult } = require('express-validator');
const signUpService = require('../services/signUpService');

const signUpController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'fail', errors: errors.array() });
  }
  signUpService(req.body, (err, id) => {
    if (err) {
      return res.status(404).json({
        status: 'fail',
        message: err.message,
      });
    }
    req.body.id = id;
    return res.status(201).json({ status: 'success', result: req.body });
  });
};

module.exports = signUpController;
