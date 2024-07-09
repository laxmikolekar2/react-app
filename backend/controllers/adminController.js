const User = require('../models/User');
const Store = require('../models/Store');

// Add a new user
const addUser = async (req, res) => {
  const { name, email, address, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, address, password: hashedPassword, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error });
  }
};

// Add a new store
const addStore = async (req, res) => {
  const { name, email, address } = req.body;
  try {
    const store = await Store.create({ name, email, address });
    res.status(201).json(store);
  } catch (error) {
    res.status(500).json({ message: 'Error adding store', error });
  }
};

// Get admin dashboard data
const getDashboardData = async (req, res) => {
  try {
    const totalUsers = await User.count();
    const totalStores = await Store.count();
    const totalRatings = await Rating.count();
    res.json({ totalUsers, totalStores, totalRatings });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard data', error });
  }
};

module.exports = {
  addUser,
  addStore,
  getDashboardData,
};
