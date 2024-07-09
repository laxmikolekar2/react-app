// adminRouter.js
const express = require('express');
const { addUser, addStore, getDashboardData } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateRegister, validateStore, handleValidationErrors } = require('../middlewares/validators');

const router = express.Router();

router.post('/add-user', authMiddleware.verifyToken, authMiddleware.isAdmin, validateRegister, handleValidationErrors, addUser);
router.post('/add-store', authMiddleware.verifyToken, authMiddleware.isAdmin, validateStore, handleValidationErrors, addStore);
router.get('/dashboard', authMiddleware.verifyToken, authMiddleware.isAdmin, getDashboardData);

module.exports = router;