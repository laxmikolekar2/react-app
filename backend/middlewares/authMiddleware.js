const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify the token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    if (user && user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Require Admin Role' });
    }
  }).catch(err => {
    res.status(500).json({ message: 'Error checking admin role', error: err });
  });
};

// Middleware to check if the user is a store owner
const isStoreOwner = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    if (user && user.role === 'store_owner') {
      next();
    } else {
      res.status(403).json({ message: 'Require Store Owner Role' });
    }
  }).catch(err => {
    res.status(500).json({ message: 'Error checking store owner role', error: err });
  });
};

module.exports = {
  verifyToken,
  isAdmin,
  isStoreOwner,
};
