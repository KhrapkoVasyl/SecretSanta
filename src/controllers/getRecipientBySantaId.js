'use strict';

const getUserByIdService = require('../services/getRecipientBySantaIdService');

const getRecipientBySantaId = (req, res) => {
  getUserByIdService(req.params.id, (err, user) => {
    if (err) {
      return res.status(404).json({
        status: 'fail',
        message: err.message,
      });
    }
    return res.status(200).json({ status: 'success', result: user });
  });
};

module.exports = getRecipientBySantaId;
