// storeRouter.js
const express = require('express');
const { getStoreRatings, getAverageRating } = require('../controllers/storeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/ratings', authMiddleware.verifyToken, authMiddleware.isStoreOwner, getStoreRatings);
router.get('/average-rating', authMiddleware.verifyToken, authMiddleware.isStoreOwner, getAverageRating);

module.exports = router;


