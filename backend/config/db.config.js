const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Rating', 'postgres', 'laxkol2000@', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: true, // Adds createdAt and updatedAt timestamps
    underscored: true, // Converts camelCase to snake_case for table names and attributes
  },
});

// Define models and their associations
const User = require('./models/User')(sequelize, Sequelize);
const Store = require('./models/Store')(sequelize, Sequelize);
const Rating = require('./models/Rating')(sequelize, Sequelize);

// Export models and Sequelize instance
module.exports = {
  User,
  Store,
  Rating,
  sequelize,
  Sequelize,
};