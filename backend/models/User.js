module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
     
        role: {
            type: DataTypes.ENUM('admin', 'normal', 'store_owner'),
            allowNull: false,
        },
    });

    return User;
};
