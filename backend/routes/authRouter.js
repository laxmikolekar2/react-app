// authRouter.js
const express = require('express');
const { register, login, changePassword } = require('../controllers/authController');
const { validateRegister, validateLogin, handleValidationErrors } = require('../middlewares/validators');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', validateRegister, handleValidationErrors, register);
router.post('/login', validateLogin, handleValidationErrors, login);
router.post('/change-password', authMiddleware.verifyToken, changePassword);

module.exports = router;

