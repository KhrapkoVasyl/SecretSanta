'use strict';

const getUserInfoBySantaId = require('../services/getUserInfoBySantaId');

const getUserBySanta = (req, res) => {
  getUserInfoBySantaId(req.params.id, (err, user) => {
    if (err) {
      return res.status(404).json({
        status: 'fail',
        message: err.message,
      });
    }
    return res.status(200).json({ status: 'success', result: user });
  });
};

module.exports = getUserBySanta;
