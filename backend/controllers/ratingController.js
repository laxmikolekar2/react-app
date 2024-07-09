const Rating = require('../models/Rating');

// Get ratings by store
const getRatingsByStore = async (req, res) => {
  const { storeId } = req.params;
  try {
    const ratings = await Rating.findAll({ where: { storeId } });
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ratings', error });
  }
};

module.exports = {
  getRatingsByStore,
};
