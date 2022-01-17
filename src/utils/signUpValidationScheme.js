'use strict';

const { check, body } = require('express-validator');

const signUpValidationScheme = [
  body('name').trim().not().isEmpty().withMessage('Name must be specified'),
  body('surname')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Surname must be specified'),
  body('wishes').not().isEmpty().withMessage('Wishlist must be completed'),
  check('wishes.*')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Wishname must be specified'),
];

module.exports = signUpValidationScheme;
