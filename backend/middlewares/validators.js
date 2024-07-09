// validators.js
const { check, validationResult } = require('express-validator');

const validateRegister = [
  check('name').isLength({ min: 3, max: 60 }),
  check('email').isEmail(),
  check('address').isLength({ max: 400 }),
  check('password').isLength({ min: 8, max: 16 }).matches(/(?=.*[A-Z])(?=.*[!@#$&*])/),
];

const validateLogin = [
  check('email').isEmail(),
  check('password').isLength({ min: 8, max: 16 }),
];

const validateStore = [
  check('name').isLength({ min: 3, max: 60 }),
  check('email').isEmail(),
  check('address').isLength({ max: 400 }),
];

const validateRating = [
  check('rating').isInt({ min: 1, max: 5 }),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateStore,
  validateRating,
  handleValidationErrors,
};