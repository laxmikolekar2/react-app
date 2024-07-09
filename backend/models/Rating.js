module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
          },
      storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Store',
            key: 'id'
          }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
          },
      },
    });
  
    return Rating;
  };
  