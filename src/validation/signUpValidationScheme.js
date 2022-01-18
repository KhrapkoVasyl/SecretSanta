'use strict';

const { body } = require('express-validator');
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
    .custom(isWishArrLessThanMaximum)
    .custom(isWishesListAnArray),
  body('wishes.*')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Wish name must be specified')
    .isLength({ min: 3 })
    .withMessage('Wish name must contain at least 3 letters'),
];

function isWishArrLessThanMaximum(wishArr) {
  if (wishArr.length > MAX_WISHES_NUMBER)
    throw new Error(
      // eslint-disable-next-line max-len
      `The number of given wishes is greater than the allowed maximum (${MAX_WISHES_NUMBER})`
    );
  return true;
}

function isWishesListAnArray(wishArr) {
  if (!Array.isArray(wishArr)) throw new Error(`Wishes list must be an array`);

  return true;
}

module.exports = signUpValidationScheme;
