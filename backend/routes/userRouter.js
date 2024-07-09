const express = require('express');
const { getStores, submitRating, modifyRating } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateRating, handleValidationErrors } = require('../middlewares/validators');

const router = express.Router();

router.get('/stores', authMiddleware.verifyToken, getStores);
router.post('/rate-store', authMiddleware.verifyToken, validateRating, handleValidationErrors, submitRating);
router.put('/rate-store', authMiddleware.verifyToken, validateRating, handleValidationErrors, modifyRating);

module.exports = router;