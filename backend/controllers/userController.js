const Store = require('../models/Store');
const Rating = require('../models/Rating');

// Get list of all stores
const getStores = async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stores', error });
  }
};

// Submit a rating for a store
const submitRating = async (req, res) => {
  const { storeId, rating } = req.body;
  const { userId } = req.user;
  try {
    const newRating = await Rating.create({ userId, storeId, rating });
    // Update store's average rating
    const store = await Store.findByPk(storeId);
    const ratings = await Rating.findAll({ where: { storeId } });
    const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    await store.update({ rating: averageRating });
    res.status(201).json(newRating);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting rating', error });
  }
};

// Modify a submitted rating
const modifyRating = async (req, res) => {
  const { storeId, rating } = req.body;
  const { userId } = req.user;
  try {
    const userRating = await Rating.findOne({ where: { userId, storeId } });
    if (userRating) {
      await userRating.update({ rating });
      // Update store's average rating
      const store = await Store.findByPk(storeId);
      const ratings = await Rating.findAll({ where: { storeId } });
      const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
      await store.update({ rating: averageRating });
      res.json(userRating);
    } else {
      res.status(404).json({ message: 'Rating not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error modifying rating', error });
  }
};

module.exports = {
  getStores,
  submitRating,
  modifyRating,
};
