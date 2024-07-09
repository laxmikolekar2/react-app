module.exports = (sequelize, DataTypes) => {
    const Store = sequelize.define('Store', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
          },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overallRating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      owner: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
    },
    });
  
    return Store;
  };
  