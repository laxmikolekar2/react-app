const Rating = require('../models/Rating');

// Get ratings for a store
const getStoreRatings = async (req, res) => {
  const { storeId } = req.params;
  try {
    const ratings = await Rating.findAll({ where: { storeId } });
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching store ratings', error });
  }
};

// Get average rating for a store
const getAverageRating = async (req, res) => {
  const { storeId } = req.params;
  try {
    const ratings = await Rating.findAll({ where: { storeId } });
    const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    res.json({ averageRating });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching average rating', error });
  }
};

module.exports = {
  getStoreRatings,
  getAverageRating,
};
