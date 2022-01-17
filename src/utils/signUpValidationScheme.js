'use strict';

const { check, body } = require('express-validator');
const { MAX_WISHES_NUMBER } = require('../config');

const signUpValidationScheme = [
  body('name').trim().not().isEmpty().withMessage('Name must be specified'),
  body('surname')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Surname must be specified'),
  body('wishes')
    .not()
    .isEmpty()
    .withMessage('Wishlist must be completed')
    .custom(wishArr => {
      if (wishArr.length > MAX_WISHES_NUMBER) {
        console.log('hello');
        throw new Error(
          // eslint-disable-next-line max-len
          `The number of given wishes is greater than the allowed maximum (${MAX_WISHES_NUMBER})`
        );
      }
      return true;
    }),
  body('wishes.*')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Wish name must be specified')
    .isLength({ min: 3 })
    .withMessage('Wish name must contain at least 3 letters'),
];

module.exports = signUpValidationScheme;
