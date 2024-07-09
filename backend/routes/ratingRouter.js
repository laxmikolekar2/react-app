// ratingRouter.js
const express = require('express');
const { getRatingsByStore } = require('../controllers/ratingController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/ratings/:storeId', authMiddleware.verifyToken, getRatingsByStore);

module.exports = router;